import React from "react";
import ProjectDisp from "./ProjectDisp.js";
import codeImg from "../images/codeImg2.jpg";

export default function Projects() {
  return (
    <div className="projectDispContainer">
      <ProjectDisp
        title="Pokemon Search"
        image={codeImg}
        alt="Pokemon App"
        tools="CSS, Javascript, Html"
        repo="https://github.com/MJStone587/Pokemon"
        site="https://mjstone587.github.io/Pokemon/"
      />
      <ProjectDisp
        title="Pig Game"
        alt="Pig Game App"
        image=""
        tools="Javascript, Html, CSS, MongoDB, ExpressJs, NodeJS"
        repo="https://github.com/MJStone587/Pig-Game"
        site="https://mjstone587.github.io/Pig-Game/"
      />
      <ProjectDisp
        title=""
        alt=""
        image=""
        tools="Javascript, Html, CSS"
        repo=""
        site=""
      />
      <ProjectDisp
        title=""
        alt=""
        image=""
        tools="Javascript, Html, CSS"
        repo=""
        site=""
      />
      <ProjectDisp
        title=""
        alt=""
        image=""
        tools="Javascript, Html, CSS"
        repo=""
        site=""
      />
    </div>
  );
}
