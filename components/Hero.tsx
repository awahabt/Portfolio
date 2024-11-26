
import React from "react";



const Hero = () => {
  return (
    <div className="relative h-screen w-full dark:bg-black-100 bg-white dark:bg-dot-white/[0.15] bg-dot-black/[0.2]">
      {/* Background with radial gradient */}
      <div className="absolute inset-0 pointer-events-none dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />

      {/* Hero Content */}
      <div className="relative z-10 py-10 grid h-full gap-4">
        {/* Top Section */}
        <div className="grid  gap-4 md:grid-cols-[2fr_3fr_1fr]">
          <div className="bor text-8xl font-bold">Abdul Wahab Tahir</div>
          <div className="bor text-4xl font-semibold">Experience</div>
          <div className="bor flex flex-col gap-4">
            
            <div className="h-[20%] bor p-4">
              <div className="font-medium">Contact</div>
              <div className="text-sm text-gray-600 dark:text-gray-300">Theme</div>
            </div>
          
          </div>
        </div>

        {/* Bottom Section */}
        <div className="grid gap-4 md:grid-cols-3">
          <div className="bor p-4 text-4xl font-semibold">About Us</div>
          <div className="bor p-4 text-4xl font-semibold">Projects</div>
          <div className="bor p-4 text-4xl font-semibold">Tech Stack</div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
