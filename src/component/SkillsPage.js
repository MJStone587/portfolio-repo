import React from "react";
import { useInView } from "react-intersection-observer";

export default function SkillsPage() {
  const { ref: myRef, inView } = useInView();
  return (
    <>
      <div className="skillsPageContainer" ref={myRef}>
        <div
          className={
            inView
              ? "skillsContainer1 animate__animated animate__fadeIn"
              : "skillsContainer1 animate__animated animate__fadeOut"
          }
        >
          <h2>Hi, my name is</h2>
          <h1 id="myName">Mark Johnston</h1>
          <h2>I am a</h2>
          <h1 id="myTitle">Software Developer</h1>
          <h3>
            I have the skills that you need, to create unique responsive
            experiences. Let's create and explore new worlds through the web.
          </h3>
          <div className="skillsContainer1_row2">
            <div
              className={
                inView
                  ? "skillCircle circleHTML animationRotate"
                  : "skillCircle circleHTML"
              }
            ></div>
            <div
              className={
                inView
                  ? "skillCircle circleCSS animationRotate"
                  : "skillCircle circleCSS"
              }
            ></div>
            <div
              className={
                inView
                  ? "skillCircle circleJS animationRotate"
                  : "skillCircle circleJS"
              }
            ></div>
            <div
              className={
                inView
                  ? "skillCircle circleExpress animationRotate"
                  : "skillCircle circleExpress"
              }
            ></div>
            <div
              className={
                inView
                  ? "skillCircle circleNode animationRotate"
                  : "skillCircle circleNode"
              }
            ></div>
          </div>
        </div>
        <div
          className={
            inView
              ? "skillsContainer2 animate__animated animate__fadeIn"
              : "skillsContainer2 animate__animated animate__fadeOut"
          }
        >
          <div className="skillsContainer2_row1">
            <h1>Skills</h1>
          </div>
          <div className="skillsContainer2_row2">
            <h3>HTML</h3>
            <h3>CSS</h3>
            <h3>Javascript</h3>
            <h3>Express</h3>
            <h3>NodeJS</h3>
          </div>
          <div className="skillsContainer2_row3">
            <h3>MongoDb</h3>
            <h3>PHP</h3>
            <h3>mySQL</h3>
            <h3>React</h3>
            <h3>Java</h3>
          </div>
        </div>
      </div>
    </>
  );
}
