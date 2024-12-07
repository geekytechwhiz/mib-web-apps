import React, { Component } from 'react';
import { Link } from 'react-router-dom'; 
class Navbar extends Component {
  render() {
    let publicUrl = process.env.PUBLIC_URL + '/';
    let imgattr = 'logo';
    let anchor = '/';
    return (
      <div>
        <nav
          style={{ fontFamily: 'poppins', fontWeight: 'bold' }}
          className='navbar navbar-area navbar-expand-lg nav-style-01 py-2 navbar-area-fixed'
        >
          <div className='container nav-container'>
            <div className='responsive-mobile-menu'>
              <div className='logo-wrapper mobile-logo'>
                <a href={anchor} className='logo'>
                  <img src={publicUrl + 'assets/img/logo.svg'} alt={imgattr} />
                </a>
              </div>
              <button
                className='navbar-toggler'
                type='button'
                data-toggle='collapse'
                data-target='#Riyaqas_main_menu'
                aria-expanded='false'
                aria-label='Toggle navigation'
              >
                <span className='navbar-toggle-icon'>
                  <span className='line'></span>
                  <span className='line'></span>
                  <span className='line'></span>
                </span>
              </button>
            </div>
            <div className='collapse navbar-collapse' id='Riyaqas_main_menu'>
              <div className='logo-wrapper desktop-logo'>
                <a href='/' className='logo'>
                  <img src={publicUrl + 'assets/img/logo.svg'} alt={imgattr} />
                </a>
              </div> 

              <ul className='navbar-nav'>
                <li className='menu-item-has-children'>
                  <Link to='/solutions'>Solutions</Link>
                  <ul className='sub-menu'>
                    <li>
                      <Link to='/app'>Migobucks App</Link>
                    </li>
                    <li>
                      <Link to='/buddy'>Migo Buddy</Link>
                    </li>
                    <li>
                      <Link to='/brands'>Migo Board</Link>
                    </li>
                  </ul>
                </li>

                <li className='menu-item-has-children'>
                  <Link to='#'>Opportunities</Link>
                  <ul className='sub-menu'>
                    <li className='menu-item-has-children'>
                      <Link to='#'>Students/Graduates</Link>
                      <ul className='sub-menu'>
                        <li>
                          <Link to='/ojt'>On job training</Link>
                        </li>
                        <li>
                          <Link to='/technical-training'>
                            Technical Training
                          </Link>
                        </li>
                        <li>
                          <Link to='/executive-program'>Executive Program</Link>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <Link to='/professionals'>For Professionals</Link>
                    </li>
                    <li>
                      <Link to='/trainer/register'>Become a Trainer</Link>
                    </li>
                  </ul>
                </li>

                <li>
                  <Link to='/contact'>Contact</Link>
                </li>
              </ul>
            </div>
             
          </div>
        </nav> 
      </div>
    );
  }
}

export default Navbar;
