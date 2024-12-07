import React from "react";
import Navbar from "../../components/global-components/navbar";  
import Subscribe from "../../components/global-components/subscribe";
import Testimonial from "../../components/global-components/testimonial.js"; 
import Footer from "../../components/global-components/footer";
import Slider from "./components/slider.js"; 
import Features from "./components/features"
import MigoAppBox from "./components/migo-app-box.js";
import MigoBrand from "./components/migo-brands.js";
import MigoBuddy from "./components/migo-buddy.js";
import Opportunities from "./components/opportunities.js";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Slider /> 
      <Opportunities />
      <MigoAppBox />
      <MigoBuddy />
      <MigoBrand />
      <Features /> 
      <Testimonial></Testimonial> 
      <Subscribe />
      <Footer />
    </div>
  );
};

export default Home;
