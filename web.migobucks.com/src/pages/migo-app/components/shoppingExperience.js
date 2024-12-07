 import React from 'react'
 import data from "../../../data/sectionsdata.json"
 export default function ShoppingExperience() {
  const experience= data.whyChooseUs;
  let publicUrl = process.env.PUBLIC_URL + "/";
    let imgattr = "image";
    
    const inlineStyle = {
      backgroundImage: "url(" + publicUrl + experience.bgimg + ")",
    };
    return (
        <div>
          <div
            className="sbst-provide-security mg-top-100 mg-bottom-120"
            style={inlineStyle}
          >
            <div className="container">
              <div className="row">
                <div className="col-xl-7 col-lg-6">
                  <div
                    className="img-with-video img-with-video-2 wow animated fadeInRight"
                    data-wow-duration="1s"
                    data-wow-delay="0.3s"
                  >
                    <div className="img-wrap">
                      <img src={publicUrl + experience.videoimage} alt="video" />
                      <div className="hover">
                        <a
                          href={experience.videourl}
                          className="video-play-btn mfp-iframe"
                        >
                          <img
                            src={publicUrl + "assets/img/we-provide/3.png"}
                            alt="video"
                          />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-5 col-lg-6 desktop-center-item">
                  <div
                    className="wow animated fadeInLeft"
                    data-wow-duration="1s"
                    data-wow-delay="0.3s"
                  >
                    <div className="section-title style-two">
                      <h2 className="title">
                        <span> {experience.sectiontitle_color}</span>
                        <br />
                        {experience.sectiontitle}
                      </h2>
                      <p>{experience.short_description}</p>
                    </div>
                    <div className="row">
                      {experience.list_item.map((item, i) => (
                        <div key={i} className="col-md-6">
                          <div className="riyaqas-check-list">
                            <img src={publicUrl + item.icon} alt={imgattr} />
                            <span>{item.text}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
   
 }
 
