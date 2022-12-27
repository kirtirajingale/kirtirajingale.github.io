import React from "react";
import "./portfolio.css";
import projectimg1 from "../../assets/1.png";
import projectimg2 from "../../assets/2.png";
import projectimg3 from "../../assets/3.png";
// import projectimg4 from "../../assets/4.png";
import projectimg5 from "../../assets/5.png";

const data = [
  {
    id: 1,
    image: projectimg1,
    title: "Zoomcar - Clone : It provides passenger vehicle rental services.",
    tech : "HTML | CSS | Javasript | DOM",
    github: "https://github.com/kirtirajingale/Zoomcar-Team-Mind-Mantra",
    demo: "https://dreamy-llama-b91312.netlify.app/",
  },
  {
    id: 2,
    image: projectimg2,
    title: "KindMeal.my - Clone : It is Malaysia's meat-free lifestyle platform. ",
    tech : "HTML | CSS | Javasript | DOM",
    github: "https://github.com/Loki343/arrogant-beef-5673",
    demo: "https://verdant-alpaca-c375a0.netlify.app/",
  },
  {
    id: 3,
    image: projectimg3,
    title:"The Hindu - Clone : The news website that provides us World wide news",
    tech : "HTML | CSS | Javasript | DOM",
    github: "https://github.com/meracodemahan/purple-reason-2076",
    demo: "https://warm-tartufo-8ea9c8.netlify.app/",
  },
  // {
  //   id: 4,
  //   image: projectimg4,
  //   title: "My Ecommerce Store : Multi Product Ecommerce store  ",
  //   tech : "HTML | CSS | Javasript | DOM",
  //   github: "https://github.com/kirtirajingale/Zoomcar-Team-Mind-Mantra",
  //   demo: "https://dreamy-llama-b91312.netlify.app/",
  // },
  {
    id: 5,
    image: projectimg5,
    title: "Twiik - Clone : App where you will find lots of workouts, coaches and gyms",
    tech : "HTML | CSS | Javasript | DOM",
    github: "https://github.com/kirtirajingale/shaplink_clone",
    demo: "https://sparkly-croquembouche-139cd2.netlify.app/",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {data.map(({ id, image, title, tech, github, demo }) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <p>{title}</p>
              <h4 className="tech_stack"><b>{tech}</b></h4>
              <div className="portfolio__item-cta">
                <a href={github} className="btn" target="_blank">
                  GitHub
                </a>
                <a
                  href={demo}
                  className="btn btn-primary"
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
