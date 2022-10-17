import React, { useRef } from "react";
import Home from "./Home";
import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";

export default function MobileDisp(props) {
  const homeRef = useRef();
  const aboutRef = useRef();
  const projectsRef = useRef();
  const contactRef = useRef();

  function scrollToDiv() {
    homeRef.current.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <main onClick={props.closeNav} className="mobileDisplayMain">
      {props.navToggle === true && (
        <ul className="navbarMobile">
          <button className="btnMobile homeMobile" onClick={scrollToDiv}>
            Home
          </button>
          <button className="btnMobile aboutMobile">About</button>
          <button className="btnMobile projectsMobile">Projects</button>
          <button className="btnMobile contactMobile">Contact</button>
        </ul>
      )}
      <Home />
      <About />
      <Projects />
      <Contact />
    </main>
  );
}
