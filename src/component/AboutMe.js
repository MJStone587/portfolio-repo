import React, { forwardRef } from "react";

const AboutMe = (props, ref) => {
  return (
    <section className="aboutMeContainer" ref={ref}>
      <div className="aboutMe_header">
        <h1>About Me</h1>
      </div>
      <div className="aboutMe_box">
        <div className="aboutMe_description">
          <h3>
            After graduating college I spent a year+ learning frameworks,
            creating apps, and improving my knowledge. I continuously strive to
            improve my code; how easy it is to read, how modular it is, and how
            well it performs. Learning and improving fuels my passion for
            software development. Currently I am most proficient in the
            following languages:
          </h3>
        </div>
        <div className="skillsBox">
          <div className="skillsBox_content">
            <ol>
              <h3>HTML</h3>
              <h3>CSS</h3>
              <h3>Javascript</h3>
              <h3>Express</h3>
              <h3>NodeJS</h3>
              <h3>MongoDb</h3>
              <h3>PHP</h3>
              <h3>mySQL</h3>
              <h3>ReactJS</h3>
              <h3>Java</h3>
            </ol>
          </div>
        </div>
        <div className="portraitBox">
          <p>
            Building projects has taught me a lot about the importance of
            high-level design. Good design helps create a smooth and easy build
            process, prevents scope creep (this one gets me often), and helps
            better manage my time. This is also true for high-level design of my
            own code structure, which is something I feel is a weakness of mine.
            So I keep working and keep improving. I hope you can see these
            improvements in the progression of projects I have displayed down
            the page.
          </p>
        </div>
      </div>
    </section>
  );
};

export default forwardRef(AboutMe);
