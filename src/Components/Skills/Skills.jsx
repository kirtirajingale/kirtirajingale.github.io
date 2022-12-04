import React from 'react';
import "./skills.css";
import {BsPatchCheckFill} from "react-icons/bs"

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
              <BsPatchCheckFill className='experience__details-icon'/>
                <div>
                    <h4>HTML</h4>
                </div>
                
              </article>

              <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
                <div>
                    <h4>CSS</h4>
                </div>
              </article>

              <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
                <div>
                    <h4>ReactJS</h4>
                </div>
              </article>

              <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/> 
                <div>
                    <h4>NextJS</h4>
                </div>
              </article>

              <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
                <div>
                    <h4>Redux</h4>
                </div>
              </article>

              <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
                <div>
                    <h4>Chakra UI</h4>
                </div>
              </article>
             </div>
          </div>

 {/* ********************* BACKEND DEVELOPMENT STARTS **************************** */}

          <div className='experience__backend'>
          <h3>Backend Development & Used Tools</h3>
             <div className="experience__content">

              <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
                <div>
                    <h4>NodeJS</h4>
                </div>
              </article>

              <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
                <div>
                    <h4>MongoDB</h4>
                </div>
              </article>

              <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
                <div>
                    <h4>ExpressJs</h4>
                </div>
              </article>

              <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
                <div>
                    <h4>DSA</h4>
                </div>
              </article>

              <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
                <div>
                    <h4>GitHub</h4>
                </div>
              </article>

              <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
                <div>
                    <h4>VS Code</h4>
                </div>
              </article>
             </div>
          </div>
        </div>
    </section>
  )
}

export default Skills
