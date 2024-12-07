import React from "react";
import FooterV2 from "./global-components/footer.js";
import Navbar from "./global-components/navbar";
import Features from "./section-components/features";
import MigoBrand from "./section-components/migo-brands";
import MigoBuddy from "./section-components/migo-buddy";
import SliderV2 from "./section-components/slider-v2";
import SoftBoxManage from "./section-components/soft-box-manage";
import Subscribe from "./section-components/subscribe";
import Testimonial from "./section-components/testimonial";
// import Testimonial_V4 from "./section-components/testimonial-v4";
import VideoV2 from "./section-components/video-v2";

const Home_V2 = () => {
  return (
    <div>
      <Navbar />
      <SliderV2 />
      <Features />
      <VideoV2 />
      <SoftBoxManage />
      <MigoBuddy />
      <MigoBrand />
      {/* <Screenshot />
      <PricingTable /> */}
      <Testimonial></Testimonial>
      {/* <Testimonial_V4></Testimonial_V4>  */}
      <Subscribe />
      <FooterV2 />
    </div>
  );
};

export default Home_V2;
