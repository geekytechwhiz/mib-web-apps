import React, { Component } from 'react'; 


class ComingSoonPage extends Component {

   
    render() {
        let publicUrl = process.env.PUBLIC_URL+'/'
        let imgattr = 'image'


    return <div>
              <div className="comming-soon-area">
                <div className="container">
                  <div className="row">
                    <div className="col-lg-5 col-md-6">
                      <h2 className="comming-soon-title">Coming Soon</h2>
                      {/* <div className="comming-soon-wrap">
                        <div className="countdown countdown--alt" />
                      </div> */}
                      <div className="newsletter-subcribe text-center">
                        <p>Notify me when we launch</p>
                        <form id="news-subcribeform" className="subcribe-form">
                          <div className="form-group">
                            <input type="text" className="form-control" placeholder="Your E-mail..." name="mail" required />
                            <button type="submit" className="btn-blue subcribe-submit" >submit</button>
                          </div>
                        </form>
                      </div>
                    </div>
                    <div className="col-xl-6 col-lg-7 col-md-6 offset-xl-1 text-center">
                      <div className="comming-soon-thumb">
                        <img src={publicUrl+"assets/img/comming-soon.png"} alt={404} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
          </div>
    }
}

export default ComingSoonPage