import React from 'react';
import CV from "../../assets/cv.pdf"

const CTA = () => {
  const handleResume = () =>{
    window.open(
      "https://drive.google.com/file/d/1gjSw_aMA140Zr1TdlnI15YsFTYaNhZ3P/view?usp=sharing"
    )
  }
  return (
    <div id="resume-link-2" className='cta'>
      <a onClick={handleResume} href={CV} className="btn" download={"Kirtiraj-Ingale-Resume.pdf"} target="_blank" >Download Resume</a>
      <a href="#contact" className='btn btn-primary'>Let's Talk</a>
    </div>
  )
}

export default CTA
