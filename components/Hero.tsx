import React from "react";
import ThemeSwitcher from "./ThemeSwitcher";
import Link from "next/link";
import { MoveUpRight } from "lucide-react";

const Hero: React.FC = () => {
  return (
    <div className="relative min-h-screen w-screen bg-white text-black dark:bg-black-100 dark:text-white bg-dot-black/[0.2] dark:bg-dot-white/[0.15] montserrat">
      {/* Background with conditional radial gradient */}
      {/* <div
        className="absolute top-0 z-[-2] h-full w-full bg-white dark:bg-black-100
        bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]
        dark:bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(0,0,0,0.3),rgba(0,0,0,0))]"
      /> */}
      <div className="absolute top-5 right-3 min-[400px]:right-10 z-[20] min-[525px]:hidden">
        <ThemeSwitcher />
      </div>
      {/* Hero Content */}
      <div className="relative z-10 grid min-h-screen gap-4 px-3 min-[400px]:px-10 pb-10 pt-20 ">
        {/* Top Section */}
        <div className="grid gap-4 min-[1150px]:grid-cols-[2fr_3fr_1fr]">
          {/* Name Section */}
          <div className="text-9xl w-full p-5 font-bold rounded-xl">
            <p className="max-[600px]:text-5xl  min-[1150px]:text-start text-center">
              Abdul Wahab Tahir
            </p>
          </div>

          {/* Experience Section */}
          <div className="border border-black dark:border-[#545DA1] p-10 text-4xl font-semibold rounded-xl">
            <Link href={"/experience"}>Experience</Link>
            
          </div>

          {/* Contact and Theme Switcher Section */}
          <div className="flex flex-col gap-4">
            <div className="flex w-full gap-x-4 h-20">
              {/* Contact Link */}
              <Link
                href="/contact"
                className="w-full col-span-3 flex flex-1 items-center justify-center rounded-xl border border-black dark:border-[#545DA1] font-medium"
              >
                <div className="flex items-center gap-2 py-2">
                  <span className="text-2xl font-bold">Contact</span>
                  <div className=" dark:hover:bg-white hover:bg-black hover:text-white dark:hover:text-black border border-black dark:border-[#545DA1] rounded-full px-1.5 py-1.5 dark:hover:border-transparent">
                    <MoveUpRight />
                  </div>
                </div>
              </Link>

              {/* Theme Switcher */}
              <div className="hidden min-[525px]:flex   ">
                <ThemeSwitcher />
              </div>
            </div>

            {/* Development Section */}
            <div className="h-full p-10 text-2xl border border-black dark:border-[#545DA1] rounded-xl">
              In development
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="grid gap-4 md:grid-cols-3">
          <div className="p-10 text-4xl font-semibold border border-black dark:border-[#545DA1] rounded-xl">
            About Us
          </div>
          <div className="p-10 text-4xl font-semibold border border-black dark:border-[#545DA1] rounded-xl">
            <Link href="/project">Projects</Link>
          </div>
          <div className="p-10 text-4xl font-semibold border border-black dark:border-[#545DA1] rounded-xl">
            Tech Stack
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
