import React from "react";

export default function ProjectDisp(props) {
  return (
    <figure className="projects_carousel_window">
      <div className="carousel_window_left">
        <img src={props.image} alt={props.alt}></img>
      </div>
      <div className="carousel_window_right">
        <div className="carousel_window_right_innerTop">
          <h2>{props.title}</h2>
          <figcaption>{props.description}</figcaption>
          <p>{props.tools}</p>
        </div>
        <div className="carousel_window_right_innerBot">
          <a id="boxLink1" target="_blank" rel="noreferrer" href={props.repo}>
            Repo
          </a>
          <a id="boxLink2" target="_blank" rel="noreferrer" href={props.site}>
            App
          </a>
        </div>
      </div>
    </figure>
  );
}
