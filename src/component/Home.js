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
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
      </div>
      <div className="continueBtn_container">
        <button className="continueBtn">Continue</button>
      </div>
    </div>
  );
};

export default forwardRef(Home);
