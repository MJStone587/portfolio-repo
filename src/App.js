import "./style.css";
import React, { useState, useRef } from "react";
import useWindowSize from "use-window-size-v2";
import Home from "./component/Home";
import ParallaxEffect from "./component/ParallaxEffect";
import Projects from "./component/Projects";
import Contact from "./component/Contact";
import SkillsPage from "./component/SkillsPage";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import NeonCity from "./component/NeonCity";
import spaceShip from "./images/spaceship24.png";
import { motion } from "framer-motion";

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
            <motion.img
              src={spaceShip}
              alt="Space Ship"
              className="spaceShip"
              animate={{
                x: [100, 200, 400, 500, 600],
                y: [0, 200, 300, 500, 700, 900, 1200, 1500, 2000],
                rotate: [125, 140, 130, 125, 120],
                opacity: 100,
                scale: 1.5,
              }}
              transition={{ delay: 5, duration: 6 }}
              initial={{ opacity: 0, rotate: 120, x: 0 }}
            ></motion.img>
            <Home ref={homeRef} />
            <ParallaxEffect />
            <div className="desktopEmptyDiv"></div>
            <NeonCity />
            <SkillsPage />
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
          <Projects ref={projectsRef} />
          <Contact ref={contactRef} />
        </main>
      )}
    </>
  );
}

export default App;
