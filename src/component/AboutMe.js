import React, { forwardRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const AboutMe = (props, ref) => {
  return (
    <section className="aboutme_container" ref={ref}>
      <div className="aboutme_header">
        <h1>About Me</h1>
      </div>
      <div className="aboutme_box">
        <AnimatePresence>
          <motion.div
            whileInView={{ x: 0, opacity: 1 }}
            initial={{ x: 100, opacity: 0 }}
            exit={{ x: 100, opacity: 0 }}
            transition={{ ease: 'easeOut' }}
            viewport={{ amount: 0.5, once: true }}
            className="aboutme_description"
          >
            <p>
              After graduating college I spent a year+ learning frameworks,
              creating apps, and improving my knowledge. I continuously strive
              to improve my code; how easy it is to read, how modular it is, and
              how well it performs. Learning and improving fuels my passion for
              software development. Currently I am most proficient in the
              following technologies:
            </p>
          </motion.div>
        </AnimatePresence>
        <AnimatePresence>
          <motion.div
            whileInView={{ x: 0, opacity: 1 }}
            initial={{ x: -100, opacity: 0 }}
            exit={{ x: -100, opacity: 0 }}
            transition={{ ease: 'easeOut' }}
            viewport={{ amount: 0.5, once: true }}
            className="skills_box"
          >
            <div className="skills_box_content">
              <div className="skills_list">
                <p>
                  HTML/CSS Javascript Express NodeJS MongoDb PHP mySQL ReactJS
                  Java
                </p>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
        <motion.div
          whileInView={{ x: 0, opacity: 1 }}
          initial={{ x: 100, opacity: 0 }}
          exit={{ x: 100, opacity: 0 }}
          transition={{ ease: 'easeOut' }}
          viewport={{ amount: 0.5, once: true }}
          className="portrait_box"
        >
          <p>
            Building projects has taught me a lot about the importance of
            high-level design. Good design helps create a smooth and easy build
            process. This is something I have worked to improve and I think it
            shows in the progression of my the apps I have created.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default forwardRef(AboutMe);
