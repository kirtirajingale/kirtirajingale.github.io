import React from "react";
import "./about.css";
import ME from "../../assets/Kirtiraj_photo.png";
import { FaAward } from "react-icons/fa";
import { FaGraduationCap } from "react-icons/fa";
import { FaProjectDiagram } from "react-icons/fa";

const About = () => {
  return (
    <section  id="about" class="about section">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="mypic" className="home-img"/>
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>1.5+ Years Working</small>
            </article>

            <article className="about__card">
              <FaGraduationCap className="about__icon" />
              <h5>Education</h5>
              <small>BE Mechanical</small>
            </article>

            <article className="about__card">
              <FaProjectDiagram className="about__icon" />
              <h5>Projects</h5>
              <small>8+ Completed </small>
            </article>
          </div>

          <p id="user-detail-intro">
            An analytical and detail-oriented Full Stack Web Developer. Capable
            of writing production-ready code using ReactJS, Redux, and CSS on
            the frontend, NodeJS, and Express on the backend to build a
            single-page application. Passionate about coding and a team player
            who is proficient in working with interdisciplinary teams and
            executing goal-oriented projects.
          </p>

          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
