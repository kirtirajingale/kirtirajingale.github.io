import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { BsTwitter } from "react-icons/bs";

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a
        href="https://linkedin.com/in/kirtiraj-ingale
"
        target="_blank"
      >
        <BsLinkedin className="icon" />
      </a>
      <a href="https://github.com/kirtirajingale" target="_blank">
        <FaGithub  className="icon"/>
      </a>
      <a href="https://twitter.com/kirtiraj_ingale" target="_blank">
        <BsTwitter className="icon" />
      </a>
    </div>
  );
};

export default HeaderSocials;
