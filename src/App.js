import "./style.css";
import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./component/Home";
import Navbar from "./component/Navbar";
import About from "./component/About";
import Projects from "./component/Projects";
import Socials from "./component/Socials";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/socials" element={<Socials />} />
      </Routes>
    </>
  );
}

export default App;
