import React from "react";
import farPlanets from "../images/parallax-space-far-planets.png";
import bigPlanet from "../images/parallax-space-big-planet.png";
import ringPlanet from "../images/parallax-space-ring-planet.png";

export default function ParallaxEffect() {
  return (
    <div className="parallaxContainer">
      <img src={bigPlanet} alt="Big Planet" className="foreground"></img>
      <img src={ringPlanet} alt="Ring Planet" className="background"></img>
      <img src={farPlanets} alt="Far Planet" className="midground"></img>
      <h1 className="parallaxTitle">WORDS GO HERE!</h1>
      <div className="parallaxRefDiv"></div>
    </div>
  );
}
