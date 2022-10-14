import React, { useState } from "react";
import { Link } from "react-router-dom";
import SkillIconBox from "./SkillIconBox.js";
import SkillNamesBox from "./SkillNamesBox.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../style.css";

export default function About(props) {
  const [divDisplay, changeDivDisplay] = useState("skillIconBox");

  const showNamesDiv = function () {
    changeDivDisplay("skillNamesBox");
  };
  const showIconsDiv = function () {
    changeDivDisplay("skillIconBox");
  };

  return (
    <main className="aboutBodyContainer">
      <div className="aboutBodyBox1">
        <p>
          From a Restaurant Manager, Gas Attendant, Sales Lead, and an Animator.
          I have filled many shoes. When I started learning programming
          something clicked. I wondered why I hadn't been doing this sooner.
          After getting my Software Development degree I have spent a year plus
          studying new frameworks, and honing my skills with projects. I am
          proficient in...
        </p>
      </div>
      <div className="aboutBodyBox2">
        <p>MongoDB</p>
        <p>mySQL</p>
        <p>WordPress</p>
        <p>Express</p>
        <p>VScode</p>
      </div>
      <div
        className="aboutBodyDynamicBox"
        onMouseEnter={showNamesDiv}
        onMouseLeave={showIconsDiv}
      >
        {divDisplay === "skillIconBox" && <SkillIconBox />}
        {divDisplay === "skillNamesBox" && <SkillNamesBox />}
      </div>

      <div className="aboutBodyArrow">
        <h2>View Projects</h2>
        <Link className="linkToProjects" to="/projects">
          <FontAwesomeIcon icon="fa-solid fa-arrow-right-long" />
        </Link>
      </div>
    </main>
  );
}
