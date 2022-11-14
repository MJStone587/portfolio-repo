import React, { forwardRef, useRef } from "react";
import Typewriter from "typewriter-effect";
import "animate.css";

const Home = (props, ref) => {
  const aboutRef = useRef();
  function scrollToDiv(currentRef) {
    currentRef.current.scrollIntoView({ behavior: "smooth" });
  }
  return (
    <section className="homeContainer" ref={ref}>
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
          I graduated with an Associates in Software Development. After
          graduating, I have spent the past year honing my craft, learning
          frameworks, building apps, and exploring development. Take a look at
          my skills, experience, and apps!
        </p>
      </div>
      <div className="continueBtn_container">
        <button className="continueBtn" onClick={() => scrollToDiv(aboutRef)}>
          Continue
        </button>
      </div>
    </section>
  );
};

export default forwardRef(Home);
