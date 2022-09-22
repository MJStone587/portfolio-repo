import React from "react";
import ProjectDisp from "./ProjectDisp.js";
import codeImg from "../images/codeImg2.jpg";

export default function Projects() {
  return (
    <div>
      <ProjectDisp
        title="Project 1"
        image="Image Display"
        tools="CSS, Javascript, Html, CSS, React, MongoDB, ExpressJs, NodeJS"
      />
      <ProjectDisp
        title="Project 2"
        image={codeImg}
        tools="Javascript, Html, CSS, EJS, MongoDB, ExpressJs, NodeJS"
      />
    </div>
  );
}
