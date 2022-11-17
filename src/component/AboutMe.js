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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Morbi
            quis commodo odio aenean sed adipiscing diam. Eget sit amet tellus
            cras adipiscing enim eu turpis. Auctor augue mauris augue neque
            gravida in fermentum et sollicitudin. Venenatis urna cursus eget
            nunc scelerisque. Maecenas volutpat blandit aliquam etiam erat
            velit. Platea dictumst quisque sagittis purus sit amet volutpat
            consequat.
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
