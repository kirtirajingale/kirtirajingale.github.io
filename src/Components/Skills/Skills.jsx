import React from "react";
import "./skills.css";
import html from "../../assets/html-5.png";
import css from "../../assets/css-3.png";
import js from "../../assets/js.png";
import reactjs from "../../assets/react.png";
import nextjs from "../../assets/nextjs-icon.png";
import redux from "../../assets/redux-icon.png";
import storybook from "../../assets/storybook.png";
import chakra from "../../assets/chakra.png";
import nodejs from "../../assets/node-js-icon.png";
import mongodb from "../../assets/mongodb-icon.png";
import expressjs from "../../assets/express-js-icon.png";
import dsa from "../../assets/dsa.png";
import github from "../../assets/github.png";
import cypress from "../../assets/cypress.png";
import vscode from "../../assets/vscode.png";
import reacttesting from "../../assets/react-tesing.png";
import { ImHtmlFive } from "react-icons/im";

const Skills = () => {
  return (
    <section id="skills">
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>

      {/* ********************* OUTER CONTAINER ***************************** */}

      <div className="container experience__container">
        {/* ********************* FRONTEND DEVELOPMENT STARTS **************************** */}

        <div className="experience__frontend skills-card">
          <h3>Frontend Development</h3>
          <div className="experience__content">
            <article className="experience__details skills-card">
              <div className="skill-icon">
                <img
                  className="icon-tag skills-card-img"
                  src={html}
                  alt="html"
                />
              </div>
              <div>
                <h4 className="skills-card-name">HTML</h4>
              </div>
            </article>

            <article className="experience__details skills-card">
              <div className="skill-icon">
                <img
                  className="icon-tag skills-card-img"
                  src={nextjs}
                  alt="nextjs"
                />
              </div>
              <div>
                <h4 className="skills-card-name">NEXTJS</h4>
              </div>
            </article>

            <article className="experience__details skills-card">
              <div className="skill-icon">
                <img className="icon-tag skills-card-img" src={css} alt="JS" />
              </div>
              <div>
                <h4 className="skills-card-name">CSS</h4>
              </div>
            </article>

            <article className="experience__details skills-card">
              <div className="skill-icon">
                <img
                  className="icon-tag skills-card-img"
                  src={reactjs}
                  alt="reactjs"
                />
              </div>
              <div>
                <h4 className="skills-card-name">ReactJS</h4>
              </div>
            </article>

            <article className="experience__details skills-card">
              <div className="skill-icon">
                <img className="icon-tag skills-card-img" src={js} alt="JS" />
              </div>
              <div>
                <h4 className="skills-card-name">JavaScript</h4>
              </div>
            </article>

            <article className="experience__details skills-card">
              <div className="skill-icon">
                <img
                  className="icon-tag skills-card-img"
                  src={redux}
                  alt="redux"
                />
              </div>
              <div>
                <h4 className="skills-card-name">Redux</h4>
              </div>
            </article>

            <article className="experience__details skills-card">
              <div className="skill-icon">
                <img
                  className="icon-tag skills-card-img"
                  src={storybook}
                  alt="storybook"
                />
              </div>
              <div>
                <h4 className="skills-card-name">Storybook</h4>
              </div>
            </article>

            <article className="experience__details skills-card">
              <div className="skill-icon">
                <img
                  className="icon-tag skills-card-img"
                  src={chakra}
                  alt="chakra"
                />
              </div>
              <div>
                <h4 className="skills-card-name">Chakra UI</h4>
              </div>
            </article>
          </div>
        </div>

        {/* ********************* BACKEND DEVELOPMENT STARTS **************************** */}

        <div className="experience__backend skills-card">
          <h3>Backend Development & Other Tools</h3>
          <div className="experience__content">
            <article className="experience__details skills-card">
              <div className="skill-icon">
                <img
                  className="icon-tag skills-card-img"
                  src={nodejs}
                  alt="nodejs"
                />
              </div>
              <div>
                <h4 className="skills-card-name">NodeJS</h4>
              </div>
            </article>

            <article className="experience__details skills-card">
              <div className="skill-icon">
                <img
                  className="mongoDB skills-card-img"
                  src={mongodb}
                  alt="mongodb"
                />
              </div>
              <div>
                <h4 className="skills-card-name">MongoDB</h4>
              </div>
            </article>

            <article className="experience__details skills-card">
              <div className="skill-icon">
                <img
                  className="icon-tag skills-card-img"
                  src={expressjs}
                  alt="expressjs"
                />
              </div>
              <div>
                <h4 className="skills-card-name">Express JS</h4>
              </div>
            </article>

            <article className="experience__details skills-card">
              <div className="skill-icon">
                <img
                  className="icon-tag skills-card-img"
                  src={cypress}
                  alt="cypress"
                />
              </div>
              <div>
                <h4 className="skills-card-name">Cypress</h4>
              </div>
            </article>

            <article className="experience__details skills-card">
              <div className="skill-icon">
                <img className="icon-tag skills-card-img" src={dsa} alt="dsa" />
              </div>
              <div>
                <h4 className="skills-card-name">DSA</h4>
              </div>
            </article>

            <article className="experience__details skills-card">
              <div className="skill-icon">
                <img
                  className="icon-tag skills-card-img"
                  src={github}
                  alt="GitHub"
                />
              </div>
              <div>
                <h4 className="skills-card-name">GitHub</h4>
              </div>
            </article>

            <article className="experience__details skills-card">
              <div className="skill-icon">
                <img
                  className="icon-tag skills-card-img"
                  src={vscode}
                  alt="vscode"
                />
              </div>
              <div>
                <h4 className="skills-card-name">VS Code</h4>
              </div>
            </article>

            <article className="experience__details skills-card">
              <div className="skill-icon">
                <img
                  className="icon-tag skills-card-img"
                  src={reacttesting}
                  alt="reacttesting"
                />
              </div>
              <div>
                <h4 className="skills-card-name">Testing</h4>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
