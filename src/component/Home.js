import React, { forwardRef, useRef } from "react";
import Typewriter from "typewriter-effect";
import "animate.css";
import { useScroll, motion, AnimatePresence } from "framer-motion";

const Home = (props, ref) => {
  const aboutRef = useRef();
  const animRef = useRef(null);

  function scrollToDiv(currentRef) {
    currentRef.current.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <section className="homeContainer" ref={ref}>
      <motion.div
        animate={{ y: 0 }}
        initial={{ y: -300 }}
        transition={{ ease: "easeIn", duration: 1.5 }}
        className="homeAnimateBox"
      ></motion.div>
      <div className="homeContainer_centerBox">
        <p className="homeContainer_centerBox_p1">Hello, my name is</p>
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
          I graduated with an Associates Degree in Software Development in 2021.
          This site is a collection of the projects I've worked on, the
          experience I've acquired, and a bit about me the developer. Don't
          worry about the continue button, I'll fix that.
        </p>
      </div>
      <motion.div className="continueBtn_container">
        <button className="continueBtn" onClick={() => scrollToDiv(aboutRef)}>
          Continue
        </button>
      </motion.div>
    </section>
  );
};

export default forwardRef(Home);
