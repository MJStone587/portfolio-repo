import React, { forwardRef } from "react";
import { useInView } from "react-intersection-observer";

const AboutMe = (props, ref) => {
  const { ref: myRef, inView } = useInView();

  return (
    <section className="aboutMeContainer" ref={ref}>
      <div className="aboutMe_box">
        <h3>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Morbi quis
          commodo odio aenean sed adipiscing diam. Eget sit amet tellus cras
          adipiscing enim eu turpis. Auctor augue mauris augue neque gravida in
          fermentum et sollicitudin. Venenatis urna cursus eget nunc
          scelerisque. Maecenas volutpat blandit aliquam etiam erat velit.
          Platea dictumst quisque sagittis purus sit amet volutpat consequat. In
          cursus turpis massa tincidunt dui ut ornare. Lacinia at quis risus sed
          vulputate odio. Et magnis dis parturient montes nascetur ridiculus mus
          mauris vitae.
        </h3>
      </div>
      <div className="skillsBox">
        <div className="skillsBox_row1">
          <h1>Skills</h1>
        </div>
        <div className="skillsBox_row2">
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
      <div className="portraitBox"></div>
    </section>
  );
};

export default forwardRef(AboutMe);
