import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function About() {
  return (
    <body className="aboutBody">
      <h1>About Me</h1>
      <p>
        Working multiple jobs in management, I have a lot of experiences
        coordinating with teams and people. I have experience with...
      </p>
      <FontAwesomeIcon icon="fa-brands fa-html5" />
      <FontAwesomeIcon icon="fa-brands fa-css3-alt" />
      <FontAwesomeIcon icon="fa-brands fa-js" />
      <FontAwesomeIcon icon="fa-brands fa-node" />
    </body>
  );
}
