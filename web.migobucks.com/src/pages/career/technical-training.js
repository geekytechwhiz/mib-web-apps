import React from "react"; 
import Footer from "../../components/global-components/footer";
import Navbar from "../../components/global-components/navbar"; 
import TrainingList from "./components/trainingList";
import { TrainingData } from '../../data/trainingList';
const TechnicalTraining = () => {
  const data=TrainingData["technical"]
  return (
    <div>
      <Navbar /> 
       <TrainingList category='technical' title='Technical Training' data ={data} customclass="pd-top-120 bg-none" />
      <Footer/>
    </div>
  );
};

export default TechnicalTraining;
