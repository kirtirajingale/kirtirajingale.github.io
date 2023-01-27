import React from 'react';
import "./skills.css";
// import {BsPatchCheckFill} from "react-icons/bs"
import html from '../../assets/html-5.png';
import css from '../../assets/css-3.png';
import js from '../../assets/js.png';
import reactjs from '../../assets/react.png';
import nextjs from '../../assets/nextjs-icon.png';
import redux from '../../assets/redux-icon.png';
import storybook from '../../assets/storybook.png';
import chakra from '../../assets/chakra.png';
import nodejs from '../../assets/node-js-icon.png';
import mongodb from '../../assets/mongodb-icon.png';
import expressjs from '../../assets/express-js-icon.png';
import dsa from '../../assets/dsa.png';
import github from '../../assets/github.png';
import cypress from '../../assets/cypress.png';
import vscode from "../../assets/vscode.png";
import reacttesting from '../../assets/react-tesing.png'


const Skills = () => {
  return (
    <section id='skills'>
        <h5>What Skills I Have</h5>
        <h2>My Experience</h2>

{/* ********************* OUTER CONTAINER ***************************** */}

        <div className='container experience__container'>

{/* ********************* FRONTEND DEVELOPMENT STARTS **************************** */}
          
          <div className="experience__frontend">
             <h3>Frontend Development</h3>
             <div className="experience__content">

              <article className='experience__details'>
              {/* <BsPatchCheckFill className='experience__details-icon'/> */}
              <div className='skill-icon'>
                <img className='icon-tag' src={html} alt="html" />
              </div>
                <div>
                    <h4>HTML</h4>
                </div>
                
              </article>

              <article className='experience__details'>
              {/* <BsPatchCheckFill className='experience__details-icon'/> */}
              <div className='skill-icon'>
                <img className='icon-tag' src={nextjs} alt="nextjs" />
              </div>
                <div>
                    <h4>NEXTJS</h4>
                </div>
              </article>

              <article className='experience__details'>
              {/* <BsPatchCheckFill className='experience__details-icon'/> */}
              <div className='skill-icon'>
                <img className='icon-tag' src={css} alt="JS" />
              </div>
                <div>
                    <h4>CSS</h4>
                </div>
              </article>

              <article className='experience__details'>
              {/* <BsPatchCheckFill className='experience__details-icon'/> */}
              <div className='skill-icon'>
                <img className='icon-tag' src={reactjs} alt="reactjs" />
              </div>
                <div>
                    <h4>ReactJS</h4>
                </div>
              </article>

              <article className='experience__details'>
              {/* <BsPatchCheckFill className='experience__details-icon'/>  */}
              <div className='skill-icon'>
                <img className='icon-tag' src={js} alt="JS" />
              </div>
                <div>
                    <h4>JavaScript</h4>
                </div>
              </article>

              <article className='experience__details'>
              {/* <BsPatchCheckFill className='experience__details-icon'/> */}
              <div className='skill-icon'>
                <img className='icon-tag' src={redux} alt="redux" />
              </div>
                <div>
                    <h4>Redux</h4>
                </div>
              </article>

              <article className='experience__details'>
              {/* <BsPatchCheckFill className='experience__details-icon'/> */}
              <div className='skill-icon'>
                <img className='icon-tag' src={storybook} alt="storybook" />
              </div>
                <div>
                    <h4>Storybook</h4>
                </div>
              </article>

              <article className='experience__details'>
              {/* <BsPatchCheckFill className='experience__details-icon'/> */}
              <div className='skill-icon'>
                <img className='icon-tag' src={chakra} alt="chakra" />
              </div>
                <div>
                    <h4>Chakra UI</h4>
                </div>
              </article>
             </div>
          </div>

 {/* ********************* BACKEND DEVELOPMENT STARTS **************************** */}

          <div className='experience__backend'>
          <h3>Backend Development & Other Tools</h3>
             <div className="experience__content">

              <article className='experience__details'>
              {/* <BsPatchCheckFill className='experience__details-icon'/> */}
              <div className='skill-icon'>
                <img className='icon-tag' src={nodejs} alt="nodejs" />
              </div>
                <div>
                    <h4>NodeJS</h4>
                </div>
              </article>

              <article className='experience__details'>
              {/* <BsPatchCheckFill className='experience__details-icon'/> */}
              <div className='skill-icon'>
                <img className='mongoDB' src={mongodb} alt="mongodb" />
              </div>
                <div>
                    <h4>MongoDB</h4>
                </div>
              </article>

              <article className='experience__details'>
              {/* <BsPatchCheckFill className='experience__details-icon'/> */}
              <div className='skill-icon'>
                <img className='icon-tag' src={expressjs} alt="expressjs" />
              </div>
                <div>
                    <h4>Express JS</h4>
                </div>
              </article>

              <article className='experience__details'>
              {/* <BsPatchCheckFill className='experience__details-icon'/> */}
              <div className='skill-icon'>
                <img className='icon-tag' src={cypress} alt="cypress" />
              </div>
                <div>
                    <h4>Cypress</h4>
                </div>
              </article>

              <article className='experience__details'>
              {/* <BsPatchCheckFill className='experience__details-icon'/> */}
              <div className='skill-icon'>
                <img className='icon-tag' src={dsa} alt="dsa" />
              </div>
                <div>
                    <h4>DSA</h4>
                </div>
              </article>

              <article className='experience__details'>
              {/* <BsPatchCheckFill className='experience__details-icon'/> */}
              <div className='skill-icon'>
                <img className='icon-tag' src={github} alt="GitHub" />
              </div>
                <div>
                    <h4>GitHub</h4>
                </div>
              </article>

              <article className='experience__details'>
              {/* <BsPatchCheckFill className='experience__details-icon'/> */}
              <div className='skill-icon'>
                <img className='icon-tag' src={vscode} alt="vscode" />
              </div>
                <div>
                    <h4>VS Code</h4>
                </div>
              </article>

              <article className='experience__details'>
              {/* <BsPatchCheckFill className='experience__details-icon'/> */}
              <div className='skill-icon'>
                <img className='icon-tag' src={reacttesting} alt="reacttesting" />
              </div>
                <div>
                    <h4>Testing</h4>
                </div>
              </article>
             </div>
          </div>
        </div>
    </section>
  )
}

export default Skills
