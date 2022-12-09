import "./style.css";
import React, { useState, useRef, useEffect } from "react";
import useWindowSize from "use-window-size-v2";
import Home from "./component/Home";
import Projects from "./component/Projects";
import Contact from "./component/Contact";
import AboutMe from "./component/AboutMe";
import logo from "./images/logoMJ5.webp";

function App() {
  const { width } = useWindowSize();
  const [navToggle, setNavToggle] = useState(false);
  const [showNav, setNavShow] = useState(true);
  const homeRef = useRef();
  const aboutRef = useRef();
  const projectsRef = useRef();
  const contactRef = useRef();
  let oldScrollY = 0;

  const navbarControl = () => {
    /*
       {width < 768 && (
        <FontAwesomeIcon onClick={triggerNavToggle} icon="fa-solid fa-bars" />
      )}
      {width < 768 && (
        <>
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
    */
    const currentScrollY = window.pageYOffset;
    if (currentScrollY > oldScrollY) {
      setNavShow(false);
    } else {
      setNavShow(true);
    }
    oldScrollY = window.scrollY;
  };

  useEffect(() => {
    window.addEventListener("scroll", navbarControl);
    return () => {
      window.removeEventListener("scroll", navbarControl);
    };
  }, []);

  function scrollToDiv(currentRef) {
    currentRef.current.scrollIntoView({ behavior: "smooth" });
  }
  /*
  const triggerNavToggle = () => {
    setNavToggle(!navToggle);
  };
  const turnOffNav = () => {
    setNavToggle(false);
  };
  */
  return (
    <>
      {width >= 768 && (
        <>
          <nav className={`navbar ${showNav && "nav_displayed"}`}>
            <div className="navbar_left">
              <div className="btn_container btn_home_container">
                <button
                  className="nav_btn btn_home"
                  onClick={() => scrollToDiv(homeRef)}
                >
                  Home
                </button>
              </div>
              <div className="btn_container btn_about_container">
                <button
                  className="nav_btn btn_about"
                  onClick={() => scrollToDiv(aboutRef)}
                >
                  About
                </button>
              </div>
              <div className="btn_container btn_projects_container">
                <button
                  className="nav_btn btn_projects"
                  onClick={() => scrollToDiv(projectsRef)}
                >
                  Projects
                </button>
              </div>
              <div className="btn_container btn_contact_container">
                <button
                  className="nav_btn btn_contact"
                  onClick={() => scrollToDiv(contactRef)}
                >
                  Contact
                </button>
              </div>
            </div>
            <div className="navbar_right">
              <img src={logo} alt="Logo" id="navbar_logo"></img>
            </div>
          </nav>
          <div className="desktop_overlay_container">
            <ul className="left_overlay_list">
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
                    className="overlay overlay_github"
                  >
                    <title>GitHub</title>
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                  </svg>
                </a>
              </li>
              <li>
                <a
                  aria-label="Linkedin  "
                  href="https://linkedin.com/in/MJStone587"
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
                    className="overlay overlay_github"
                  >
                    <title>LinkedIn</title>
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect x="2" y="9" width="4" height="12"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                </a>
              </li>
            </ul>
            <ul className="right_overlay_list">
              <li>
                <a
                  aria-label="Github"
                  href="https://github.com/MJStone587"
                  target="_blank"
                  rel="noreferrer"
                  className="overlay overlay_email"
                >
                  MJdev587@yahoo.com
                </a>
              </li>
            </ul>
          </div>
          <main className="desktop_content">
            <Home ref={homeRef} />
            <AboutMe ref={aboutRef} />
            <Projects ref={projectsRef} />
            <Contact ref={contactRef} />
          </main>
        </>
      )}
      {width < 768 && (
        <>
          <nav className={`navbar ${showNav && "nav_displayed"}`}>
            <div className="navbar_left">
              <div className="btn_container btn_home_container">
                <button
                  className="nav_btn btn_home"
                  onClick={() => scrollToDiv(homeRef)}
                >
                  Home
                </button>
              </div>
              <div className="btn_container btn_about_container">
                <button
                  className="nav_btn btn_about"
                  onClick={() => scrollToDiv(aboutRef)}
                >
                  About
                </button>
              </div>
              <div className="btn_container btn_projects_container">
                <button
                  className="nav_btn btnProjects"
                  onClick={() => scrollToDiv(projectsRef)}
                >
                  Projects
                </button>
              </div>
              <div className="btn_container btn_contact_container">
                <button
                  className="nav_btn btn_contact"
                  onClick={() => scrollToDiv(contactRef)}
                >
                  Contact
                </button>
              </div>
            </div>
          </nav>
          <main className="mobile_main_container">
            <Home ref={homeRef} />
            <AboutMe ref={aboutRef} />
            <Projects ref={projectsRef} />
            <Contact ref={contactRef} />
          </main>
        </>
      )}
    </>
  );
}

export default App;
