import React from 'react';
import "./header.css";
import CTA from './CTA';
import HeaderSocials from './HeaderSocials';


const Header = () => {
  return (
    <header id="home">
        <div className="container header__container">
        <div className='inner-container'>
        <h5>Hello I'am</h5>
          <h1 id='user-detail-name'>KIRTIRAJ INGALE</h1>
          <p className='text-light'>Fullstack Web Developer</p>
          <CTA/>
          <HeaderSocials/>
        </div>
          <a href="#contact" className='scroll__down'>Scroll Down</a>
        </div>
    </header>
  )
}

export default Header
