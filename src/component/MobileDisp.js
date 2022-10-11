import React from "react";
import Home from "./Home";
import NavbarMobile from "./NavbarMobile.js";
import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";

export default function MobileDisp(props) {
  return (
    <main onClick={props.closeNav} className="mobileDisplayMain">
      {props.navToggle === true && <NavbarMobile />}
      <Home />
      <About />
      <Projects />
      <Contact />
    </main>
  );
}
