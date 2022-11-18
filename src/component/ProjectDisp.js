import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function ProjectDisp(props) {
  return (
    <figure className="projects_carousel_window">
      <div className="carousel_window_left">
        <a target="_blank" rel="noreferrer" href={props.site}>
          <img src={props.image} alt={props.alt}></img>
        </a>
      </div>
      <div className="carousel_window_right">
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
      </div>
    </figure>
  );
}
