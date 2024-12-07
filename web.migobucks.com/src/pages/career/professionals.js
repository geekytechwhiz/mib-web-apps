import React from 'react';
import Footer from "../../components/global-components/footer";
import Navbar from "../../components/global-components/navbar";
import { TrainingData } from '../../data/trainingList';
import TrainingList from "./components/trainingList";

function Professionals() {
  let data = TrainingData['professionals']
  debugger
  return (
    <div>
    <Navbar />  
     <TrainingList title='Professionals Training' category='professionals' customclass="pd-top-120 bg-none" data={data}/>
    <Footer />
  </div>
  )
}

export default Professionals