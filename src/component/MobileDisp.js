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

  function scrollToDiv(currentRef) {
    currentRef.current.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <main onClick={props.closeNav} className="mobileDisplayMain">
      {props.navToggle === true && (
        <ul className="navbarMobile">
          <button
            className="btnMobile homeMobile"
            onClick={() => scrollToDiv(homeRef)}
          >
            Home
          </button>
          <button
            className="btnMobile aboutMobile"
            onClick={() => scrollToDiv(aboutRef)}
          >
            About
          </button>
          <button
            className="btnMobile projectsMobile"
            onClick={() => scrollToDiv(projectsRef)}
          >
            Projects
          </button>
          <button
            className="btnMobile contactMobile"
            onClick={() => scrollToDiv(contactRef)}
          >
            Contact
          </button>
        </ul>
      )}
      <Home ref={homeRef} />
      <About ref={aboutRef} />
      <Projects ref={projectsRef} />
      <Contact ref={contactRef} />
    </main>
  );
}
