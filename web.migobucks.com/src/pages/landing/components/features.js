import React, { Component } from "react";
import sectiondata from "../../../data/sectionsdata.json";
import parse from "html-react-parser";

class Features extends Component {
  render() {
    let publicUrl = process.env.PUBLIC_URL + "/";
    let imgattr = "image";

    return (
      <div>
        <div className="sba-featute-area">
          <div className="container">
            <div className="row custom-gutters-16 justify-content-center">
              <div className="col-xl-4 col-lg-9">
                <div className="section-title style-two text-justify">
                  <h2 className="title">
                    {parse(sectiondata.features.sectiontitle)}{" "}
                    <span>{sectiondata.features.sectiontitle_color}</span>
                  </h2>
                  <p>{sectiondata.features.short_description}</p>
                  <a className="read-more" href={sectiondata.features.btn_url}>
                    {sectiondata.features.btn_text}{" "}
                    <i className="la la-long-arrow-right"></i>
                  </a>
                </div>
              </div>

              <div className="col-xl-4 col-sm-6">
                <div className="single-feature-left">
                  <div className="single-feature">
                    <div className="media">
                      <img
                        className="media-left"
                        src={publicUrl + "assets/img/features/1.png"}
                        alt="feature"
                      />
                      <div className="media-body">
                        <h6>Bringing New Customers everyday</h6>
                        <p>
                        Bring new customers and retain with our AI-powered loyalty program.                           
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="single-feature">
                    <div className="media border-radius-2">
                      <img
                        className="media-left"
                        src={publicUrl + "assets/img/features/2.png"}
                        alt="feature"
                      />
                      <div className="media-body">
                        <h6>Engage, Retain and Build loyal Customers</h6>
                        <p>
                        We engage and build a sustainable customer network by providing personalized customer experiences.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-sm-6 mg-top-80">
                <div className="single-feature-right">
                  <div className="single-feature">
                    <div className="media border-radius-3">
                      <img
                        className="media-left"
                        src={publicUrl + "assets/img/features/3.png"}
                        alt="feature"
                      />
                      <div className="media-body">
                        <h6>
                          Build, Maintain and Motivate the right employees/team
                        </h6>
                        <p>
                        We believe in our team. We provide a pleasant place to work and offer opportunities for self-development.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="single-feature">
                    <div className="media border-radius-4">
                      <img
                        className="media-left"
                        src={publicUrl + "assets/img/features/4.png"}
                        alt="feature"
                      />
                      <div className="media-body">
                        <h6>Ensure the our services quality</h6>
                        <p>
                          Our clients/partner will get assistance from AI-powered
                          suggestions.
                        </p>
                      </div>
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

export default Features;
