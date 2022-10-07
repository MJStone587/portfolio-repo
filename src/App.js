import "./style.css";
import React, { useState } from "react";
import useWindowSize from "use-window-size-v2";
import { Routes, Route } from "react-router-dom";
import Home from "./component/Home";
import Navbar from "./component/Navbar";
import NavbarMobile from "./component/NavbarMobile.js";
import About from "./component/About";
import Projects from "./component/Projects";
import Contact from "./component/Contact";
import MobileDisp from "./component/MobileDisp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function App() {
  const { width } = useWindowSize();
  const [navToggle, setNavToggle] = useState(false);

  const triggerNavToggle = () => {
    setNavToggle(!navToggle);
  };
  const turnOffNav = () => {
    setNavToggle(false);
  };
  return (
    <>
      {width <= 888 && (
        <FontAwesomeIcon onClick={triggerNavToggle} icon="fa-solid fa-bars" />
      )}
      {navToggle === true && width <= 988 && <NavbarMobile />}
      {width > 888 && <Navbar navOff={turnOffNav} />}
      {width > 888 && (
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      )}
      {width <= 888 && (
        <div className="mobileDisp">
          <MobileDisp closeNav={turnOffNav} />
        </div>
      )}
    </>
  );
}

export default App;
