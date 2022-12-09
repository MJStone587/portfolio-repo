import React, { forwardRef, useRef } from "react";
import ProjectDisp from "./ProjectDisp.js";
import financialForgeScreen from "../images/financialForgeSS.webp";
import what2watchScreen from "../images/what2watchScreen.webp";
import portfolioScreen from "../images/portfolioScreen.webp";

const Projects = (props, ref) => {
  const contactRef = useRef();

  /*<ProjectDisp
          image={pokemonScreen}
          title="Pokemon Search"
          alt="Pokemon App"
          description="To better understand APIs, I created this Pokemon search/browse app"
          tools="CSS, Javascript, Html, PokemonAPI, VScode  "
          repo="https://github.com/MJStone587/Pokemon"
          site="https://mjstone587.github.io/Pokemon/"
        />
  */
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
          image={what2watchScreen}
          title="Movie/Show Browsing App"
          alt="What2Watch"
          description="Crud Project from college using PHP and mySQL. Came back to make improvements to this project, mostly styling changes."
          tools="CSS, PHP, mySQL, Html, VScode, JS"
          repo="https://github.com/MJStone587/What2Watch/"
          site="https://mjstone587.github.io/What2Watch/"
        />
        <ProjectDisp
          image={financialForgeScreen}
          title="Financial Organizer"
          alt="Financial Organizer"
          description="My first experience using ExpressJS / NodesJS for a CRUD app and login authentication. Understanding how to store encrypted passwords using bcrypt. Used Grid styling to better understand it."
          tools="JS, Html, CSS, MongoDB, Express, NodeJS"
          repo="https://github.com/MJStone587/Framework"
          site="https://hidden-peak-86387.herokuapp.com/catalog"
        />
        <ProjectDisp
          image={portfolioScreen}
          title="Portfolio"
          alt="Portfolio"
          description="My introduction to React, this project had many iterations to try out variations of styles and methods. I used this opportunity to not just learn ReactJS but to also improve my styling."
          tools="CSS, JS, Html, ReactJS, VScode, EmailJS"
          repo="https://github.com/MJStone587/portfolio-repo"
          site="https://markjportfolio.netlify.app/"
        />
      </div>
    </section>
  );
};

export default forwardRef(Projects);
