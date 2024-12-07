import React from 'react';
import Footer from "../../components/global-components/footer";
import Navbar from "../../components/global-components/navbar";
import { TrainingData } from '../../data/trainingList';
import TrainingList from "./components/trainingList";

const OJT = () => {
  const data=TrainingData["ojt"]
  return (
    <div>
      <Navbar /> 
      <TrainingList title='On Job Training' category='ojt' data ={data} customclass="pd-top-120 bg-none" />
      <Footer />
    </div>
  );
};

export default OJT;
