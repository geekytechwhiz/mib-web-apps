import React from "react";
import Footer from "../../components/global-components/footer";
import Navbar from "../../components/global-components/navbar";
import Subscribe from "../../components/global-components/subscribe";

import BuddySlider from "./components/slider";
import FinancialFreedom from "./components/financial-freedom";

const Buddy = () => {
  return (
    <div>
      <Navbar />
      <BuddySlider />
      {/* <Client /> */}
      {/* <Service /> */}
      {/* <Marketing /> */}
      {/* <Help /> */}
      <FinancialFreedom></FinancialFreedom>
      {/* <Time /> */}
      {/* <CaseStudies /> */}
      {/* <Testimonial /> */}
      <Subscribe />
      <Footer />
    </div>
  );
};

export default Buddy;
