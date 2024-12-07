import PhotoCamera from '@mui/icons-material/PhotoCamera';
import SaveIcon from '@mui/icons-material/Save';
import LoadingButton from '@mui/lab/LoadingButton';
import { Box, Grid, TextField, Typography, Alert } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import axios from 'axios';
import React, { useRef, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { postSignedUrl } from '../../../api/file';
import { ValidateMobile, ValidateEmail } from '../../../utils/helper';
import { enroll } from '../../../api/ojt';

function Register() {
  const [userInfo, setUserInfo] = useState({});
  const [isEnabled, setIsEnabled] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState({});
  const [regStatus, setRegStatus] = useState({
    status: false,
    statusCode: 200,
  });
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [isValidMobile, setIsValidMobile] = useState(true);
  const [isValidEmail, setIsValidEmail] = useState(true);

  const uuid = uuidv4();
  const profileRef = useRef(null);
  const handleChange = (event) => {
    const { name } = event.target;
    const { value } = event.target;
    debugger;
    if (name == 'mobile') {
      const isValid = ValidateMobile(value);
      setIsValidMobile(isValid);
    }
    if (name == 'email') {
      const isValid = ValidateEmail(value);
      setIsValidEmail(isValid);
    }
    setUserInfo(() => ({
      ...userInfo,
      [name]: value,
    }));
  };

  const getUploadParams = async (e) => {
    const { name } = e.target;
    setIsLoading(false);
    const file = selectedFiles[0];
    const req = {
      contentType: file.type,
      resource: 'TRAINING',
      resourceId: userInfo.email,
      uuid,
    };
    const res = await postSignedUrl(req);
    if (!res) return null;
    const axiosRes = await axios.put(res.preSignedUrl, file);

    if (axiosRes.status !== 200) {
      setStatus({
        show: true,
        title: 'Updated Action failed',
        status: 'error',
        message: 'Updated Action failed!',
      });
    } else {
      setStatus({
        show: true,
        title: 'Updated Successfully',
        status: 'success',
        message: 'File uploaded successfully!',
      });
    }
    const imgUlr = { Name: file.name, Url: res.fileName };
    setUserInfo(() => ({
      ...userInfo,
      resumeUrl: imgUlr,
    }));

    setIsEnabled({
      Signature: false,
      Logo: false,
    });
    setIsLoading(false);
  };

  const handleFileUpload = (event) => {
    const { name } = event.target;
    if (event.target.files[0]) {
      const tempSelectedFiles = selectedFiles;
      tempSelectedFiles.push(event.target.files[0]);
      setSelectedFiles(tempSelectedFiles);
      setUserInfo(() => ({
        ...userInfo,
        [name]: event.target.files[0].name,
      }));

      setIsEnabled(true);
    }
  };

  const handleRegister = async () => {
    debugger;
    setIsLoading(true);
    try {
      const res = await enroll(userInfo);
      if (res.statusCode == 200) {
        setRegStatus({ status: true, statusCode: 200 });
        setIsLoading(false);
      } else {
        setRegStatus({ status: true, statusCode: 400 });
        setIsLoading(false);
      }
    } catch (e) {
      setRegStatus({ status: true, statusCode: 400 });
      setIsLoading(false);
    }
  };
  const alertContent = (message, status) => (
    <Alert color={status} dismissible>
      <Box>
        <Typography variant='body2' color='white'>
          {message}&nbsp;&nbsp;&nbsp;
        </Typography>
      </Box>
    </Alert>
  );
  return (
    <Box
      textAlign='center'
      alignItems={'center'}
      justifyContent='center'
      flexDirection='column'
      mx={20}
    >
      {regStatus.status && regStatus.statusCode === 200
        ? alertContent(
            'You are successfully registered with us. We will get back to soon!!',
            'success'
          )
        : regStatus.status && regStatus.statusCode === 400
        ? alertContent(
            'Sorry for the inconvenience. Our system is under maintenance now. Please contact hello@migobucks.com. We appreciate your patient',
            'error'
          )
        : ''}

       
        <Grid
          container
          display='flex'
          spacing={0.5}
          justifyContent='center'
          flexDirection='column'
          alignItems={'center'}
          xs={12}
        >
          
            <Typography
              variant='h5'
              textAlign='start'
              fontWeight='medium'
              p={1}
              mb={2}
            >
              Register With Us
            </Typography>
         
        </Grid>
        <Grid
          container
          display='flex'
          alignItems={'center'}
          justifyContent='center'
          flexDirection='column'
          spacing={2}
          xs={12}
        >
          <Grid item xs={5} mb={2}>
            <TextField
              size='small'
              value={userInfo.firstName}
              required
              type='text'
              name='firstName'
              label='First Name'
              fullWidth
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={5} mb={2}>
            <TextField
              size='small'
              value={userInfo.lastName}
              required
              type='text'
              name='lastName'
              label='Last Name'
              fullWidth
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={5} mb={2}>
            <TextField
              size='small'
              required
              type='email'
              label='Email'
              helperText={isValidEmail ? '' : 'Incorrect Email Id'}
              error={!isValidEmail}
              value={userInfo.email}
              name='email'
              fullWidth
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={5} mb={2}>
            <TextField
              size='small'
              required
              type='text'
              name='City'
              value={userInfo.gender}
              label='City'
              fullWidth
              onChange={handleChange}
            />
          </Grid>

          <Grid item xs={5} mb={2}>
            <TextField
              size='small'
              required
              error={!isValidMobile}
              pattern='[1-9]{1}[0-9]{9}'
              type='number'
              label='WhatsApp Number'
              helperText={isValidMobile ? '' : 'Incorrect WhatsApp number'}
              value={userInfo.contactNumber}
              name='contactNumber'
              fullWidth
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={5} mb={1}>
            <TextField
              size='small'
              required
              type='number'
              name='experience'
              value={userInfo.experience}
              label='Total Years of Experience'
              fullWidth
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={5}>
            <Typography
              variant='caption'
              color='text'
              fontWeight='medium'
              textAlign='left'
            >
              Upload Resume
            </Typography>
            <>
              <label htmlFor='icon-button-photo'>
                <input
                  ref={profileRef}
                  type='file'
                  name='resume'
                  accept='image/*'
                  style={{ display: 'none' }}
                  onChange={handleFileUpload}
                />
                <IconButton
                  color='secondary'
                  aria-label='Signature'
                  component='span'
                  onClick={() => profileRef.current.click()}
                >
                  <PhotoCamera />
                </IconButton>
                {isEnabled ? (
                  <>
                    {' '}
                    <LoadingButton
                      sx={{ margin: 2 }}
                      loading={isLoading}
                      disabled={!isEnabled}
                      color='success'
                      loadingPosition='start'
                      startIcon={<PhotoCamera />}
                      variant='outlined'
                      mx={2}
                      name='Signature'
                      size='small'
                      onClick={getUploadParams}
                    >
                      Upload
                    </LoadingButton>
                    <Typography
                      variant='caption'
                      color='text'
                      fontWeight='medium'
                      textAlign='left'
                    >
                      {status.message}
                    </Typography>
                  </>
                ) : (
                  <></>
                )}
              </label>
            </>
          </Grid>
        </Grid>

        <Grid
          container
          display='flex'
          spacing={1}
          justifyContent='flex-start'
          flexDirection='row'
          textAlign='left'
        ></Grid>
        <Box display='flex' flexDirection='row' mt={1} justifyContent='center'>
          <Box sx={{ mx: 2 }}>
            <LoadingButton
              color='primary'
              loading={isLoading}
              loadingPosition='start'
              startIcon={<SaveIcon />}
              variant='contained'
              mx={2}
              onClick={handleRegister}
            >
              Get Started
            </LoadingButton>
          </Box>
        </Box>
     
    </Box>
  );
}

export default Register;
