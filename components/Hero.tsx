import React from "react";
import ThemeSwitcher from "./ThemeSwitcher";
import Link from "next/link";
import { MoveUpRight } from "lucide-react";
import HeroExperience from "./HeroExperience";
import HeroAbout from "./HeroAbout";
import HeroProjects from "./HeroProjects";
import HeroTechStack from "./HeroTechStack";
import HeroInDevelopment from "./HeroInDevelopment";

const Hero: React.FC = () => {
  return (
    <div className="relative min-h-screen w-screen bg-white text-black dark:bg-black-100 dark:text-white bg-dot-black/[0.2] dark:bg-dot-white/[0.15] montserrat">
      {/* Background with conditional radial gradient */}
      
      <div className="absolute top-5 right-3 min-[400px]:right-10 z-[20] min-[525px]:hidden">
        <ThemeSwitcher value={""} />
      </div>
      {/* Hero Content */}
      <div className="relative z-10 grid min-h-screen gap-4 px-3 min-[400px]:px-10 pb-10 pt-20 ">
        {/* Top Section */}
        <div className="grid gap-4  min-[1600px]:grid-cols-[2fr_3fr_1fr]">
          {/* Name Section */}
          <div className="text-9xl w-full p-5 font-bold rounded-xl">
            <p className="max-[600px]:text-5xl  min-[1150px]:text-start text-center">
              Abdul Wahab Tahir
            </p>
          </div>

          {/* Experience Section */}
          <div className="border border-black dark:border-[#545DA1] p-10 text-4xl font-semibold rounded-xl flex flex-col gap-4 col-span-1 min-[1200px]:col-span-1 group/bento transition duration-200">
            <div className="flex justify-between items-center">
              <Link
                href={"/experience"}
                className="hover:underline underline-offset-4"
              >
                Experience
              </Link>
              <div><Link  className="float-right border border-black dark:border-[#545DA1] dark:hover:bg-white dark:hover:text-black rounded-full p-3 hover:bg-black hover:text-white" href={"/experience"}><MoveUpRight/></Link></div>
            </div>
            <hr />
            <HeroExperience />
          </div>

          {/* Contact and Theme Switcher Section */}
          <div className="flex flex-col gap-4">
            <div className="flex w-full gap-x-4 h-20 ">
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
                <ThemeSwitcher value={""} />
              </div>
            </div>

            {/* Development Section */}
            <div className="h-full gap-4 flex flex-col min-w-[300px] p-10 text-2xl font-bold border border-black dark:border-[#545DA1] rounded-xl group/bento transition duration-200">
              <div>In Development</div>
              <hr />
              <HeroInDevelopment/>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="grid gap-4  lg:grid-cols-5">
          <div className="p-10 text-3xl font-semibold border border-black dark:border-[#545DA1] rounded-xl flex flex-col gap-4 col-span-5 min-[1400px]:col-span-2 group/bento transition duration-200">
            <div>About</div>
            <hr />
            <HeroAbout />
          </div>
          <div className="p-10 text-3xl font-semibold border border-black dark:border-[#545DA1] rounded-xl flex flex-col gap-4 col-span-5 lg:col-span-2  min-[1400px]:col-span-1  group/bento transition duration-200">
            <div>
              <Link href="/project" className="hover:underline underline-offset-4">Projects</Link>
            </div>
            <hr />
            <HeroProjects/>
          </div>
          <div className="border col-span-5 lg:col-span-3 min-[1400px]:col-span-2  border-black dark:border-[#545DA1] rounded-xl group/bento transition duration-200">
           <HeroTechStack/>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
