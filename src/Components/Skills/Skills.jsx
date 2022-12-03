import React from 'react';
import "./skills.css";
import html from "../../assets/html-5.png"
import css from "../../assets/css-3.png";
import react from "../../assets/react.png"
import nextjs from "../../assets/nextjs-icon.png"
import redux from "../../assets/redux-icon.png"

const Skills = () => {
  return (
    <section id='skills'>
        <h5>What Skills I Have</h5>
        <h2>My Experience</h2>

        <div className='container experience__container'>
          <div className="experience__frontend">
             <h3>Frontend Development</h3>
             <div className="experience__content">

              <article className='experience__details'>
                <img style={{width:"40px"}} src={html} alt="" />
                <h4>HTML</h4>
              </article>

              <article className='experience__details'>
                <img style={{width:"40px"}} src={css} alt="" />
                <h4>CSS</h4>
              </article>

              <article className='experience__details'>
                <img style={{width:"40px"}} src={react} alt="" />
                <h4>ReactJS</h4>
              </article>

              <article className='experience__details'>
                <img style={{width:"70px"}} src={nextjs} alt="" />
                <h4>NEXTJS</h4>
              </article>

              <article className='experience__details'>
                <img style={{width:"40px"}} src={redux} alt="" />
                <h4>Redux</h4>
              </article>
             </div>
          </div>
        </div>
    </section>
  )
}

export default Skills
