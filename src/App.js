import "./style.css";
import React, { useState } from "react";
import Home from "./component/Home";
import Navbar from "./component/Navbar";
import Skills from "./component/Skills";
import Projects from "./component/Projects";
import Socials from "./component/Socials";

function App() {
  const [displayPage, setPage] = useState("home");
  return (
    <>
      <Navbar
        showHome={() => setPage("home")}
        showSkills={() => setPage("skills")}
        showProjects={() => setPage("projects")}
        showSocials={() => setPage("socials")}
      />
      {displayPage === "home" && <Home showHome={() => setPage("home")} />}
      {displayPage === "skills" && <Skills />}
      {displayPage === "projects" && <Projects />}
      {displayPage === "socials" && <Socials />}
    </>
  );
}

export default App;
