import React from "react";
import "./portfolio.css";
import projectimg1 from "../../assets/1.png";
import projectimg2 from "../../assets/2.png";
import projectimg3 from "../../assets/3.png";
import projectimg5 from "../../assets/limeroadHP.png";

const data = [
  {
    id: 1,
    image: projectimg1,
    title: "Zoomcar - Clone",
    description: " It provides passenger vehicle rental services.",
    tech: "HTML | CSS | Javasript | DOM",
    github: "https://github.com/kirtirajingale/Zoomcar-Team-Mind-Mantra",
    demo: "https://dreamy-llama-b91312.netlify.app/",
  },
  {
    id: 2,
    image: projectimg2,
    title: "KindMeal.my - Clone",
    description: "It is Malaysia's meat-free lifestyle platform. ",
    tech: "HTML | CSS | Javasript | DOM",
    github: "https://github.com/Loki343/arrogant-beef-5673",
    demo: "https://arrogant-beef-5673.vercel.app/",
  },
  {
    id: 3,
    image: projectimg3,
    title: "The Hindu - Clone ",
    description: "The news website that provides us World wide news",
    tech: "HTML | CSS | Javasript | DOM",
    github: "https://github.com/meracodemahan/purple-reason-2076",
    demo: "https://warm-tartufo-8ea9c8.netlify.app/",
  },
  {
    id: 4,
    image: projectimg5,
    title: "Limeroad- Clone ",
    description: " It is an E-commerce shopping website",
    tech: "HTML | CSS | ReactJS | Firebase | Redux | ChakraUI",
    github: "https://github.com/Avneesh002/Fashion-square",
    demo: "https://fashi0n-square.netlify.app/",
  },
];

const Portfolio = () => {
  return (
    <section id="projects">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {data.map(({ id, image, title, description, tech, github, demo }) => {
          return (
            <article key={id} className="portfolio__item project-card">
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <p className="project-title">{title}</p>
              <p className="project-description">{description}</p>
              <h4 className="tech_stack project-tech-stack">
                <b>{tech}</b>
              </h4>
              <div className="portfolio__item-cta">
                <a
                  href={github}
                  className="btn project-github-link"
                  target="_blank"
                >
                  GitHub
                </a>
                <a
                  href={demo}
                  className="btn btn-primary project-deployed-link"
                  target="_blank"
                >
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
