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
            creating apps, and improving my knowledge. I have continually tried
            to improve the quality of my code and knowing that I can improve it
            more fuels my passion for learning. The more projects I build the
            easier it has become to organize and design my projects at a higher
            level. Currently the languages below are the languages I am most
            experienced in.
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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Morbi
            quis commodo odio aenean sed adipiscing diam. Eget sit amet tellus
            cras adipiscing enim eu turpis.
          </p>
        </div>
      </div>
    </section>
  );
};

export default forwardRef(AboutMe);
