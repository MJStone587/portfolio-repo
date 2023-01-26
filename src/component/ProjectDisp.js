import { React, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { AnimatePresence, motion } from 'framer-motion';

export default function ProjectDisp(props) {
  const viewRef = useRef();

  return (
    <figure className="projects_carousel_window" ref={viewRef}>
      <AnimatePresence>
        <motion.div
          whileInView={{ x: 0, opacity: 1 }}
          initial={{ x: -100, opacity: 0 }}
          exit={{ x: -100, opacity: 0 }}
          transition={{ ease: 'easeOut' }}
          viewport={{ amount: 0, once: true }}
          className="carousel_window_left"
        >
          <a
            target="_blank"
            rel="noreferrer"
            aria-label="Website_image_link"
            id={props.id}
            href={props.site}
          >
            <img src={props.image} alt={props.alt}></img>
          </a>
        </motion.div>
      </AnimatePresence>
      <AnimatePresence>
        <motion.div
          whileInView={{ x: 0, opacity: 1 }}
          initial={{ x: 100, opacity: 0 }}
          exit={{ x: 100, opacity: 0 }}
          transition={{ ease: 'easeOut' }}
          viewport={{ amount: 0.5, once: true }}
          className="carousel_window_right"
        >
          <div className="carousel_window_right_innerTop">
            <p id="carousel_card_title">{props.title}</p>
            <p id="carousel_card_desc">{props.description}</p>
            <p id="carousel_card_tools">{props.tools}</p>
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
            <a
              aria-label="Website_link"
              id={props.id2}
              target="_blank"
              rel="noreferrer"
              href={props.site}
            >
              <FontAwesomeIcon icon="fa-solid fa-right-to-bracket" />
            </a>
          </div>
        </motion.div>
      </AnimatePresence>
    </figure>
  );
}
