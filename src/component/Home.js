import React, { forwardRef } from "react";
import Typewriter from "typewriter-effect";
import comet from "../images/myColor1.png";
import "animate.css";

const Home = (props, ref) => {
  return (
    <div className="homeBodyContainer">
      <img src={comet} alt="Comet" className="comet comet1"></img>
      <img src={comet} alt="Comet" className="comet comet2"></img>
      <img src={comet} alt="Comet" className="comet comet3"></img>
      <div className="matrixText">
        <Typewriter
          onInit={(typewriter) => {
            typewriter
              .changeDeleteSpeed(30)
              .changeDelay(100)
              .pauseFor(200)
              .typeString("Welcome to my little corner of the world.")
              .pauseFor(400)
              .deleteAll()
              .typeString("I'm Mark Johnston and this is my site")
              .start();
          }}
        />
      </div>
      <div className="btnOneContainer">
        <a href="#" className="homeBtnOne">
          About Me
        </a>
      </div>
      <div className="btnTwoContainer">
        <a href="#" className="homeBtnTwo">
          My Projects
        </a>
      </div>
      <div className="btnThreeContainer">
        <a href="#" className="homeBtnThree">
          Contact Me
        </a>
      </div>
    </div>
  );
};

export default forwardRef(Home);
