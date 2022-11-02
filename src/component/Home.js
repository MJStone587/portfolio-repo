import React, { forwardRef } from "react";
import Typewriter from "typewriter-effect";
import "animate.css";

const Home = (props, ref) => {
  return (
    <div className="homeBodyContainer">
      <div className="matrixText">
        <Typewriter
          onInit={(typewriter) => {
            typewriter
              .changeDeleteSpeed(30)
              .changeDelay(100)
              .pauseFor(200)
              .typeString("You there! Yes, you!")
              .pauseFor(400)
              .deleteAll()
              .typeString("You must follow that space ship!")
              .start();
          }}
        />
      </div>
    </div>
  );
};

export default forwardRef(Home);
