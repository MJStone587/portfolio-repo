import React from "react";
import { Link } from "react-router-dom";

export default function NavbarMobile(props) {
  return (
    <ul className="navbarMobile" useOnClickOutside={props.turnOffNav}>
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
