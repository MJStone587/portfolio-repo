import React, { useState } from "react";
import ProjectDisp from "./ProjectDisp.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import computerImgTop from "../images/pexelsComputerTop.jpg";
import computerImgMid1 from "../images/pexelsComputerMid1.jpg";
import computerImgMid2 from "../images/pexelsComputerMid2.jpg";
import computerImgBottom from "../images/pexelsComputerBottom.jpg";
import profilePic from "../images/profilePic.jpg";
import SkillIconBox from "./SkillIconBox.js";
import SkillNamesBox from "./SkillNamesBox.js";

export default function MobileDisp(props) {
  const [projectDisp, setProjDisp] = useState(0);

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
  const [divDisplay, changeDivDisplay] = useState("skillIconBox");

  const showNamesDiv = function () {
    changeDivDisplay("skillNamesBox");
  };
  const showIconsDiv = function () {
    changeDivDisplay("skillIconBox");
  };

  return (
    <main onClick={props.closeNav} className="mobileDisplayMain">
      <div className="homeHeader">
        <h1 className="homeHeaderTitle">Welcome</h1>
        <img src={profilePic} id="portraitImg" alt="Mark's Face"></img>
        <p className="homeHeaderText">
          Hi, I'm Mark. A recent Software Development graduate. I am a driven
          and creative individual with a thirst for knowledge.
        </p>
        <Link className="homeHeaderBtn" to="/about">
          Learn More
        </Link>
        <div className="homeBackground">
          <img
            src={computerImgTop}
            className="computerImg imgTop"
            alt="Computer Top"
          ></img>
          <img
            src={computerImgMid1}
            className="computerImg imgMid1"
            alt="Computer Mid"
          ></img>
          <img
            src={computerImgMid2}
            className="computerImg imgMid2"
            alt="Computer Mid Second"
          ></img>
          <img
            src={computerImgBottom}
            className="computerImg imgBottom"
            alt="Computer Bottom"
          ></img>
        </div>
      </div>
      <div className="aboutBody">
        <p className="aboutContainer1">
          From a Restaurant Manager, a Gas Attendant, Sales Lead, and an
          Animator. I have been looking for the right fit. When I started
          learning programming something clicked. I wondered why I hadn't been
          doing this sooner, it just fit. I have been a computer guy for a long
          time. After getting my Software Development degree I have spent a year
          plus reviewing what I have learned, studying new frameworks, and
          honing my skills with new projects. I am proficient in...
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
      <div className="projectDispContainer">
        <h1>My Projects</h1>
        <h2>
          Like what you see?{" "}
          <Link id="contactMeHyperlink" to="/contact">
            Contact Me!
          </Link>
        </h2>
        <FontAwesomeIcon
          onClick={incrementDisp}
          icon="fa-solid fa-chevron-right"
        />
        <FontAwesomeIcon
          onClick={decrementDisp}
          icon="fa-solid fa-chevron-left"
        />

        {projectDisp === 0 && (
          <ProjectDisp
            title="Financial Forge"
            alt="Financial Organizer"
            description="A place to track and plan financial spending/saving"
            tools="Javascript, Html, CSS, MongoDB, ExpressJs, NodeJS, CSS"
            repo="https://github.com/MJStone587/Framework"
            site="https://hidden-peak-86387.herokuapp.com/catalog"
          />
        )}
        {projectDisp === 1 && (
          <ProjectDisp
            title="Pokemon Search"
            alt="Pokemon App"
            description="Search and review pokemon data"
            tools="CSS, Javascript, Html"
            repo="https://github.com/MJStone587/Pokemon"
            site="https://mjstone587.github.io/Pokemon/"
          />
        )}
        {projectDisp === 2 && (
          <ProjectDisp
            title="What 2 Watch"
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

        <ol className="carouselNav">
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
      </div>
    </main>
  );
}
