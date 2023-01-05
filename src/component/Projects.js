import React, { forwardRef, useRef } from "react";
import ProjectDisp from "./ProjectDisp.js";
import financialForgeScreen from "../images/financialForgeSS.webp";
import what2watchScreen from "../images/what2watchScreen.webp";
import portfolioScreen from "../images/portfolioScreen.webp";
import pokemonScreen from "../images/pokemonAppScreen1.webp";

const Projects = (props, ref) => {
  const contactRef = useRef();

  function scrollToDiv(currentRef) {
    currentRef.current.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <section className="projects_container" ref={ref}>
      <div className="projects_header">
        <h1>My Projects</h1>
        <h2>
          Like what you see?
          <button id="contact_btn" onClick={() => scrollToDiv(contactRef)}>
            Contact Me!
          </button>
        </h2>
      </div>
      <div className="projects_carousel">
        <ProjectDisp
          image={pokemonScreen}
          title="Pokemon Search"
          alt="Pokemon App"
          description="To better understand APIs, I created this Pokemon search/browse app"
          tools="CSS, Javascript, HTML, PokeAPI, VScode  "
          repo="https://github.com/MJStone587/Pokemon"
          site="https://mjstone587.github.io/Pokemon/"
        />
        <ProjectDisp
          image={what2watchScreen}
          id="what_2_watch_site"
          id2="what_2_watch_btn"
          title="Movie/Show Browsing App"
          alt="What2Watch"
          description="Crud Project from college using PHP and mySQL. Came back to make improvements to this project, mostly styling changes."
          tools="CSS, PHP, mySQL, HTML, VScode, JS"
          repo="https://github.com/MJStone587/What2Watch/"
          site="https://mjstone587.github.io/What2Watch/"
        />
        <ProjectDisp
          image={financialForgeScreen}
          id="financial_forge_site"
          id2="financial_forge_btn"
          title="Financial Organizer"
          alt="Financial Organizer"
          description="My first experience using ExpressJS / NodesJS for a CRUD app and login authentication. Understanding how to store encrypted passwords using bcrypt. Used Grid styling to better understand it."
          tools="JS, HTML, CSS, MongoDB, Express, NodeJS"
          repo="https://github.com/MJStone587/Framework"
          site="https://financialforge.onrender.com/catalog"
        />
        <ProjectDisp
          image={portfolioScreen}
          id="portfolio_site"
          id2="portfolio_site_btn"
          title="Portfolio"
          alt="Portfolio"
          description="My introduction to React, this project had many iterations to try out variations of styles and methods. I used this opportunity to not just learn ReactJS but to also improve my styling."
          tools="CSS, JS, HTML, ReactJS, VScode, EmailJS"
          repo="https://github.com/MJStone587/portfolio-repo"
          site="https://markjportfolio.netlify.app/"
        />
      </div>
    </section>
  );
};

export default forwardRef(Projects);
