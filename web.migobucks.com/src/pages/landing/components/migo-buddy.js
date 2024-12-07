import React, { Component } from "react";
import sectiondata from "../../../data/sections.json";

class MigoBuddy extends Component {
  render() {
    let publicUrl = process.env.PUBLIC_URL + "/";
    let imgattr = "image";

    return (
      <div>
        <div className="sba-manage-data-area">
          <div className="container">
            <div className="row justify-content-md-center revert-mobile">
              <div
                className="col-xl-7 col-lg-6 order-md-1 wow animated fadeInLeft"
                data-wow-duration="1s"
                data-wow-delay="0.3s"
              >
                <img
                  src={publicUrl + sectiondata.softboxmanage.imgurl}
                  alt={imgattr}
                />
              </div>
              <div className="col-xl-4 col-lg-6 col-md-10 offset-xl-1 desktop-center-item">
                <div
                  className="section-title style-two text-lg text-justify wow animated fadeInRight"
                  data-wow-duration="1s"
                  data-wow-delay="0.3s"
                >
                  <h2 className="title">
                    {sectiondata.MigoBuddy.sectiontitle_part1}{" "}
                    <span>{sectiondata.MigoBuddy.sectiontitle_color}</span>
                  </h2>
                  <p>{sectiondata.MigoBuddy.short_description}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MigoBuddy;
