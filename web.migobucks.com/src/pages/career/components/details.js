import { Box, Typography } from '@mui/material';
import React from 'react';
const renderList = (list) => {
  if (!list|| (list&&list.length == 0)) return <></>;
  return (
    <ul>
      {list.length>0?list?.map((x) => {
        return (
          <li>
            <Typography variant='caption'> {x}</Typography>
          </li>
        );
      }):<></>}
    </ul>
  );
};
function Details(props) {
  debugger;
  console.log(props);
  const { jobId, category, jobTitle, date, icon, amount, details } = props.data;
  const { preRequisites, objectives, overview, idealFor, benefits } = details;
  if(preRequisites.length<=0)
  return <>No Details</>
  
  return (
    <Box>
      <Box pb={2}>
        <Box pb={2}>
          <Typography variant='h5'>Pre-requisites </Typography>
        </Box>

        {renderList(preRequisites)}
      </Box>
      <Box pb={2}>
        <Box pb={2}>
          <Typography variant='h5'>Training Objectives </Typography>
        </Box>
        <div>
          <Typography variant='caption'> {renderList(objectives)} </Typography>
        </div>
      </Box>
      <Box pb={2}>
        <Box pb={2}>
          <Typography variant='h5'>Training Overview </Typography>
        </Box>
        <div>
          <Typography variant='caption'> {renderList(overview)} </Typography>
        </div>
      </Box>
      <Box pb={2}>
        <Box pb={2}>
          <Typography variant='h5'>
            This online Technical Training is ideal for
          </Typography>
        </Box>
        <div>{renderList(idealFor)}</div>
      </Box>
      <Box>
        <Box pb={2}>
          <Typography variant='h5'>Benefits</Typography>
        </Box>
        <div>{renderList(benefits)}</div>
      </Box>
    </Box>
  );
}

export default Details;
