import React from "react";
import space from "../images/space.jpg";
import mountainRange from "../images/mountainForeground.png";

export default function TeslaEffect() {
  return (
    <div className="parallaxContainer">
      <img src={space} alt="Space" className="background"></img>
      <img
        src={mountainRange}
        alt="Mountain Range"
        className="foreground"
      ></img>
      <h1 className="parallaxTitle">
        Together we can create and explore the Universe!
      </h1>
    </div>
  );
}
