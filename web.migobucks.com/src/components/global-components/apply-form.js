import React, { useCallback, useState } from "react";
import { Alert, Icon, Whisper, Tooltip } from "rsuite";
import { upload } from "../../api/file";

function ApplyForm(props) {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [joinDate, setJoinDate] = useState("");
  const [experience, setExperience] = useState("");
  const [qualification, setQualification] = useState("");
  const [note1, setNote1] = useState("");
  const [note, setNote] = useState("");
  const [fileUrl, setFileUrl] = useState("");

  const [submitEnabled, setSubmitEnabled] = useState(false);

  const [isValidEmail, setEmailValid] = useState(true);

  const [resume, setResumeFile] = useState(null);

  const [loading, setLoading] = useState(false);

  const allowedFileTypes = React.useMemo(
    () => [
      "application/pdf",
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
      "application/msword",
    ],
    []
  );

  const tomorrow = React.useMemo(() => {
    const currentDate = new Date();
    currentDate.setDate(currentDate.getDate() + 1);
    return `${currentDate.getFullYear()}-${
      currentDate.getMonth() + 1 < 10
        ? `0${currentDate.getMonth() + 1}`
        : currentDate.getMonth() + 1
    }-${
      currentDate.getDate() < 10
        ? `0${currentDate.getDate()}`
        : currentDate.getDate()
    }`;
  }, []);

  React.useEffect(() => {
    if (email.length <= 0) return setSubmitEnabled(false);
    if (!isValidEmail || loading) {
      return setSubmitEnabled(false);
    } else {
      setSubmitEnabled(true);
    }
  }, [email.length, isValidEmail, loading]);

  const validateEmail = useCallback((e) => {
    if (String(e).trim().length === 0) return setEmailValid(false);
    const EMAIL_PATTERN =
      /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/gi;
    const isValid = EMAIL_PATTERN.test(String(e));
    setEmailValid(isValid);
  }, []);

  const uploadFileToAPI = useCallback(async (file) => {
    const formData = new FormData();
    formData.append("file", file);
    setLoading(true);
    const { data } = await upload(formData);
    setLoading(false);
    setFileUrl(data[0]);
  }, []);

  const handleFileDrop = useCallback(
    (e) => {
      e.preventDefault();
      e.currentTarget.classList.remove("hovered");
      const selectedFile = e.dataTransfer.files[0];

      if (!allowedFileTypes.includes(selectedFile.type)) {
        return Alert.error("Only PDF and Doc Files Allowed", 6000);
      }
      setResumeFile(selectedFile);
      uploadFileToAPI(selectedFile);
    },
    [allowedFileTypes, uploadFileToAPI]
  );

  const handleRemoveFile = useCallback(() => {
    setResumeFile(null);
    setFileUrl("");
  }, []);

  const handleSelectFile = useCallback(() => {
    const el = document.createElement("input");
    el.type = "file";
    el.setAttribute("accept", allowedFileTypes.toString());
    el.addEventListener("change", (event) => {
      const selectedFile = event.target.files[0];
      if (!allowedFileTypes.includes(selectedFile.type)) {
        return Alert.error("Only PDF and Doc Files Allowed", 6000);
      }
      setResumeFile(selectedFile);
      uploadFileToAPI(selectedFile);
    });
    el.click();
  }, [allowedFileTypes, uploadFileToAPI]);

  const handleFormSubmit = useCallback(
    (ev) => {
      ev.preventDefault();
      if (props.onApply) {
        props.onApply({
          fullName,
          email,
          phone,
          joinDate,
          note1,
          note,
          experience,
          qualification,
          fileUrl,
        });
      }
    },
    [
      email,
      experience,
      fullName,
      joinDate,
      note,
      note1,
      phone,
      props,
      qualification,
      fileUrl,
    ]
  );

  return (
    <div>
      <div className={""}>
        <div className="">
          <div className="row justify-content-center reset-margins">
            <div className="col-xl-10 col-lg-10">
              <div className="job-apply-area">
                <form
                  style={{ fontFamily: "poppins" }}
                  onSubmit={handleFormSubmit}
                  className="riyaqas-form-wrap"
                >
                  <div className="row">
                    <div className="col-md-6">
                      <div className="single-input-wrap">
                        <input
                          type="text"
                          autoComplete="none"
                          placeholder="Full Name"
                          className="single-input"
                          value={fullName}
                          onChange={(ev) => setFullName(ev.target.value)}
                          required
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <Whisper
                        placement="top"
                        trigger="hover"
                        speaker={
                          !isValidEmail ? (
                            <Tooltip>Invalid Email</Tooltip>
                          ) : (
                            <></>
                          )
                        }
                      >
                        <div className="single-input-wrap">
                          <input
                            type="email"
                            autoComplete="none"
                            placeholder="Email"
                            value={email}
                            onChange={(ev) => {
                              setEmail(ev.target.value);
                              validateEmail(ev.target.value);
                            }}
                            style={{
                              borderColor: !isValidEmail && "red",
                            }}
                            className="single-input"
                            required
                          />
                        </div>
                      </Whisper>
                    </div>
                    <div className="col-md-6">
                      <div className="single-input-wrap">
                        <input
                          autoComplete="none"
                          placeholder="Contact Number"
                          type="tel"
                          value={phone}
                          onChange={(ev) => setPhone(ev.target.value)}
                          className="single-input"
                          required
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="single-input-wrap">
                        <input
                          placeholder="Date for joining"
                          type="text"
                          autoComplete="none"
                          onFocus={(e) => {
                            e.currentTarget.type = "date";
                            e.currentTarget.min = tomorrow;
                          }}
                          onBlur={(e) => {
                            e.currentTarget.type = "text";
                            e.currentTarget.placeholder = "Date for joining";
                          }}
                          onChange={(ev) => setJoinDate(ev.target.value)}
                          className="single-input"
                          required
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="single-input-wrap">
                        <input
                          autoComplete="none"
                          placeholder="Qualification"
                          type="text"
                          value={qualification}
                          onChange={(ev) => setQualification(ev.target.value)}
                          className="single-input"
                          required
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="single-input-wrap">
                        <input
                          placeholder="Experience (If any)"
                          type="text"
                          autoComplete="none"
                          value={experience}
                          onChange={(ev) => setExperience(ev.target.value)}
                          className="single-input"
                          required
                        />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="single-input-wrap">
                        <textarea
                          placeholder="Why Join Migobucks?"
                          className="single-input"
                          autoComplete="none"
                          value={note1}
                          onChange={(ev) => setNote1(ev.target.value)}
                          cols={20}
                        />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="single-input-wrap">
                        <textarea
                          placeholder="Note"
                          className="single-input"
                          cols={20}
                          autoComplete="none"
                          value={note}
                          onChange={(ev) => setNote(ev.target.value)}
                        />
                      </div>
                    </div>
                    <div className="col-md-12">
                      {resume === null && (
                        <div className="single-input-wrap">
                          <div
                            onClick={handleSelectFile}
                            onDragOver={(e) => e.preventDefault()}
                            onDragEnter={(e) => {
                              e.preventDefault();
                              e.currentTarget.classList.add("hovered");
                            }}
                            onDrop={handleFileDrop}
                            style={{
                              display: "flex",
                              justifyContent: "center",
                              alignItems: "center",
                              height: "100px",
                              cursor: "pointer",
                              fontFamily: "poppins",
                              border: "2px dashed lightgrey",
                            }}
                          >
                            <p>Drag {"&"} Drop your resume here</p>
                          </div>
                        </div>
                      )}

                      <div
                        style={{
                          marginTop: "10px",
                          fontFamily: "poppins",
                          background: "#ecf0f1",
                          padding: "10px 20px",
                          borderRadius: "8px",
                          position: "relative",
                        }}
                      >
                        {resume ? (
                          <p>
                            <Icon
                              icon={
                                resume.type.includes("pdf")
                                  ? "file-pdf-o"
                                  : "file-text"
                              }
                              style={{ marginRight: "15px" }}
                            />
                            <Whisper
                              placement="top"
                              trigger="hover"
                              speaker={<Tooltip>Click to download</Tooltip>}
                            >
                              {resume.name && resume.name.length > 30 ? (
                                <a download={"resume"} href={fileUrl}>
                                  {resume.name.substring(0, 30)}...
                                </a>
                              ) : (
                                <a download={"resume"} href={fileUrl}>
                                  {resume.name}
                                </a>
                              )}
                            </Whisper>{" "}
                            <Whisper
                              placement="top"
                              trigger="hover"
                              speaker={<Tooltip>Remove</Tooltip>}
                            >
                              <Icon
                                icon="close"
                                onClick={handleRemoveFile}
                                style={{
                                  cursor: "pointer",
                                  marginLeft: "8px",
                                  position: "absolute",
                                  right: "15px",
                                  top: "15px",
                                }}
                              />
                            </Whisper>
                          </p>
                        ) : (
                          <p>No File Selected</p>
                        )}
                      </div>
                    </div>
                    <div className="col-12"></div>
                    <div className="col-12 text-center">
                      <button
                        disabled={!submitEnabled}
                        type="submit"
                        className="btn btn-blue"
                        style={{ marginTop: "10px" }}
                      >
                        {props.submitBtnText}
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ApplyForm;
