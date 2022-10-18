import React, { forwardRef } from "react";
import { Link } from "react-router-dom";
import computerImgTop from "../images/pexelsComputerTop.jpg";
import computerImgMid1 from "../images/pexelsComputerMid1.jpg";
import computerImgMid2 from "../images/pexelsComputerMid2.jpg";
import computerImgBottom from "../images/pexelsComputerBottom.jpg";
import profilePic from "../images/profilePic.jpg";
import "animate.css";

const Home = (props, ref) => {
  return (
    <main className="homeBodyContainer" ref={ref}>
      <h1 className="homeBodyTitle">Welcome</h1>
      <img src={profilePic} id="portraitImg" alt="Mark's Face"></img>
      <p className="homeBodyText">
        I'm Mark Johnston, a recent Software Development graduate. I am a driven
        and creative individual with a thirst for knowledge.
      </p>
      <Link id="homeBodyBtn" to="/about">
        Learn More
      </Link>
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
    </main>
  );
};

export default forwardRef(Home);
