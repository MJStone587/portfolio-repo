import "./style.css";
import React, { useState } from "react";
import Home from "./component/Home";
import Navbar from "./component/Navbar";
import About from "./component/About";
import Projects from "./component/Projects";
import Socials from "./component/Socials";

function App() {
  const [displayPage, setPage] = useState("home");

  return (
    <>
      <Navbar
        showHome={() => setPage("home")}
        showAbout={() => setPage("about")}
        showProjects={() => setPage("projects")}
        showSocials={() => setPage("socials")}
      />
      {displayPage === "home" && <Home showAbout={() => setPage("about")} />}
      {displayPage === "about" && <About />}
      {displayPage === "projects" && <Projects />}
      {displayPage === "socials" && <Socials />}
    </>
  );
}

export default App;
