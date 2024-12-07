import React from "react";
import Navbar from "../../components/global-components/navbar";
import Banner from "../../components/section-components/banner";
import ShoppingExperience from "./components/shoppingExperience";
import WhatWeDo from "./components/whatwedo";
// import Team from "../../components/section-components/team";
import Footer from "../../components/global-components/footer.js";
import Subscribe from "../../components/section-components/subscribe";
import Offers from "./components/offer";
import Skills from "./components/skill";

const MigoApp = () => {
  return (
    <div>
      <Navbar />
      <Banner />
      <WhatWeDo customclass="pd-top-80" />
      <ShoppingExperience /> 
      <Skills></Skills>
      <Offers></Offers>
      {/* <Team /> */}
      {/* <Client /> */}
      {/* <Screenshot /> */}
      <Subscribe />
      <Footer />
    </div>
  );
};

export default MigoApp;
