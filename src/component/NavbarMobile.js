import React from "react";
import { Link } from "react-router-dom";

export default function NavbarMobile() {
  return (
    <ul className="navbarMobile">
      <Link className="btnMobile homeMobile" to="/">
        Home
      </Link>
      <Link className="btnMobile aboutMobile" to="/about">
        About
      </Link>
      <Link className="btnMobile projectsMobile" to="/projects">
        Projects
      </Link>
      <Link className="btnMobile contactMobile" to="/contact">
        Contact
      </Link>
    </ul>
  );
}
