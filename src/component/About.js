import React, { useState, forwardRef } from "react";
import { useInView } from "react-intersection-observer";
import { Link } from "react-router-dom";
import SkillIconBox from "./SkillIconBox.js";
import SkillNamesBox from "./SkillNamesBox.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../style.css";
import "animate.css";

const About = (props, ref) => {
  const { ref: myRef, inView: isVisible } = useInView();
  const [divDisplay, changeDivDisplay] = useState("skillIconBox");

  const showNamesDiv = function () {
    changeDivDisplay("skillNamesBox");
  };
  const showIconsDiv = function () {
    changeDivDisplay("skillIconBox");
  };

  return (
    <main className="aboutBodyContainer" ref={myRef}>
      <div
        className={
          isVisible
            ? "aboutBodyBox1 animate__animated animate__bounceInLeft"
            : "aboutBodyBox1 invisible"
        }
        ref={ref}
      >
        <p>
          From a Restaurant Manager, Gas Attendant, Sales Lead, and an Animator.
          I have filled many shoes. When I started learning programming
          something clicked. I wondered why I hadn't been doing this sooner.
          After getting my Software Development degree I have spent a year plus
          studying new frameworks, and honing my skills with projects. I am
          proficient in...
        </p>
      </div>

      <div
        className={
          isVisible
            ? "aboutBodyBox2 animate__animated animate__bounceInRight"
            : "aboutBodyBox2 invisible"
        }
      >
        <p>MongoDB</p>
        <p>mySQL</p>
        <p>WordPress</p>
        <p>Express</p>
        <p>VScode</p>
      </div>
      <div
        className={
          isVisible
            ? "aboutBodyDynamicBox animate__animated animate__jackInTheBox"
            : "aboutBodyDynamicBox invisible"
        }
        onMouseEnter={showNamesDiv}
        onMouseLeave={showIconsDiv}
      >
        {divDisplay === "skillIconBox" && <SkillIconBox />}
        {divDisplay === "skillNamesBox" && <SkillNamesBox />}
      </div>

      <div className="aboutBodyArrow animateFadeIn">
        <h2>View Projects</h2>
        <Link className="linkToProjects" to="/projects">
          <FontAwesomeIcon icon="fa-solid fa-arrow-right-long" />
        </Link>
      </div>
    </main>
  );
};

export default forwardRef(About);
