import React, { forwardRef } from 'react';
import Typewriter from 'typewriter-effect';
import 'animate.css';
import { motion } from 'framer-motion';

const Home = (props, ref) => {
  return (
    <section className="home_container" ref={ref}>
      <motion.div
        whileInView={{ x: 0 }}
        initial={{ x: -100 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ ease: 'easeOut' }}
        className="home_centerbox"
      >
        <p className="home_centerbox_p1">Hello, my name is</p>
        <div className="home_centerbox_typewriter">
          <Typewriter
            onInit={(typewriter) => {
              typewriter
                .changeDeleteSpeed(30)
                .changeDelay(100)
                .pauseFor(100)
                .typeString('Mark Johnston.')
                .start();
            }}
          />
        </div>
        <p className="home_centerbox_p2">
          I am a...
          <span className="home_centerbox_p2span"> Software Developer. </span>I
          graduated with an Associates Degree in Software Development in 2021.
          This site is a collection of the projects I've worked on, the
          experience I've acquired, and a bit about me the developer.
        </p>
      </motion.div>
    </section>
  );
};

export default forwardRef(Home);
