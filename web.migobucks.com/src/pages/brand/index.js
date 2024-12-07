import React from "react";
import Navbar from "../../components/global-components/navbar"; 
// import BannerV2 from "../../section-components/banner-v2";
// import BannerV2 from "../../components/section-components/banner-v2";
// import BusinessManage from "./section-components/business-manage";
// import DataAnalytics from "./section-components/data-analytics";
import DataAnalytics from "./components/data-analytics";
import BusinessSolution from "./components/business-solution";
// import BusinessSolution from "./section-components/business-solution";
// import PricingTable from "../components/section-components/pricing-table-v2";
import PricingTable from "./components/pricing-table"
import Testimonialv3 from "../../components/section-components/testimonial-v3";
import Subscribe from "../../components/section-components/subscribe";
// import Footer from "../global-components/footer.js";
import Footer from "../../components/global-components/footer";
import Services from "./components/migo-services";
import ManageBusiness from "./components/manage-business";
import BrandBanner from "./components/brand-banner"

const Brand = () => {
  return (
    <div>
      <Navbar /> 
      <BrandBanner></BrandBanner> 
      <Services></Services> 
      <ManageBusiness></ManageBusiness>
      <DataAnalytics />
      {/* <BusinessSolution /> */}
      <PricingTable />
      {/* <Testimonialv3 /> */}
      <Subscribe />
      <Footer />
    </div>
  );
};

export default Brand;
