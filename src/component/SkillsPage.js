import React from "react";
import { useInView } from "react-intersection-observer";
import pawPrint from "../images/pawprint.png";

export default function SkillsPage() {
  const { ref: myRef, inView } = useInView();
  /*
  <div className="snowPageBlizzardEffect" ref={myRef}>
  <Snowfall
    snowflakeCount={600}
    speed={[0.5, 10]}
    wind={[-0.5, 10]}
    radius={[0.5, 4.5]}
    style={{
      position: "absolute",
      top: "110vh",
      width: "100vw",
      height: "110vh",
    }}
  />
</div>
*/
  return (
    <>
      <img src={pawPrint} class="pawPrint print1" alt="Paw Print"></img>
      <img src={pawPrint} class="pawPrint print2" alt="Paw Print"></img>
      <img src={pawPrint} class="pawPrint print3" alt="Paw Print"></img>
      <img src={pawPrint} class="pawPrint print4" alt="Paw Print"></img>
      <div
        className={
          inView
            ? "skillsPageContainer slowFadeIn"
            : "skillsPageContainer faded"
        }
      >
        <div className="row1">
          <h2>Hi, I'm</h2>
          <h1 id="myName">Mark Johnston</h1>
          <h1 id="myTitle">Software Developer</h1>
          <h3>
            I have the skills that you need, to create unique responsive
            experiences through the web.
          </h3>
        </div>
        <div>
          <div className="row2">
            <h3>HTML</h3>
            <h3>CSS</h3>
            <h3>Javascript</h3>
            <h3>Express</h3>
            <h3>NodeJS</h3>
          </div>
          <div className="row3">
            <div className="skillCircle circleHTML"></div>
            <div className="skillCircle circleCSS"></div>
            <div className="skillCircle circleJS"></div>
            <div className="skillCircle circleExpress"></div>
            <div className="skillCircle circleNode"></div>
          </div>
        </div>
      </div>
    </>
  );
}
