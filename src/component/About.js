import React, { useState } from "react";
import { Link } from "react-router-dom";
import SkillIconBox from "./SkillIconBox.js";
import SkillNamesBox from "./SkillNamesBox.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import keyboardImage from "../images/keyboardColorMatch.jpg";
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
      <div className="aboutBodyIntro">
        <p id="aboutBodyIntroText">
          I have a long history of work, working various jobs since a young age.
          From a Restaurant Manager, a Gas Attendant, Sales Lead, Animator, and
          now a Software Developer. When I finally started learning to code, a
          lightbulb switched on in my head. I wondered why I hadn't been doing
          this sooner, it just fit. I have been a computer guy for a long time.
          After getting my Associates degree I have spent a year plus reviewing
          what I have learned, studying new frameworks, and honing my skills
          with new projects. I am proficient in...
        </p>
      </div>
      <div
        className="dynamicDiv"
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

      <div className="aboutBackground">
        <img src={keyboardImage} id="keyboardImg" alt="Keyboard on Desk"></img>
      </div>
    </div>
  );
}
