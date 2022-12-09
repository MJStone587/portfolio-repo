import React, { forwardRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

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
            transition={{ ease: "easeOut" }}
            viewport={{ amount: 0.5, once: true }}
            className="aboutme_description"
          >
            <p>
              After graduating college I spent a year+ learning frameworks,
              creating apps, and improving my knowledge. I continuously strive
              to improve my code; how easy it is to read, how modular it is, and
              how well it performs. Learning and improving fuels my passion for
              software development. Currently I am most proficient in the
              following languages:
            </p>
          </motion.div>
        </AnimatePresence>
        <AnimatePresence>
          <motion.div
            whileInView={{ x: 0, opacity: 1 }}
            initial={{ x: -100, opacity: 0 }}
            exit={{ x: -100, opacity: 0 }}
            transition={{ ease: "easeOut" }}
            viewport={{ amount: 0.5, once: true }}
            className="skills_box"
          >
            <div className="skills_box_content">
              <div className="skills_list">
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
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
        <motion.div
          whileInView={{ x: 0, opacity: 1 }}
          initial={{ x: 100, opacity: 0 }}
          exit={{ x: 100, opacity: 0 }}
          transition={{ ease: "easeOut" }}
          viewport={{ amount: 0.5, once: true }}
          className="portrait_box"
        >
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
        </motion.div>
      </div>
    </section>
  );
};

export default forwardRef(AboutMe);
