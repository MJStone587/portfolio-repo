import React, { forwardRef } from "react";
import { useInView } from "react-intersection-observer";
import Typewriter from "typewriter-effect";
import "animate.css";

const Home = (props, ref) => {
  /*
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
      <h3
        className={isVisible ? "homeBodyTitle" : "homeBodyTitle invisible"}
        ref={ref}
      >
        Hi, my name is
      </h3>
        <p
        className={
          isVisible
            ? "homeBodyText animate__animated"
            : "homeBodyText invisible"
        }
      >
        I'm Mark Johnston, a recent Software Development graduate. I am a driven
        and creative individual with a thirst for knowledge.
      </p>
      <button id="homeBodyBtn">Learn More</button>
  */
  const { ref: myRef, inView: isVisible } = useInView();
  return (
    <div className="homeBodyContainer" ref={myRef}>
      <div className="matrixText">
        <Typewriter
          onInit={(typewriter) => {
            typewriter
              .changeDeleteSpeed(25)
              .changeDelay(100)
              .pauseFor(1500)
              .typeString("Welcome.")
              .pauseFor(1000)
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
