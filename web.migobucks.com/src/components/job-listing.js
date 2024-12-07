import React from "react";
import FooterV2 from "./global-components/footer.js";
import Navbar from "./global-components/navbar";
import Job_Listing from "./section-components/job-listing";

const Job_listing = () => {
  return (
    <div>
      <Navbar /> 
      <Job_Listing customclass="pd-top-120 bg-none" />
      <FooterV2 />
    </div>
  );
};

export default Job_listing;
