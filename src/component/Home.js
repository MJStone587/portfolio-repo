import React, { forwardRef } from "react";
import { useInView } from "react-intersection-observer";
import Typewriter from "typewriter-effect";
import "animate.css";

const Home = (props, ref) => {
  const { ref: myRef, inView: isVisible } = useInView();
  return (
    <div
      className={
        isVisible
          ? "homeBodyContainer animate__animated animate__fadeIn"
          : "homeBodyContainer"
      }
      ref={myRef}
    >
      <div className="matrixText">
        <Typewriter
          onInit={(typewriter) => {
            typewriter
              .changeDeleteSpeed(30)
              .changeDelay(100)
              .pauseFor(500)
              .typeString("Welcome.")
              .pauseFor(500)
              .deleteAll()
              .typeString("I've been waiting for you.")
              .pauseFor(500)
              .deleteAll()
              .typeString("We have a lot to do.")
              .pauseFor(500)
              .deleteAll()
              .typeString("If you are ready, follow the white rabbit.")
              .start();
          }}
        />
      </div>
    </div>
  );
};

export default forwardRef(Home);
