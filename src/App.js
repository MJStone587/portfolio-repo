import "./style.css";
import React, { useState, useRef } from "react";
import useWindowSize from "use-window-size-v2";
import Home from "./component/Home";
import Projects from "./component/Projects";
import Contact from "./component/Contact";
import AboutMe from "./component/AboutMe";
import logo from "./images/logoMJ5.png";
import { motion } from "framer-motion";
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
  /* <Home ref={homeRef} />
            <ParallaxEffect />
            <div className="desktopEmptyDiv"></div>
            <NeonCity />
            <Mountains />
            <Projects ref={projectsRef} />
            <Contact ref={contactRef} />\
          <main className="desktopMainContainer">
</main>
*/
  return (
    <>
      {width >= 768 && (
        <>
          <nav className="navbar">
            <div className="navbarLeft">
              <div className="btnHome_container">
                <button
                  className="navBtn btnHome"
                  onClick={() => scrollToDiv(homeRef)}
                >
                  Home
                </button>
              </div>
              <div className="btnAbout_container">
                <button
                  className="navBtn btnAbout"
                  onClick={() => scrollToDiv(aboutRef)}
                >
                  About
                </button>
              </div>
              <div className="btnProjects_container">
                <button
                  className="navBtn btnProjects"
                  onClick={() => scrollToDiv(projectsRef)}
                >
                  Projects
                </button>
              </div>
              <div className="btnContact_container">
                <button
                  className="navBtn btnContact"
                  onClick={() => scrollToDiv(contactRef)}
                >
                  Contact
                </button>
              </div>
            </div>

            <div className="navbarRight">
              <img src={logo} alt="Logo" id="navbarLogo"></img>
            </div>
          </nav>
          <div className="desktopOverlay_container">
            <ul className="left_overlayList">
              <li>
                <a
                  aria-label="Github"
                  href="https://github.com/MJStone587"
                  target="_blank"
                  rel="noreferrer"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    role="img"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    className="overlay overlay-github"
                  >
                    <title>GitHub</title>
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                  </svg>
                </a>
              </li>
              <li>
                <a
                  aria-label="Linkedin  "
                  href="https://linkedin.com  /in/MJStone587"
                  target="_blank"
                  rel="noreferrer"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    role="img"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    inecap="round"
                    strokeLinejoin="round"
                    className="overlay overlay-github"
                  >
                    <title>LinkedIn</title>
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect x="2" y="9" width="4" height="12"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                </a>
              </li>
            </ul>
          </div>
          <main className="desktopContent">
            <Home ref={homeRef} />
            <AboutMe />
            <Projects />
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
          <AboutMe ref={aboutRef} />
        </main>
      )}
    </>
  );
}

export default App;
