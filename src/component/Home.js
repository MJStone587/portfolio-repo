import React, { forwardRef } from "react";
import { useInView } from "react-intersection-observer";
import Typewriter from "typewriter-effect";
import "animate.css";
import pawPrint from "../images/pawprint.png";

const Home = (props, ref) => {
  const { ref: myRef, inView } = useInView();
  return (
    <div className="homeBodyContainer" ref={myRef}>
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
      <img src={pawPrint} class="pawPrint print1" alt="Paw Print"></img>
      <img src={pawPrint} class="pawPrint print2" alt="Paw Print"></img>
      <img src={pawPrint} class="pawPrint print3" alt="Paw Print"></img>
      <img src={pawPrint} class="pawPrint print4" alt="Paw Print"></img>
    </div>
  );
};

export default forwardRef(Home);
