import React from "react";

export default function ProjectDisp(props) {
  return (
    <div className="projectDispBox">
      <h3>{props.title}</h3>
      <img src={props.img} alt="random"></img>
    </div>
  );
}
