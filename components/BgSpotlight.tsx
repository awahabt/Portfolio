import React from "react";
import { Spotlight } from "./ui/Spotlight";

const BgSpotlight = () => {
  return (
    <div>
      <Spotlight
        className="lg:top-28 lg:-left-24 h-[50vh] w-[60vw] sm:top-10 sm:-left-20 md:top-20 md:-left-20 top-14 -left-10"
        fill="white"
      />
      <Spotlight
        className="lg:-top-40 lg:left-[300px] h-[80vh] w-[80vw] sm:-top-28 sm:left-28 md:-top-40 md:left-20 -top-28 left-14"
        fill="white"
      />
      <Spotlight
        className="lg:top-0 lg:left-20 h-[60vh] w-[50vw] sm:top-4 sm:left-20 md:top-20 md:left-40  top-10 left-20"
        fill="skyblue"
      />
    </div>
  );
};

export default BgSpotlight;
