import React from "react";

export default function Navbtn(props) {
  return (
    <nav className="navbar">
      <div className="navbarLeft">
        <button className="btn btnHome" onClick={props.showHome}>
          Home
        </button>
        <button className="btn btnAbout" onClick={props.showAbout}>
          About
        </button>
      </div>

      <div className="navbarMid">
        <h2 id="navbarMidName">Mark Johnston</h2>
      </div>

      <div className="navbarRight">
        <button className="btn btnProjects" onClick={props.showProjects}>
          Projects
        </button>
        <button className="btn btnSocials" onClick={props.showSocials}>
          Socials
        </button>
      </div>
    </nav>
  );
}
