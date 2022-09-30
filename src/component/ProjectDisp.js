import React from "react";

export default function ProjectDisp(props) {
  /*<img src={props.image} alt={props.alt}></img> */
  /*let bgImage = {
    backgroundImage: `url(${props.image})`,
  };
  let bgFilter = {
    filter: "grayscale(80%)",
  };
  */

  return (
    <figure className="projectDispBox">
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
