import React from "react";
import { useInView } from "react-intersection-observer";

export default function NeonCity() {
  const { ref: myRef, inView } = useInView();

  return (
    <div
      className={
        inView
          ? "neonCityContainer animate__animated animate__fadeIn"
          : "neonCityContainer animate__animated animate__fadeOut"
      }
      ref={myRef}
    >
      <div
        className={
          inView
            ? "neonSigns sign1 animate__animated animate__fadeIn animate__delay-s"
            : "neonSigns sign1 animate__animated animate__fadeOut"
        }
      >
        <h1>S</h1>
        <h1>I</h1>
        <h1>G</h1>
        <h1>N</h1>
      </div>
      <div className="neonSigns sign2"></div>
      <div className="neonSigns sign3"></div>
    </div>
  );
}
