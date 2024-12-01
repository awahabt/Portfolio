import { MoveUpRight } from "lucide-react";
import Link from "next/link";
import React from "react";

const HeroProjects = () => {
  return (
    <div className="h-full text-lg font-normal flex flex-col justify-between gap-4 group-hover/bento:translate-x-2 transition duration-200">
      <div>Explore my portfolio and projects in detail by clicking here.</div>
      <div><Link  className="float-right border border-black dark:border-[#545DA1] dark:hover:bg-white dark:hover:text-black rounded-full p-3 hover:bg-black hover:text-white" href={"/project"}><MoveUpRight/></Link></div>
    </div>
  );
};

export default HeroProjects;
