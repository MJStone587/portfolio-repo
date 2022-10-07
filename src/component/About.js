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
    <main className="aboutBody">
      <div className="aboutContainer1">
        <p>
          From a Restaurant Manager, a Gas Attendant, Sales Lead, and an
          Animator. I have been looking for the right fit. When I started
          learning programming something clicked. I wondered why I hadn't been
          doing this sooner. I have been a computer guy for a long time. After
          getting my Software Development degree I have spent a year plus
          reviewing what I have learned, studying new frameworks, and honing my
          skills with projects. I am proficient in...
        </p>
      </div>
      <div className="aboutContainer2">
        <p>MongoDB</p>
        <p>mySQL</p>
        <p>WordPress</p>
        <p>Express</p>
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
    </main>
  );
}
