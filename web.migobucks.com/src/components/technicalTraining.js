import React from "react";
import FooterV2 from "./global-components/footer";
import Navbar from "./global-components/navbar";
import ExecutiveProgramList from "./section-components/career/trainingList";

const TechnicalTraining = () => {
  return (
    <div>
      <Navbar /> 
       <ExecutiveProgramList customclass="pd-top-120 bg-none" />
      <FooterV2 />
    </div>
  );
};

export default TechnicalTraining;
