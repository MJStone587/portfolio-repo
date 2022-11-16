import React, { useState, forwardRef, useRef } from "react";
import ProjectDisp from "./ProjectDisp.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import financialForgeScreen from "../images/financialForgeSS.png";
import pokemonScreen from "../images/pokemonAppScreen1.png";
import what2watchScreen from "../images/what2watchScreen.png";
import portfolioScreen from "../images/portfolioScreen.png";

const Projects = (props, ref) => {
  // projectDisp is to change our current viewed project
  const [projectDisp, setProjDisp] = useState(0);
  const contactRef = useRef();

  //
  const incrementDisp = function () {
    let pjcDisp = projectDisp;
    if (pjcDisp >= 3) {
      setProjDisp(0);
    } else {
      pjcDisp++;
      setProjDisp(pjcDisp);
    }
  };

  const decrementDisp = function () {
    let pjcDisp = projectDisp;
    if (pjcDisp < 1) {
      setProjDisp(3);
    } else {
      pjcDisp--;
      setProjDisp(pjcDisp);
    }
  };

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
        <FontAwesomeIcon
          onClick={decrementDisp}
          icon="fa-solid fa-chevron-left"
        />

        {projectDisp === 0 && (
          <ProjectDisp
            image={financialForgeScreen}
            title="Financial Organizer App"
            alt="Financial Organizer"
            description="CRUD app for finances with login authentication"
            tools="Javascript, Html, CSS, MongoDB, Express, NodeJS"
            repo="https://github.com/MJStone587/Framework"
            site="https://hidden-peak-86387.herokuapp.com/catalog"
          />
        )}
        {projectDisp === 1 && (
          <ProjectDisp
            image={pokemonScreen}
            title="Pokemon Search"
            alt="Pokemon App"
            description="To better understand APIs, I created this Pokemon search/browse app"
            tools="CSS, Javascript, Html, PokemonAPI, VScode  "
            repo="https://github.com/MJStone587/Pokemon"
            site="https://mjstone587.github.io/Pokemon/"
          />
        )}
        {projectDisp === 2 && (
          <ProjectDisp
            image={what2watchScreen}
            title="Movie / Television Browsing App"
            alt="What2Watch"
            description="Movie display and search using my own JSon data."
            tools="CSS, Javascript, Html, VScode"
            repo="https://github.com/MJStone587/What2Watch/"
            site="https://mjstone587.github.io/What2Watch/"
          />
        )}
        {projectDisp === 3 && (
          <ProjectDisp
            image={portfolioScreen}
            title="Portfolio"
            alt="Portfolio"
            description="You are looking at it!"
            tools="CSS, Javascript, Html, ReactJS, VScode, EmailJS"
            repo="https://github.com/MJStone587/portfolio-repo"
            site="https://mjstone587.github.io/Pokemon/"
          />
        )}
        <FontAwesomeIcon
          onClick={incrementDisp}
          icon="fa-solid fa-chevron-right"
        />
      </div>

      <ol className="projects_carousel_nav">
        <li>
          <FontAwesomeIcon
            onClick={() => setProjDisp(0)}
            style={{ color: projectDisp === 0 ? "#2adfff" : "#031013" }}
            icon="fa-solid fa-circle-notch"
          />
        </li>
        <li>
          <FontAwesomeIcon
            onClick={() => setProjDisp(1)}
            style={{ color: projectDisp === 1 ? "#2adfff" : "#031013" }}
            icon="fa-solid fa-circle-notch"
          />
        </li>
        <li>
          <FontAwesomeIcon
            onClick={() => setProjDisp(2)}
            style={{ color: projectDisp === 2 ? "#2adfff" : "#031013" }}
            icon="fa-solid fa-circle-notch"
          />
        </li>
        <li>
          <FontAwesomeIcon
            onClick={() => setProjDisp(3)}
            style={{ color: projectDisp === 3 ? "#2adfff" : "#031013" }}
            icon="fa-solid fa-circle-notch"
          />
        </li>
      </ol>
    </section>
  );
};

export default forwardRef(Projects);
