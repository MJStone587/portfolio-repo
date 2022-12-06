import { React, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion, useInView } from "framer-motion";

export default function ProjectDisp(props) {
  const viewRef = useRef();
  const isInView = useInView(viewRef);

  return (
    <figure className="projects_carousel_window" ref={viewRef}>
      <motion.div
        whileInView={{ x: 0 }}
        initial={{ x: -500 }}
        transition={{ ease: "easeOut" }}
        className="carousel_window_left"
      >
        <a target="_blank" rel="noreferrer" href={props.site}>
          <img src={props.image} alt={props.alt}></img>
        </a>
      </motion.div>
      <motion.div
        whileInView={{ x: 0 }}
        initial={{ x: 500 }}
        transition={{ ease: "easeOut" }}
        className="carousel_window_right"
      >
        <div className="carousel_window_right_innerTop">
          <h1>{props.title}</h1>
          <h3>{props.description}</h3>
          <p>{props.tools}</p>
        </div>
        <div className="carousel_window_right_innerBot">
          <a
            aria-label="Github"
            href={props.repo}
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon="fa-brands fa-github" />
          </a>
          <a id="boxLink2" target="_blank" rel="noreferrer" href={props.site}>
            <FontAwesomeIcon icon="fa-solid fa-right-to-bracket" />
          </a>
        </div>
      </motion.div>
    </figure>
  );
}
