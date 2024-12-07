import React, { Component } from 'react';
import sectiondata from '../../../data/sectionsdata.json';

class BrandBanner extends Component {
  render() {
    let publicUrl = process.env.PUBLIC_URL + '/';
    let imagealt = 'image';
    let data = sectiondata.brandBanner;

    return (
      <div>
        <div
          className='header-area sbbs-header-area'
          style={{
            backgroundImage: 'url(' + publicUrl + 'assets/img/bg/sbbs-bg.png)',
          }}
        >
          <div className='shape1'>
            <img src={publicUrl + 'assets/img/banner/s1.png'} alt='animate' />
          </div>
          <div className='shape2'>
            <img src='assets/img/banner/s2.png' alt='animate' />
          </div>
          <div className='shape3' />
          <div className='shape4' />
          <div className='container'>
            <div className='row justify-content-center'>
              <div className='col-xl-10'>
                <div className='header-inner text-center'>
                   
                  <h1 className='title'>
                    {data.title} <br /> {data.subtitle}
                    {/* <span className='typed' /> */}
                  </h1>
                  <div className='btn-wrapper text-center'>
                    <a className='btn btn-transparent btn-rounded' target='_blank' rel="noreferrer" href={data.signUpUrl}>
                      {data.signUpText}
                    </a>
                    <a className='btn btn-white btn-rounded' target='_blank' rel="noreferrer" href={data.loginUrl}>
                      {data.loginText}
                    </a>
                  </div>
                </div> 
              </div>
              <div className='col-xl-9 col-lg-10 hidden-sm'>
                <div className='banner-thumbnail'>
                  <img src={publicUrl + data.bannerimage} alt='banner-img' />
                  <div className='hover'>
                    <div className='waves-block'>
                      <div className='waves wave-1' />
                      <div className='waves wave-2' />
                      <div className='waves wave-3' />
                    </div>
                    <a
                      href={data.videourl}
                      className='video-play-btn mfp-iframe'
                    >
                      <img src='assets/img/banner/play.png' alt={imagealt} />
                    </a>
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

export default BrandBanner;
