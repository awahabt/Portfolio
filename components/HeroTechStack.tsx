import { cn } from "@/lib/utils";
import React from "react";

const HeroTechStack = () => {
  const leftLists = ["ReactJS", "NodeJS", "ExpressJS", "MongoDB"];
  const rightLists = ["NextJS", "TypeScript", "Tailwind", "Sanity"];
  return (
  
      <div
        className={cn(
          // remove p-4 rounded-3xl dark:bg-black dark:border-white/[0.2] bg-white  border border-transparent, add border border-white/[0.1] overflow-hidden relative
          "row-span-1 relative overflow-hidden border rounded-xl group/bento hover:shadow-xl h-full transition duration-200 shadow-input dark:shadow-none justify-between flex flex-col space-y-4",
          "lg:col-span-2 md:col-span-3 md:row-span-2"
        )}
      >
        <div
          className=" justify-center group-hover/bento:translate-x-2 transition duration-200 relative md:h-full min-h-40 flex flex-col px-5 p-5 lg:p-10"
          
        >
          <div className=" md:max-w-32 md:text-xs lg:text-base text-sm text-gray-300 z-10">
            My tech stack
          </div>
          {/* add text-3xl max-w-96 , remove text-neutral-600 dark:text-neutral-300*/}
          {/* remove mb-2 mt-2 */}
          <div
            className="text-lg lg:text-2xl max-w-20 sm:max-w-60  font-bold z-10"
          >
            I constantly try to improve
          </div>

          <div className="flex gap-1 lg:gap-5 w-fit absolute -right-3 lg:-right-2">
            {/* tech stack lists */}
            <div className="flex flex-col gap-3 md:gap-3 lg:gap-8">
              {leftLists.map((item, i) => (
                <span
                  key={i}
                  className=" lg:px-3 py-2 px-3 text-xs lg:text-base opacity-50 lg:opacity-100 rounded-lg text-center text-white dark:bg-black-200 bg-black "
                >
                  {item}
                </span>
              ))}
              <span className="lg:py-4 lg:px-3 py-4 px-3  rounded-lg text-center text-white dark:bg-black-200 bg-black"></span>
            </div>
            <div className="flex flex-col gap-3 md:gap-3 lg:gap-8">
              <span className="lg:py-4 lg:px-3 py-4 px-3  rounded-lg text-center text-white dark:bg-black-200 bg-black"></span>
              {rightLists.map((item, i) => (
                <span
                  key={i}
                  className="lg:px-3 py-2 px-3 text-xs lg:text-base opacity-50 lg:opacity-100 rounded-lg text-center text-white dark:bg-black-200 bg-black"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

  );
};

export default HeroTechStack;
