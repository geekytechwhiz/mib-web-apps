import React from 'react';
import Footer from "../../components/global-components/footer";
import Navbar from "../../components/global-components/navbar";
import { TrainingData } from '../../data/trainingList';
import TrainingList from "./components/trainingList";

function ExecutiveProgram() {
  let data = TrainingData['executive']
  return (
    <div>
    <Navbar />  
     <TrainingList title='Executive Training' category='executive' customclass="pd-top-120 bg-none" data={data}/>
    <Footer />
  </div>
  )
}

export default ExecutiveProgram