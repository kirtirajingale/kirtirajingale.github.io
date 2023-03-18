import React from 'react'
import "./navbar.css";
import {AiOutlineHome} from "react-icons/ai";
import {AiOutlineUser} from "react-icons/ai";
import {RiMedalFill} from "react-icons/ri";
import {SiGmail} from "react-icons/si";
import {FaProjectDiagram} from "react-icons/fa";
import {BiMessageSquareDetail} from "react-icons/bi";
import {BiCalendar} from "react-icons/bi";
import {BsFillCloudDownloadFill} from "react-icons/bs"
import { useState } from 'react';


const Navbar = () => {
  const [activeNav, setActiveNav] = useState("#")

  const handleResume = () =>{
    window.open(
      "https://drive.google.com/file/d/1gjSw_aMA140Zr1TdlnI15YsFTYaNhZ3P/view?usp=sharing"
    )
  }
  return (
    <nav  id="nav-menu">
        <a href="#" onClick={()=> setActiveNav('#')} className={activeNav === "#" ? 'active' : ""}><AiOutlineHome className='nav-link home'/></a>
        <a href="#about" onClick={()=> setActiveNav('#about')} className={activeNav === "#about" ? 'active' : ""}><AiOutlineUser className='nav-link about'/></a>
        <a href="#skills" onClick={()=> setActiveNav('#skills')} className={activeNav === "#skills" ? 'active' : ""}><RiMedalFill className='nav-link skills'/></a>
        <a href="#projects" onClick={()=> setActiveNav('#projects')} className={activeNav === "#projects" ? 'active' : ""}><FaProjectDiagram className='nav-link projects'/></a>
        <a href="#stats" onClick={()=> setActiveNav('#stats')} className={activeNav === "#stats" ? 'active' : ""}><BiCalendar/></a>
        <a href="#contact" onClick={()=> setActiveNav('#contact')} className={activeNav === "#contact" ? 'active' : ""}><SiGmail className='nav-link contact'/></a>
        <a href="#resume" onClick={handleResume} download={"Kirtiraj-Ingale-Resume.pdf"} target="_blank"><BsFillCloudDownloadFill className='nav-link resume' id="resume-link-1"/></a>
       
    </nav>
  )
}

export default Navbar
