import React from "react";

export default function Navbtn(props) {
  return (
    <nav className="navbar">
      <div className="navbarLeft">
        <button className="btn btnHome" onClick={props.showHome}>
          Home
        </button>
        <button className="btn btnSkills" onClick={props.showSkills}>
          Skills
        </button>
      </div>

      <div className="navbarMid">
        <h2 id="navbarMidName">Mark Johnston</h2>
      </div>

      <div className="navbarRight">
        <button className="btn btnGroup2" onClick={props.showProjects}>
          Projects
        </button>
        <button className="btn btnGroup2" onClick={props.showSocials}>
          Socials
        </button>
      </div>
    </nav>
  );
}
