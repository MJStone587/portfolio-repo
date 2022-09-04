import React from "react";
import computerImg from "../images/pexelsComputerTone2.jpg";
import codeImg from "../images/codeText.png";

export default function Home(props) {
  return (
    <>
      <div className="homeHeader">
        <div className="homeLeft">
          <h1 class="homeLeftTitle">Welcome To My Portfolio</h1>
          <svg class="homeLeftSvg"></svg>
          <p class="homeLeftText">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Eget
            duis at tellus at urna condimentum mattis. Enim blandit volutpat
            maecenas volutpat blandit aliquam etiam erat velit.
          </p>
          <button class="homeLeftBtn" onClick={props.showHome}>
            Learn More
          </button>
        </div>
        <div className="homeRight">
          <img src={computerImg} alt="Computer2Tone"></img>
        </div>
      </div>
    </>
  );
}
