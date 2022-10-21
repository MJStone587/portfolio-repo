import React from "react";
import Snowfall from "react-snowfall";
import { useInView } from "react-intersection-observer";

export default function SnowWorld() {
  const { ref: myRef, inView } = useInView();
  return (
    <div
      className={
        inView ? "snowPageContainer slowFadeIn" : "snowPageContainer faded"
      }
    >
      <div className="snowPageBlizzardEffect" ref={myRef}>
        <Snowfall
          snowflakeCount={600}
          speed={[0.5, 10]}
          wind={[-0.5, 10]}
          radius={[0.5, 4.5]}
          style={{
            position: "absolute",
            top: "110vh",
            width: "100vw",
            height: "110vh",
          }}
        />
      </div>
    </div>
  );
}
