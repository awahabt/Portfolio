import { MoveUpRight } from "lucide-react";
import Link from "next/link";
import React from "react";

const HeroInDevelopment = () => {
  return (
    <div className="h-full text-lg font-normal flex flex-col justify-between ">
      <div className="text-xl font-semibold">Connect | Social network for students</div>
      <div className="text-lg">Developed a platform that allows students to collaborate effectively,
      share resources, and create a productive environment.</div>
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
