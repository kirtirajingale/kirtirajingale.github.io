import React from "react";
import "./footer.css";
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";

const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer__logo">
        K!RT!R@J
      </a>

      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#stats">Stats & Calender</a>
        </li>
        <li>
          <a href="#skills">Skills</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div className="footer__socials">
        <a href="https://github.com/kirtirajingale">
          <BsGithub />
        </a>
        <a href="https://linkedin.com/in/kirtiraj-ingale">
          <BsLinkedin />
        </a>
        <a href="https://twitter.com/kirtiraj_ingale">
          <BsTwitter />
        </a>
      </div>

      <div className="footer__copyright">
        <small>&copy; K!RT!RAJ Portfolio. All rights reserved.</small>
      </div>
    </footer>
  );
};

export default Footer;
