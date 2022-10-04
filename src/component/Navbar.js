import React from "react";
import { Link } from "react-router-dom";

export default function Navbtn() {
  return (
    <nav className="navbar">
      <div className="navbarLeft">
        <Link className="btn btnHome" to="/">
          Home
        </Link>
        <Link className="btn btnAbout" to="/about">
          About
        </Link>
      </div>

      <div className="navbarMid">
        <h2 id="navbarMidName">Mark Johnston</h2>
      </div>

      <div className="navbarRight">
        <Link className="btn btnProjects" to="/projects">
          Projects
        </Link>
        <Link className="btn btnContact" to="/contact">
          Contact
        </Link>
      </div>
    </nav>
  );
}
