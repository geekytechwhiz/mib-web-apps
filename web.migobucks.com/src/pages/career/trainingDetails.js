import React from 'react';
import FooterV2 from '../../components/global-components/footer.js'; 
import Navbar from '../../components/global-components/navbar';
import TrainingInfo from './components/trainingInfo.js';
import { useParams } from 'react-router-dom';

const TrainingDetails = () => {
    debugger
  const { id, category } = useParams();
  return (
    <div>
      <Navbar />
      <TrainingInfo  id={id} category={category} customclass='pd-top-112' />
      <FooterV2 />
    </div>
  );
};

export default TrainingDetails;
