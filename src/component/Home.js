import React, { forwardRef } from "react";
import Typewriter from "typewriter-effect";
import "animate.css";

const Home = (props, ref) => {
  return (
    <div className="homeContainer">
      <div className="homeContainer_centerBox">
        <p className="homeContainer_centerBox_p1">Hi, my name is</p>
        <div className="homeContainer_centerBox_typeWriterText">
          <Typewriter
            onInit={(typewriter) => {
              typewriter
                .changeDeleteSpeed(30)
                .changeDelay(100)
                .pauseFor(200)
                .typeString("Mark Johnston.")
                .start();
            }}
          />
        </div>
        <p className="homeContainer_centerBox_p2">
          I am a...
          <span className="homeContainer_centerBox_p2Span">
            {" "}
            Software Developer.{" "}
          </span>
          Come, learn more about me, my skills, and see some of the projects
          I've built.
        </p>
      </div>{" "}
      <div className="btnOneContainer">
        <a href="#" className="homeBtnOne">
          Learn More
        </a>
      </div>
    </div>
  );
};

export default forwardRef(Home);
