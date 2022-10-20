import React, { forwardRef } from "react";
import { Link } from "react-router-dom";
import { useInView } from "react-intersection-observer";
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
  */
  const { ref: myRef, inView: isVisible } = useInView();
  return (
    <main className="homeBodyContainer" ref={myRef}>
      <div className="homeBackground">
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
          I'm Mark Johnston, a recent Software Development graduate. I am a
          driven and creative individual with a thirst for knowledge.
        </p>
        <Link id="homeBodyBtn" to="/about">
          Learn More
        </Link>
      </div>
    </main>
  );
};

export default forwardRef(Home);
