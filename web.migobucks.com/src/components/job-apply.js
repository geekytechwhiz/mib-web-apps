import React from "react";
import Navbar from "./global-components/navbar-v2";
import PageHeader from "./global-components/page-header";
import JobApplyForm from "./section-components/apply-form";
import FooterV2 from "./global-components/footer";

const JobApply = () => {
  return (
    <div>
      <JobApplyForm customclass="pd-top-190" />
    </div>
  );
};

export default JobApply;
