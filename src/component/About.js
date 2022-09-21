import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import keyboardImage from "../images/keyboardColorMatch.jpg";

export default function About(props) {
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
      <div className="aboutBodySkills">
        <FontAwesomeIcon icon="fa-brands fa-html5" />
        <FontAwesomeIcon icon="fa-brands fa-css3-alt" />
        <FontAwesomeIcon icon="fa-brands fa-js" />
        <FontAwesomeIcon icon="fa-brands fa-node" />
        <FontAwesomeIcon icon="fa-brands fa-react" />
        <FontAwesomeIcon icon="fa-brands fa-php" />
        <FontAwesomeIcon icon="fa-brands fa-square-git" />
        <FontAwesomeIcon icon="fa-brands fa-github" />
      </div>
      <div className="aboutBodyArrow">
        <h2>View My Projects</h2>
        <FontAwesomeIcon
          onClick={props.showProjects}
          icon="fa-solid fa-arrow-right-long"
        />
      </div>
      <div className="aboutBackground">
        <img src={keyboardImage} id="keyboardImg" alt="Keyboard on Desk"></img>
      </div>
    </div>
  );
}
