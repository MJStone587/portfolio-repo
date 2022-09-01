import React from "react";
import computerImg from "../images/pexelsComputerTone2.jpg";
import codeImg from "../images/codeText.png";

export default function Home() {
  return (
    <>
      <div className="homeHeader">
        <div className="homeLeft">
          <h1>Let's Create Something New Together</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Eget
            duis at tellus at urna condimentum mattis. Enim blandit volutpat
            maecenas volutpat blandit aliquam etiam erat velit.
          </p>
        </div>
        <div className="homeRight">
          <img src={computerImg} alt="Computer2Tone"></img>
        </div>
      </div>
    </>
  );
}
