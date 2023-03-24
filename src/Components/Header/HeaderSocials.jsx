import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { BsTwitter } from "react-icons/bs";
import { BiPhone } from "react-icons/bi";


const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a id="contact-linkedin"
        href="https://www.linkedin.com/in/kirtiraj-ingale-07911a18b/" target="_blank">
        <BsLinkedin className="icon" />
      </a>

      <a id="contact-github" href="https://github.com/kirtirajingale" target="_blank">
        <FaGithub className="icon" />
      </a>

      <a id="contact-phone" href="tel:7875101617" target="_blank">
        <BiPhone className="icon" />
      </a>
      
      <a href="https://twitter.com/kirtiraj_ingale" target="_blank">
        <BsTwitter className="icon" />
      </a>
    </div>
  );
};

export default HeaderSocials;
