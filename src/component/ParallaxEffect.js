import React from "react";
import farPlanets from "../images/parallax-space-far-planets.png";
import bigPlanet from "../images/parallax-space-big-planet.png";

export default function ParallaxEffect() {
  return (
    <div className="parallaxContainer">
      <img src={bigPlanet} alt="Big Planet" className="foreground"></img>
      <img src={farPlanets} alt="Far Planet" className="midground"></img>
      <h1 className="parallaxTitle">WORDS GO HERE!</h1>
      <div className="parallaxRefDiv"></div>
    </div>
  );
}
