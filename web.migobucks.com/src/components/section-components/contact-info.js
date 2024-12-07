import React, { Component } from "react";
import sectiondata from "../../data/sections.json";
import parse from "html-react-parser";

class Contact_Info extends Component {
  render() {
    return (
      <div>
        <div className="map-area pd-top-120">
          <div className="container">
            <div className="map-area-wrap">
              <div className="row no-gutters">
                <div className="col-lg-8">
                  <iframe
                    title="riyaqas-map"
                    width="1075"
                    height="440"
                    src="https://www.google.com/maps/embed?&amp;width=700&amp;height=400&amp;pb=!1m14!1m8!1m3!1d15549.532810202556!2d77.694241!3d13.011252!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x135b8ff32003484f!2sMigobucks%20Technologies%20Private%20Limited!5e0!3m2!1sen!2sin!4v1632251341183!5m2!1sen!2sin"
                    frameBorder="0"
                    scrolling="no"
                    marginHeight="0"
                    marginWidth="0"
                  ></iframe>
                </div>
                <div className="col-lg-4 desktop-center-item">
                  <div>
                    <div className="contact-info">
                      <h4 className="title">{sectiondata.contactinfo.title}</h4>
                      <p className="sub-title">
                        {sectiondata.contactinfo.description}
                      </p>
                      <p>
                        <span>Address:</span>{" "}
                        {parse(sectiondata.contactinfo.address)}
                      </p>
                      <p>
                        <span>Mobile:</span> {sectiondata.contactinfo.mobile}
                      </p>
                      <p>
                        <span>E-mail:</span> {sectiondata.contactinfo.mail}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact_Info;
