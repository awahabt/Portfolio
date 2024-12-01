"use client";

import React, { useEffect, useState } from "react";
import { Spotlight } from "./ui/Spotlight";

const BgSpotlight = () => {
  const [positions, setPositions] = useState([
    { x: 0, y: 0 }, // First spotlight
    { x: 0, y: 0 }, // Second spotlight
    { x: 0, y: 0 }, // Third spotlight
  ]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX: mouseX, clientY: mouseY } = e;

      setPositions([
        { x: mouseX / 20, y: mouseY / 20 },
        { x: mouseX / 15, y: mouseY / 15 },
        { x: mouseX / 10, y: mouseY / 10 },
      ]);
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  useEffect(() => {
    console.log("Positions updated:", positions);
  }, [positions]);

  return (
    <div className="relative">
      <Spotlight
        className=" lg:top-28 lg:-left-24 h-[50vh] w-[30vw] sm:top-10 sm:-left-20 md:top-20 md:-left-20 top-14 -left-10 transition-transform duration-300 ease-out"
        fill="red"
        style={{
          transform: `translate(${positions[0].x}px, ${positions[0].y}px)`,
        }}
      />
      <Spotlight
        className=" lg:-top-40 lg:left-[300px] h-[80vh] w-[80vw] sm:-top-28 sm:left-28 md:-top-40 md:left-20 -top-28 left-14 transition-transform duration-300 ease-out"
        fill="black"
        style={{
          transform: `translate(${positions[1].x}px, ${positions[1].y}px)`,
        }}
      />
      <Spotlight
        className=" lg:top-0 lg:left-20 h-[60vh] w-[50vw] sm:top-4 sm:left-20 md:top-20 md:left-40 top-10 left-20 transition-transform duration-300 ease-out"
        fill="purple"
        style={{
          transform: `translate(${positions[2].x}px, ${positions[2].y}px)`,
        }}
      />
    </div>
  );
};

export default BgSpotlight;
