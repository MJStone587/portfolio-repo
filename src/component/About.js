import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import keyboardImage from "../images/keyboardColorMatch.jpg";

export default function About() {
  return (
    <div className="aboutBody">
      <div className="aboutBodyIntro">
        <p id="aboutBodyIntroText">
          Since I was a young boy I was drawn to computers. What they could do,
          how they worked, and all the parts and pieces inside intrigued me. I
          have a long history of work, working various jobs since a young age.
          From a restaurant manager, a gas attendant, a sales lead, animator,
          and now a Software Developer. When I finally started learning to code,
          a lightbulb switched on in my head. I wondered why I hadn't been doing
          this sooner, it just fit. After getting my Associates degree I have
          spent a year plus reviewing what I have learned, studying new
          framework, and honing my skills. I am proficient in...
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
      <div className="aboutBackground">
        <img src={keyboardImage} id="keyboardImg" alt="Keyboard on Desk"></img>
      </div>
    </div>
  );
}
