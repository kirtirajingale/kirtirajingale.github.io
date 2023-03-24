import React from "react";
import CV from "../../assets/cv.pdf";

const CTA = () => {
  const handleResume = () => {
    window.open(
      "https://drive.google.com/file/d/1gjSw_aMA140Zr1TdlnI15YsFTYaNhZ3P/view?usp=sharing"
    );
  };
  return (
    <div className="cta">
      <a
        id="resume-button-2"
        onClick={handleResume}
        href={CV}
        className="btn"
        download={"Kirtiraj-Ingale-Resume"}
        target="_blank"
      >
        Download Resume
      </a>
      <a href="#contact" className="btn btn-primary">
        Let's Talk
      </a>
    </div>
  );
};

export default CTA;
