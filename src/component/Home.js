import React from "react";
import computerImgTop from "../images/pexelsComputerTop.jpg";
import computerImgMid1 from "../images/pexelsComputerMid1.jpg";
import computerImgMid2 from "../images/pexelsComputerMid2.jpg";
import computerImgBottom from "../images/pexelsComputerBottom.jpg";
import profilePic from "../images/profilePic.jpg";

export default function Home(props) {
  return (
    <div className="homeHeader">
      <h1 className="homeHeaderTitle">Welcome To My Portfolio</h1>
      <img src={profilePic} id="portraitImg" alt="Mark's Face"></img>
      <p className="homeHeaderText">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Eget duis at tellus
        at urna condimentum mattis. Enim blandit volutpat maecenas volutpat
        blandit aliquam etiam erat velit.
      </p>
      <button className="homeHeaderBtn" onClick={props.showAbout}>
        Learn More
      </button>
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
  );
}
