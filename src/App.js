import "./style.css";
import React, { useState, useRef } from "react";
import useWindowSize from "use-window-size-v2";
import Home from "./component/Home";
import About from "./component/About";
import Projects from "./component/Projects";
import Contact from "./component/Contact";
import SnowWorld from "./component/SnowWorld";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function App() {
  const { width } = useWindowSize();
  const [navToggle, setNavToggle] = useState(false);
  const homeRef = useRef();
  const aboutRef = useRef();
  const projectsRef = useRef();
  const contactRef = useRef();

  function scrollToDiv(currentRef) {
    currentRef.current.scrollIntoView({ behavior: "smooth" });
  }

  const triggerNavToggle = () => {
    setNavToggle(!navToggle);
  };
  const turnOffNav = () => {
    setNavToggle(false);
  };
  // {navToggle === true && width < 820 && <NavbarMobile />}
  return (
    <>
      {width >= 768 && (
        <>
          <nav className="navbar">
            <div className="navbarLeft">
              <button
                className="btn btnHome"
                onClick={() => scrollToDiv(homeRef)}
              >
                Home
              </button>
              <button
                className="btn btnAbout"
                onClick={() => scrollToDiv(aboutRef)}
              >
                About
              </button>
            </div>

            <div className="navbarMid">
              <h2 id="navbarMidName">Mark Johnston</h2>
            </div>

            <div className="navbarRight">
              <button
                className="btn btnProjects"
                onClick={() => scrollToDiv(projectsRef)}
              >
                Projects
              </button>
              <button
                className="btn btnContact"
                onClick={() => scrollToDiv(contactRef)}
              >
                Contact
              </button>
            </div>
          </nav>
          <main className="desktopMainContainer">
            <Home ref={homeRef} />
            <SnowWorld />
            <About ref={aboutRef} />
            <Projects ref={projectsRef} />
            <Contact ref={contactRef} />
          </main>
        </>
      )}
      {width < 768 && (
        <FontAwesomeIcon onClick={triggerNavToggle} icon="fa-solid fa-bars" />
      )}
      {width < 768 && (
        <main onClick={turnOffNav} className="mobileMainContainer">
          {navToggle === true && (
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
      )}
    </>
  );
}

export default App;
