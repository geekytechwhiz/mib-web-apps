import React, { Component } from "react";
import sectiondata from "../../data/sections.json";

class WordProcessing extends Component {
  render() {
    let publicUrl = process.env.PUBLIC_URL + "/";
    let imgattr = "image";
    let data = sectiondata.whatwedo;
    let customclass = this.props.customclass ? this.props.customclass : "";

    return (
      <div>
        <div className={"work-processing-area " + customclass}>
          <div className="container">
            <div className="row justify-content-center custom-gutters-16 single-work-processing">
              <div className="col-xl-5 col-md-6 order-lg-12">
                <div className="thumb swp-right-thumb">
                  <img
                    src={publicUrl + "assets/img/work-processing/1.png"}
                    alt="img"
                  />
                </div>
              </div>
              <div className="col-xl-4 col-md-6 order-lg-1 desktop-center-item">
                <div className="work-processing-details">
                  <div className="section-title style-four">
                    <h1 className="counting-number">1</h1>
                    <h2 className="title">
                      Migibucks<span>App</span>
                    </h2>
                    <p>
                      A platform for sharing brand experience, create personal
                      circles and connect with them by Sharing and earning
                      rewards, free vouchers and lots of fun. Most of us are
                      used to buying from different brands and sharing
                      experiences in our society and we put into social media
                      just to get some likes and shares in our customer
                      application, you will be able to get all the offers and
                      cash backs from different brands in one place, buy from
                      your favorite brands, search the nearby offers and connect
                      with your people to share rewards and to show-off your
                      personality. In Migobucks, they will be able to use free
                      credits and vouchers through circle program, so that he
                      can incraese his purchase capacity.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="row justify-content-center custom-gutters-16 single-work-processing">
              <div className="col-xl-5 col-md-6">
                <div className="thumb">
                  <img
                    src={publicUrl + "assets/img/work-processing/2.png"}
                    alt="img"
                  />
                </div>
              </div>
              <div className="col-xl-4 col-md-6 desktop-center-item">
                <div className="work-processing-details">
                  <div className="section-title style-four">
                    <h1 className="counting-number">2</h1>
                    <h2 className="title">
                      Migobucks
                      <span>Buddy</span>
                    </h2>
                    <p>
                      Migobucks Buddy is a platform for earning money and
                      rewards by doing some tasks. Anyone can register as a
                      buddy through the mobile app or web app, even the existing
                      migobucks users too. They will be able to earn through
                      Migo-tasks and Micro-jobs It is to open a new and
                      innovative avenue of Sales promoting channels through the
                      powerful Buddy and Customer sub- Ecosystems.Once the brand
                      has imported the exclusive products or vouchers in the
                      brand booster will be converted as promotional tasks and
                      will be visible to the users in our buddy app, these tasks
                      will be shown in the Migo tasks tab
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="row justify-content-center custom-gutters-16 single-work-processing">
              <div className="col-xl-5 col-md-6 order-lg-12">
                <div className="thumb swp-right-thumb">
                  <img
                    src={publicUrl + "assets/img/work-processing/3.png"}
                    alt="img"
                  />
                </div>
              </div>
              <div className="col-xl-4 col-md-6 order-lg-1 desktop-center-item">
                <div className="work-processing-details">
                  <div className="section-title style-four">
                    <h1 className="counting-number">3</h1>
                    <h2 className="title">
                      Migobucks <span>Brands</span>
                    </h2>
                    <p>
                      Migobucks, is a brand owned by Migobucks Technologies
                      Private Limited - Bangalore, a software company operating
                      worldwide. We are working on a Social Commerce platform
                      which can solve potential brand products selling problems
                      for business owners; can give an edge and 360° better
                      shopping experience for individual customers; also
                      providing a wonderful platform for individuals and
                      influencers who wish to earn additional money by doing few
                      interesting and valuable tasks. By using our Store
                      Management System, brands can add the Store and Store-type
                      which will be added in their proﬁle. This helps the end
                      users to identify the physical locations to buy or
                      experience the products and to redeem the vouchers that
                      they bought in our customer app. Brands can also see what
                      business is happening in the outlets and can also make
                      sure the minimum business is happening in their stores.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* <div className="row justify-content-center custom-gutters-16 single-work-processing">
              <div className="col-xl-5 col-md-6">
                <div className="thumb">
                  <img
                    src={publicUrl + "assets/img/work-processing/4.png"}
                    alt="img"
                  />
                </div>
              </div>
              <div className="col-xl-4 col-md-6 desktop-center-item">
                <div className="work-processing-details">
                  <div className="section-title style-four">
                    <h1 className="counting-number">4</h1>
                    <h2 className="title">
                      Finally All Process We do <span>Implement</span>
                    </h2>
                    <p>
                      Why I say old chap that is, spiffing jolly good a load of
                      old tosh spend a penny tosser arse over tit, excuse my
                      French owt to do with me up the kyver matie boy.
                    </p>
                  </div>
                </div>
              </div>
            </div> */}
            {/* <div className="row justify-content-center custom-gutters-16 single-work-processing">
              <div className="col-xl-5 col-md-6 order-lg-12">
                <div className="thumb swp-right-thumb">
                  <img
                    src={publicUrl + "assets/img/work-processing/5.png"}
                    alt="img"
                  />
                </div>
              </div>
              <div className="col-xl-4 col-md-6 order-lg-1 desktop-center-item">
                <div className="work-processing-details">
                  <div className="section-title style-four">
                    <h1 className="counting-number">5</h1>
                    <h2 className="title">
                      <span>Test</span> the Final work then submit the Project
                    </h2>
                    <p>
                      Why I say old chap that is, spiffing jolly good a load of
                      old tosh spend a penny tosser arse over tit, excuse my
                      French owt to do with me up the kyver matie boy.
                    </p>
                  </div>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    );
  }
}

export default WordProcessing;
