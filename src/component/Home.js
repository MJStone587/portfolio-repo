import React, { forwardRef } from "react";
import Typewriter from "typewriter-effect";
import "animate.css";

const Home = (props, ref) => {
  return (
    <div className="homeBodyContainer">
      <p className="homeBodyContainer_p1">Hi, my name is</p>
      <div className="matrixText">
        <Typewriter
          onInit={(typewriter) => {
            typewriter
              .changeDeleteSpeed(30)
              .changeDelay(100)
              .pauseFor(200)
              .typeString("Mark Johnston")
              .start();
          }}
        />
      </div>
      <p className="homeBodyContainer_p2">
        I recently completed an Associates Degree in
        <span className="homeBodyContainer_p2Span">
          {" "}
          Software Development.{" "}
        </span>
        Come, learn more about me, my skills, my experience, and some of the
        projects I've built.
      </p>
      <div className="btnOneContainer">
        <a href="#" className="homeBtnOne">
          Learn More
        </a>
      </div>
    </div>
  );
};

export default forwardRef(Home);
