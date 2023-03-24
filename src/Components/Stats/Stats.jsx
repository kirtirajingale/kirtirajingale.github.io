import React from "react";
import "./Stats.css";
//import calender from '../../assets/calender.png';
import GitHubCalendar from "react-github-calendar";

const Stats = () => {
  return (
    <section id="stats" className="main-container react-activity-calendar">
      <h5>My Recent Task</h5>
      <h2>Stats & Calender</h2>

      <img
        className="streak-stats"
        id="github-streak-stats"
        alt="Kirtiraj Ingale's streak"
        src="https://github-readme-streak-stats.herokuapp.com/?user=kirtirajingale&theme=black-ice&hide_border=true&stroke=0000&background=2C2C6C"
      />

      <article className="container-stats">
        <img
          width={"20px"}
          id="github-stats-card"
          alt="Kirtiraj Ingale's Github Stats"
          src="https://github-readme-stats.vercel.app/api?username=kirtirajingale&show_icons=true&count_private=true&theme=react&hide_border=true&bg_color=2C2C6C"
        />

        <img
          id="github-top-langs"
          width="20px"
          alt="Kirtiraj Ingale's Top Languages"
          src="https://github-readme-stats.vercel.app/api/top-langs/?username=kirtirajingale&langs_count=8&count_private=true&layout=compact&theme=react&hide_border=true&bg_color=2C2C6C"
        />
      </article>

      <div className="calender-state">
        <GitHubCalendar
          style={{ margin: "auto" }}
          hideTotalCount="false"
          hideColorLegend="false"
          blockSize={15}
          username="kirtirajingale"
        />
      </div>
    </section>
  );
};

export default Stats;
