import React, { useState, forwardRef } from "react";
import { useInView } from "react-intersection-observer";
import { Link } from "react-router-dom";
import SkillIconBox from "./SkillIconBox.js";
import SkillNamesBox from "./SkillNamesBox.js";
import useWindowSize from "use-window-size-v2";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../style.css";

const About = (props, ref) => {
  const { ref: myRef, inView: isVisible } = useInView();

  const { width } = useWindowSize();
  const [divDisplay, changeDivDisplay] = useState("skillIconBox");

  const showNamesDiv = function () {
    changeDivDisplay("skillNamesBox");
  };
  const showIconsDiv = function () {
    changeDivDisplay("skillIconBox");
  };

  return (
    <main className="aboutBodyContainer" ref={ref}>
      <div
        className={
          isVisible
            ? "aboutBodyBox1 animateSlideInRight"
            : "aboutBodyBox1 animateFadeOut"
        }
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
            ? "aboutBodyBox2 animateSlideInLeft"
            : "aboutBodyBox2 animateFadeOut"
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
            ? "aboutBodyDynamicBox animateSlideUp"
            : "aboutBodyDynamicBox animateFadeOut"
        }
        ref={myRef}
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
