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
    <div className="aboutBody">
      <p className="aboutContainer1">
        I have a long history of work, working various jobs since a young age.
        From a Restaurant Manager, a Gas Attendant, Sales Lead, Animator, and
        now a Software Developer. When I finally started learning to code, a
        lightbulb switched on in my head. I wondered why I hadn't been doing
        this sooner, it just fit. I have been a computer guy for a long time.
        After getting my Associates degree I have spent a year plus reviewing
        what I have learned, studying new frameworks, and honing my skills with
        new projects. I am proficient in...
      </p>
      <div className="aboutContainer2">
        <p>MongoDB</p>
        <p>mySQL</p>
        <p>VScode</p>
      </div>
      <div
        className="aboutDynamicDiv"
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
    </div>
  );
}
