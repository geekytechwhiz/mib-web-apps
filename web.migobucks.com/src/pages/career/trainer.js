import { Box, Card } from '@mui/material';
import React from 'react';
import FooterV2 from '../../components/global-components/footer.js';
import Navbar from '../../components/global-components/navbar';
import Register from './components/register';

function Trainer() {
  return (
    <div>
      <Navbar />
      <Box pt={15} pb={5} width="100%" alignItems={"center"}>
         <Card  sx={{marginLeft:5, marginRight:5, paddingBottom:10, }}  >
         <Register></Register>
         </Card>
      </Box>
     
      <FooterV2 />
    </div>
  );
}

export default Trainer;
