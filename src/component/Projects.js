import React, { useState, forwardRef } from "react";
import ProjectDisp from "./ProjectDisp.js";
import { useInView } from "react-intersection-observer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import financialForgeScreen from "../images/financialForgeSS.png";
import { Link } from "react-router-dom";

const Projects = (props, ref) => {
  const [projectDisp, setProjDisp] = useState(0);
  const { ref: myRef, inView: isVisible } = useInView();

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

  return (
    <section className="projects_container" ref={myRef}>
      <div className="projects_header">
        <h1 className="projects_title" ref={ref}>
          My Projects
        </h1>
        <h2 id="projects_callToAction">
          Like what you see?
          <button id="contactMeBtn" to="/contact">
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
            img={financialForgeScreen}
            title="Financial Organizer App"
            alt="Financial Organizer"
            description="Track and review spending and savings"
            tools="Javascript, Html, CSS, MongoDB, Express, NodeJS"
            repo="https://github.com/MJStone587/Framework"
            site="https://hidden-peak-86387.herokuapp.com/catalog"
          />
        )}
        {projectDisp === 1 && (
          <ProjectDisp
            title="Pokemon Search"
            alt="Pokemon App"
            description="Search your favorite pokemon"
            tools="CSS, Javascript, Html"
            repo="https://github.com/MJStone587/Pokemon"
            site="https://mjstone587.github.io/Pokemon/"
          />
        )}
        {projectDisp === 2 && (
          <ProjectDisp
            title="Movie / Television Browsing App"
            alt="What2Watch"
            description="Movie display and search using my own API"
            tools="CSS, Javascript, Html"
            repo="https://github.com/MJStone587/What2Watch/"
            site="https://mjstone587.github.io/What2Watch/"
          />
        )}
        {projectDisp === 3 && (
          <ProjectDisp
            title="Portfolio"
            alt="Portfolio"
            description="You are looking at it!"
            tools="CSS, Javascript, Html"
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
            style={{ color: projectDisp === 0 ? "white" : "#031013" }}
            icon="fa-solid fa-circle-notch"
          />
        </li>
        <li>
          <FontAwesomeIcon
            onClick={() => setProjDisp(1)}
            style={{ color: projectDisp === 1 ? "white" : "#031013" }}
            icon="fa-solid fa-circle-notch"
          />
        </li>
        <li>
          <FontAwesomeIcon
            onClick={() => setProjDisp(2)}
            style={{ color: projectDisp === 2 ? "white" : "#031013" }}
            icon="fa-solid fa-circle-notch"
          />
        </li>
        <li>
          <FontAwesomeIcon
            onClick={() => setProjDisp(3)}
            style={{ color: projectDisp === 3 ? "white" : "#031013" }}
            icon="fa-solid fa-circle-notch"
          />
        </li>
      </ol>
    </section>
  );
};

export default forwardRef(Projects);
