import { MoveUpRight } from "lucide-react";
import Link from "next/link";
import React from "react";

const HeroInDevelopment = () => {
  return (
    <div className="h-full text-lg font-normal flex flex-col justify-between group-hover/bento:translate-x-2 transition duration-200 ">
      <div className="text-xl font-semibold">Connect | Social network for students</div>
      <div className="text-sm">Built a platform enabling students to collaborate, share resources, and thrive productively.</div>
      <div className="flex gap-1 flex-wrap">
          <div className="dark:bg-black-200 bg-black text-white text-[12px] px-2  rounded-sm">
            ReactJS
          </div>
          <div className="dark:bg-black-200 bg-black text-white text-[12px] px-2  rounded-sm">
            TypeScript
          </div>
          <div className="dark:bg-black-200 bg-black text-white text-[12px] px-2  rounded-sm">
            NodeJS
          </div>
          <div className="dark:bg-black-200 bg-black text-white text-[12px] px-2  rounded-sm">
            ExpressJS
          </div>
          <div className="dark:bg-black-200 bg-black text-white text-[12px] px-2  rounded-sm">
            PostgreSQL
          </div>
          
        </div>
      <div>
        <Link
          className="float-right border border-black dark:border-[#545DA1] dark:hover:bg-white dark:hover:text-black rounded-full p-2 hover:bg-black hover:text-white"
          href={"/project"}
        >
          <MoveUpRight />
        </Link>
      </div>
    </div>
  );
};

export default HeroInDevelopment;
