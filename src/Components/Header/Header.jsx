import React from 'react';
import "./header.css";
import CTA from './CTA';
import HeaderSocials from './HeaderSocials';


const Header = () => {
  return (
    <header>
        <div className="container header__container">
          <h5>Hello I'am</h5>
          <h1>Kirtiraj Ingale</h1>
          <h5 className='text-light'>Fullstack Web Developer</h5>
          <CTA/>
          <HeaderSocials/>
          <a href="#contact" className='scroll__down'>Scroll Down</a>
        </div>
    </header>
  )
}

export default Header
