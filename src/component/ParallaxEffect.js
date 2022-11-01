import React, { useRef } from "react";
import earth from "../images/earth.png";
import moon from "../images/moon.png";
import { motion, useScroll } from "framer-motion";

export default function ParallaxEffect() {
  const planetRef = useRef();
  const { scrollYProgress } = useScroll();

  return (
    <motion.div className="parallaxContainer">
      <motion.img src={earth} alt="Earth" className="foreground"></motion.img>
      <img src={moon} alt="Moon" className="background"></img>
      <h1 className="parallaxTitle">
        Together we can create and explore the Universe!
      </h1>
      <div className="parallaxRefDiv"></div>
    </motion.div>
  );
}
