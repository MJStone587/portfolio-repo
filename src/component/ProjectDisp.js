import React from "react";

export default function ProjectDisp(props) {
  return (
    <figure className={props.name}>
      <h2>{props.title}</h2>
      <figcaption>{props.description}</figcaption>
      <p>{props.tools}</p>
      <a id="boxLink1" target="_blank" rel="noreferrer" href={props.repo}>
        Repo
      </a>
      <a id="boxLink2" target="_blank" rel="noreferrer" href={props.site}>
        App
      </a>
    </figure>
  );
}
