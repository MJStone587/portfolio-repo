import React from "react";
import { useInView } from "react-intersection-observer";

export default function SkillsPage() {
  const { ref: myRef, inView } = useInView();
  /*   <div className="skillsContainer_box1_row2">
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
          </div> */
  return (
    <>
      <div className="skillsContainer" ref={myRef}>
        <div
          className={
            inView
              ? "skillsContainer_box1 animate__animated animate__fadeIn"
              : "skillsContainer_box1 animate__animated animate__fadeOut"
          }
        >
          <h3>
            After graduating I have spent the past year+ learning new
            frameworks, building apps, and improving my skills.
          </h3>
        </div>
        <div
          className={
            inView
              ? "skillsContainer_box2 animate__animated animate__fadeIn"
              : "skillsContainer_box2 animate__animated animate__fadeOut"
          }
        >
          <div className="skillsContainer_box2_row1">
            <h1>Skills</h1>
          </div>
          <div className="skillsContainer_box2_row2">
            <h3> HTML </h3>
            <h3> CSS </h3>
            <h3> Javascript </h3>
            <h3> Express </h3>
            <h3> NodeJS </h3>
            <h3> MongoDb </h3>
            <h3> PHP </h3>
            <h3> mySQL </h3>
            <h3> React </h3>
            <h3> Java </h3>
          </div>
        </div>
      </div>
    </>
  );
}
