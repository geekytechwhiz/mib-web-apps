/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';
import { useHistory } from 'react-router-dom'; 
import { executiveProgram } from '../../data/trainingDetails';
function TechnicalTrainingSection(props) {
  const history = useHistory();

  let publicUrl = process.env.PUBLIC_URL + '/';
  let imgattr = 'image';
  let data = executiveProgram;
  let customclass = props.customclass ? props.customclass : '';

  return (
    <div>
    <div className={"job-listing-page " + customclass}>
      <div className="container">
        <div className="job-position-area"> 
          <div className="row justify-content-center">
            <div className="col-xl-8">
              <div className="section-title style-four">
                <h2
                  className="title"
                  dangerouslySetInnerHTML={{ __html: data.sectiontitle }}
                ></h2>
              </div> 
              {data.job.map((item, i) => (
                <div key={i} className="single-job-highlight media">
                  <img src={publicUrl + item.icon} alt={imgattr} />
                  <div className="media-body">
                    <h6>
                      {item.jobtitle}{" "}
                      {item.amount <= 0 && (
                        <span
                          style={{
                            display: "inline-block",
                            background: "#27ae60",
                            padding: "2px 10px",
                            fontSize: "10px",
                            color: "#fff",
                            fontWeight: "bold",
                            borderRadius: "15px",
                          }}
                        >
                          Free
                        </span>
                      )}
                    </h6>
                    <span>{item.date}</span>
                  </div>
                  <button
                    onClick={() => history.push(`/ojt/details/${item.jobId}`)}
                    className="job-height-light-btn align-self-center float-right"
                  >
                    {data.buttontext}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
}

export default TechnicalTrainingSection;
