import React from "react";

export default function ProjectDisp(props) {
  /*<img src={props.image} alt={props.alt}></img> */
  return (
    <div className="projectDispBox">
      <img src={props.image} alt={props.alt}></img>
      <h3>{props.title}</h3>
      <p>{props.description}</p>
      <p>{props.tools}</p>
      <a id="boxLink1" href={props.repo}>
        Repo
      </a>
      <a id="boxLink2" href={props.site}>
        App
      </a>
    </div>
  );
}
