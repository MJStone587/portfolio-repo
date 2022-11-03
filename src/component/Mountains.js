import React from "react";
import layer1 from "../images/1.png";
import layer2 from "../images/2.png";
import layer3 from "../images/3.png";
import layer4 from "../images/4.png";
import layer5 from "../images/5.png";
import layer6 from "../images/6.png";

export default function () {
  return (
    <div className="mountainsContainer">
      <img src={layer1} alt="Layer 1" className="mtLayer1"></img>
      <img src={layer2} alt="Layer 2" className="mtLayer2"></img>
      <img src={layer3} alt="Layer 3" className="mtLayer3"></img>
      <img src={layer4} alt="Layer 4" className="mtLayer4"></img>
      <img src={layer5} alt="Layer 5" className="mtLayer5"></img>
      <img src={layer6} alt="Layer 6" className="mtLayer6"></img>
    </div>
  );
}
