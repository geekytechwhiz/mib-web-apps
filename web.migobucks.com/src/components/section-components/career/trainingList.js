/* eslint-disable jsx-a11y/img-redundant-alt */
import { Link, Typography } from '@mui/material';
import React from 'react';
import { useHistory } from 'react-router-dom'; 

const renderBanner = (cat) => {
    
  if(cat=='executive') 
  return (
    <div className='highted-banner'>
      <Typography
        color={'white'}
        boxSizing='content-box'
        variant='h5'
        fontWeight={'medium'}
        sx={{
          fontWeight: 'small',
          fontSize: 'small',
          color: '#ffffff',
        }}
      >
        If you already registered with us we request you to click on this{' '}
        <Link
          color={'darkblue'}
          href='https://docs.google.com/forms/d/e/1FAIpQLSf2Qq-b0MI24OH__xW-Q6W8WEuyysdX42MHbToGcMU0ALK5eQ/viewform'
          target='_blank'
        >
          Link
        </Link>{' '}
        and proceed for the further onboarding process!!
      </Typography>
    </div>
  );
};
function TrainingList(props) {
  const history = useHistory();
  const { category,title } = props;
    ;
  let publicUrl = process.env.PUBLIC_URL + '/';
  let imgattr = 'image';
  let {data} = props
  let customclass = props.customclass ? props.customclass : '';

  return (
    <div>
      <div className={'job-listing-page ' + customclass}>
        <div className='container'>
          <div className='job-position-area'>
            {renderBanner(category)}
            <div className='row justify-content-center'>
              <div className='col-xl-8'>
                <div className='section-title style-four'>
                  <h2
                  className="title"
                  
                > 
                {title}
                </h2>
                </div>
                {/* single job list */}
                {data.map((item, i) => (
                  <div key={i} className='single-job-highlight media'>
                    <img src={publicUrl + item.icon} alt={imgattr} />
                    <div className='media-body'>
                      <h6>
                        {item.jobTitle}{' '}
                        {item.amount <= 0 && (
                          <span
                            style={{
                              display: 'inline-block',
                              background: '#27ae60',
                              padding: '2px 10px',
                              fontSize: '10px',
                              color: '#fff',
                              fontWeight: 'bold',
                              borderRadius: '15px',
                            }}
                          >
                            Free
                          </span>
                        )}
                      </h6>
                      <span>{item.date}</span>
                    </div>
                    <button
                      onClick={() =>
                        history.push(
                          `/ojt/${item.category}/details/${item.jobId}`
                        )
                      }
                      className='job-height-light-btn align-self-center float-right'
                    >
                      Apply
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TrainingList;
