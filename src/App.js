import "./style.css";
import React, { useState } from "react";
import useWindowSize from "use-window-size-v2";
import { Routes, Route } from "react-router-dom";
import Home from "./component/Home";
import Navbar from "./component/Navbar";
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
  // {navToggle === true && width < 820 && <NavbarMobile />}
  return (
    <>
      {width < 820 && (
        <FontAwesomeIcon onClick={triggerNavToggle} icon="fa-solid fa-bars" />
      )}
      {width >= 820 && <Navbar navOff={turnOffNav} />}
      {width >= 820 && (
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      )}
      {width < 820 && (
        <MobileDisp closeNav={turnOffNav} navToggle={navToggle} />
      )}
    </>
  );
}

export default App;
