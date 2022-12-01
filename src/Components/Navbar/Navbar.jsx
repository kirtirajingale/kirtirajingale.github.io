import React from 'react'
import "./navbar.css";
import {AiOutlineHome} from "react-icons/ai";
import {AiOutlineUser} from "react-icons/ai";
import {RiMedalFill} from "react-icons/ri";
import {BiBook} from "react-icons/bi";
import {FaProjectDiagram} from "react-icons/fa";
import {BiMessageSquareDetail} from "react-icons/bi";
import { useState } from 'react';


const Navbar = () => {
  const [activeNav, setActiveNav] = useState("#")
  return (
    <nav>
        <a href="#" onClick={()=> setActiveNav('#')} className={activeNav === "#" ? 'active' : ""}><AiOutlineHome/></a>
        <a href="#about" onClick={()=> setActiveNav('#about')} className={activeNav === "#about" ? 'active' : ""}><AiOutlineUser/></a>
        <a href="#skills" onClick={()=> setActiveNav('#skills')} className={activeNav === "#skills" ? 'active' : ""}><RiMedalFill/></a>
        <a href="#portfolio" onClick={()=> setActiveNav('#portfolio')} className={activeNav === "#portfolio" ? 'active' : ""}><FaProjectDiagram/></a>
        <a href="#experience" onClick={()=> setActiveNav('#experience')} className={activeNav === "#experience" ? 'active' : ""}><BiBook/></a>
        <a href="#contact" onClick={()=> setActiveNav('#contact')} className={activeNav === "#contact" ? 'active' : ""}><BiMessageSquareDetail/></a>
       
    </nav>
  )
}

export default Navbar
