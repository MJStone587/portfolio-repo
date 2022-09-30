import React from "react";
import ProjectDisp from "./ProjectDisp.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Projects() {
  return (
    <div className="projectDispContainer">
      <div className="projectExplorerWindow">
        <div className="projectExplorerNav">
          <button>ArrowLeft</button>
          <button>ArrowRight</button>
          <div className="navigationText">
            <FontAwesomeIcon icon="fa-light fa-house" />
          </div>
        </div>
        <div className="projectList">
          <ul>
            <li>
              <FontAwesomeIcon icon="fa-regular fa-file" />
              <button>App Name</button>
            </li>
            <li>
              <FontAwesomeIcon icon="fa-regular fa-file" />
              <button>App Name</button>
            </li>
            <li>
              <FontAwesomeIcon icon="fa-regular fa-file" />
              <button>App Name</button>
            </li>
            <li>
              <FontAwesomeIcon icon="fa-regular fa-file" />
              <button>App Name</button>
            </li>
          </ul>
        </div>
        <div className="viewingWindow">
          <ProjectDisp
            title="Pokemon Search"
            alt="Pokemon App"
            description="Search and review pokemon data"
            tools="CSS, Javascript, Html"
            repo="https://github.com/MJStone587/Pokemon"
            site="https://mjstone587.github.io/Pokemon/"
          />
          <ProjectDisp
            title="Financial Organizer"
            alt="Financial Organizer"
            tools="Javascript, Html, CSS, MongoDB, ExpressJs, NodeJS, CSS"
            repo="https://github.com/MJStone587/Framework"
            site="https://hidden-peak-86387.herokuapp.com/catalog"
          />
          <ProjectDisp
            title=""
            alt=""
            tools="Javascript, Html, CSS"
            repo=""
            site=""
          />
          <ProjectDisp
            title=""
            alt=""
            tools="Javascript, Html, CSS"
            repo=""
            site=""
          />
          <ProjectDisp
            title=""
            alt=""
            tools="Javascript, Html, CSS"
            repo=""
            site=""
          />
        </div>
      </div>
    </div>
  );
}
