import React, { useState, forwardRef, useRef } from "react";
import ProjectDisp from "./ProjectDisp.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import financialForgeScreen from "../images/financialForgeSS.png";
import pokemonScreen from "../images/pokemonAppScreen1.png";
import what2watchScreen from "../images/what2watchScreen.png";
import portfolioScreen from "../images/portfolioScreen.png";

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
          <button id="contactMeBtn" onClick={() => scrollToDiv(contactRef)}>
            Contact Me!
          </button>
        </h2>
      </div>
      <div className="projects_carousel">
        <ProjectDisp
          image={financialForgeScreen}
          title="Financial Organizer App"
          alt="Financial Organizer"
          description="My first experience using ExpressJS / NodesJS for a CRUD app and login authentication. Understanding how to store encrypted passwords using bcrypt. Mostly using Grid css for this. The whole project was a massive learning experience."
          tools="Javascript, Html, CSS, MongoDB, Express, NodeJS"
          repo="https://github.com/MJStone587/Framework"
          site="https://hidden-peak-86387.herokuapp.com/catalog"
        />
        <ProjectDisp
          image={what2watchScreen}
          title="Movie / Television Browsing App"
          alt="What2Watch"
          description="Crud Project from college using PHP and mySQL. Came back to make improvements to this project, mostly styling changes."
          tools="CSS, PHP, mySQL, Html, VScode"
          repo="https://github.com/MJStone587/What2Watch/"
          site="https://mjstone587.github.io/What2Watch/"
        />
        <ProjectDisp
          image={portfolioScreen}
          title="Portfolio"
          alt="Portfolio"
          description="This portfolio project was my introdcution to React. I have had many iterations of this since then, trying out variations of styles and methods. I used this opportunity to not just learn ReactJS but also to understand different styling designs. Looking at other portfolios or websites to take inspiration. Learn how to better read others code, and learn from their techniques."
          tools="CSS, Javascript, Html, ReactJS, VScode, EmailJS"
          repo="https://github.com/MJStone587/portfolio-repo"
          site="https://mjstone587.github.io/Pokemon/"
        />
      </div>
    </section>
  );
};

export default forwardRef(Projects);
