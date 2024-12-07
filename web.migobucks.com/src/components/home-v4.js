import React from "react";
import Navbar from "./global-components/navbar";
import BannerV2 from "./section-components/banner-v2";
import ServiceV2 from "./section-components/services-v2";
import BusinessManage from "./section-components/business-manage";
import DataAnalytics from "./section-components/data-analytics";
import BusinessSolution from "./section-components/business-solution";
import PricingTable from "./section-components/pricing-table-v2";
import Testimonialv3 from "./section-components/testimonial-v3";
import Subscribe from "./section-components/subscribe";
import FooterV2 from "./global-components/footer.js";

const Home_v3 = () => {
  return (
    <div>
      <Navbar />
      {/* <BannerV2 /> */}
      <ServiceV2 />
      <BusinessManage />
      <DataAnalytics />
      <BusinessSolution />
      {/* <PricingTable />
      <Testimonialv3 /> */}
      <Subscribe />
      <FooterV2 />
    </div>
  );
};

export default Home_v3;
