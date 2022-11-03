import "./style.css";
import React, { useState, useRef } from "react";
import useWindowSize from "use-window-size-v2";
import Home from "./component/Home";
import ParallaxEffect from "./component/ParallaxEffect";
import Projects from "./component/Projects";
import Contact from "./component/Contact";
import SkillsPage from "./component/SkillsPage";
import Campground from "./component/Campground";
import Mountains from "./component/Mountains";
import NeonCity from "./component/NeonCity";
import spaceShip from "./images/spaceship24.png";
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
          <Home ref={homeRef} />
          <SkillsPage />
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
          <Projects ref={projectsRef} />
          <Contact ref={contactRef} />
        </main>
      )}
    </>
  );
}

export default App;
