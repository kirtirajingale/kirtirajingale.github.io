import React from "react";
import "./navbar.css";
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { RiMedalFill } from "react-icons/ri";
import { SiGmail } from "react-icons/si";
import { FaProjectDiagram } from "react-icons/fa";
import { BiCalendar } from "react-icons/bi";
import { BsFillCloudDownloadFill } from "react-icons/bs";
import { useState } from "react";
import CV from "../../assets/cv.pdf";

const Navbar = () => {
  const [activeNav, setActiveNav] = useState("#");

  const handleResume = () => {
    window.open(
      "https://drive.google.com/file/d/1gjSw_aMA140Zr1TdlnI15YsFTYaNhZ3P/view?usp=sharing",
      "_blank"
    );
  };
  return (
    <nav id="nav-menu">
      <a
        href="#home"
        onClick={() => setActiveNav("#home")}
        className="nav-link home"
      >
        <AiOutlineHome />
      </a>

      <a
        href="#about"
        onClick={() => setActiveNav("#about")}
        className="nav-link about"
      >
        <AiOutlineUser />
      </a>

      <a
        href="#skills"
        onClick={() => setActiveNav("#skills")}
        className="nav-link skills"
      >
        <RiMedalFill />
      </a>

      <a
        href="#projects"
        onClick={() => setActiveNav("#projects")}
        className="nav-link projects"
      >
        <FaProjectDiagram />
      </a>

      <a
        href="#stats"
        onClick={() => setActiveNav("#stats")}
        className={activeNav === "#stats" ? "active" : ""}
      >
        <BiCalendar />
      </a>

      <a
        href="#contact"
        onClick={() => setActiveNav("#contact")}
        className="nav-link contact"
      >
        <SiGmail />
      </a>

      <button id="resume-button-1" onClick={handleResume}>
        <a
          id="resume-link-1"
          href={CV}
          download="Kirtiraj-Ingale-Resume"
          target="_blank"
          className="nav-link resume"
          rel="noreferrer"
        >
          <BsFillCloudDownloadFill />
        </a>
      </button>
    </nav>
  );
};

export default Navbar;
