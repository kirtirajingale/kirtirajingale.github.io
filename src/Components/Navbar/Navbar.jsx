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

      {/* <a href="#home" onClick={() => setActiveNav("#home")} className="nav-link home ">
        <AiOutlineHome />
      </a>

      <a href="#about"  onClick={() => setActiveNav("#about")} className="nav-link about">
        <AiOutlineUser />
      </a>

      <a href="#skills" onClick={() => setActiveNav("#skills")} className="nav-link skills">
        <RiMedalFill/>
      </a>

      <a  href="#projects"  onClick={() => setActiveNav("#projects")}  className="nav-link projects">
        <FaProjectDiagram />
      </a>

      <a  href="#stats"  onClick={() => setActiveNav("#stats")}  className="nav-link stats">
        <BiCalendar/>
      </a>

      <a  href="#contact" onClick={() => setActiveNav("#contact")}  className="nav-link contact">
       <SiGmail/>
      </a>

      <button id="resume-button-1" onClick={handleResume}>
        <a
          id="resume-link-1"
          href={CV}
          download="Kirtiraj-Ingale-Resume"
          target="_blank"
          className="nav-link resume icon"
          rel="noreferrer"
        >
          <div className="tooltip">Resume</div>
          <BsFillCloudDownloadFill/>
        </a>
      </button> */}


      <div className="icon">
        <div className="tooltip">Home</div>
        <span>
        <a href="#home" onClick={() => setActiveNav("#home")} className="nav-link home ">
        <AiOutlineHome className="nav-icons" />
        </a>
        </span>
      </div>

      <div className="icon">
        <div className="tooltip">About</div>
        <span>
        <a href="#about"  onClick={() => setActiveNav("#about")} className="nav-link about">
        <AiOutlineUser className="nav-icons" />
        </a>
        </span>
      </div>

      <div className="icon stats-icon">
        <div className="tooltip">Skills</div>
        <span>
        <a href="#skills" onClick={() => setActiveNav("#skills")} className="nav-link skills">
        <RiMedalFill className="nav-icons"/>
        </a>
        </span>
      </div>

      <div className="icon">
        <div className="tooltip">Projects</div>
        <span>
        <a  href="#projects"  onClick={() => setActiveNav("#projects")}  className="nav-link projects">
        <FaProjectDiagram className="nav-icons"/>
        </a>
        </span>
      </div>

      <div className="icon stats-icon">
        <div className="tooltip">Stats</div>
        <span>
        <a  href="#stats"  onClick={() => setActiveNav("#stats")}  className="nav-link stats">
        <BiCalendar className="nav-icons"/>
        </a>
        </span>
      </div>

      <div className="icon">
        <div className="tooltip">Contact</div>
        <span>
        <a  href="#contact" onClick={() => setActiveNav("#contact")}  className="nav-link contact">
        <SiGmail className="nav-icons"/>
        </a>
        </span>
      </div>

      <div className="icon">
        <div className="tooltip">Resume</div>
        <span>
        <button id="resume-button-1" onClick={handleResume}>
        <a
          id="resume-link-1"
          href={CV}
          download="Kirtiraj-Ingale-Resume"
          target="_blank"
          className="nav-link resume icon"
          rel="noreferrer"
        >
          <div className="tooltip">Resume</div>
          <BsFillCloudDownloadFill className="nav-icons"/>
        </a>
      </button>
        </span>
      </div>






    </nav>
  );
};

export default Navbar;


