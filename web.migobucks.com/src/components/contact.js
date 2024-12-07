import React from "react";
import Navbar from "./global-components/navbar";
// import PageHeader from "./global-components/page-header";
import ContactForm from "./section-components/contact-form";
import ContactInfo from "./section-components/contact-info";
import Footer from "./global-components/footer.js";

const Contact = () => {
  return (
    <div>
      <Navbar />
      {/* <PageHeader headertitle="Contact" /> */}
      <ContactForm />
      <ContactInfo />
      <Footer />
    </div>
  );
};

export default Contact;
