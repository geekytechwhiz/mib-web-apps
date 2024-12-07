import React from 'react'; 
import data from "../../../data/sectionsdata.json"

function WhatWeDo(props) {
  let publicUrl = process.env.PUBLIC_URL + '/';
  let imgattr = 'image';
  const info = data.whatwedo;
  let customclass = props.customclass ?  props.customclass : '';
  return (
    <div className={'sbst-service-area ' + customclass}>
      <div className='container'>
        <div className='row justify-content-center'>
          <div className='col-xl-6 col-lg-10'>
            <div className='section-title text-center'>
              <h2 className='title'>
                {info.sectiontitle}{' '}
                <span>{info.sectiontitle_color}</span>
              </h2>
              <p>{info.short_description}</p>
            </div>
          </div>
        </div>
        <div className='row custom-gutters-20 justify-content-center'>
          {info.items.map((item, i) => (
            <div key={i} className='col-lg-3 col-sm-6'>
              <div className='single-service-2 text-center'>
                <div className='thumb'>
                  <img src={publicUrl + item.icon} alt={imgattr} />
                </div>
                <h6>{item.title}</h6>
                <p>{item.content}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default WhatWeDo;
