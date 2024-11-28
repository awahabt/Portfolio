// pages/project/page.tsx

import AllProjects from "@/components/AllProjects";
import Sidebar from "@/components/Sidebar";

import SignatureProjectCard from "@/components/SignatureProjectCard";
import ThemeSwitcher from "@/components/ThemeSwitcher";

export default async function ProjectPage() {
  return (
    <div className="flex flex-wrap  gap-5 montserrat dark:text-white text-black ">
  {/* Top Section */}
  <div className="relative z-[20] w-full flex items-start justify-between gap-4 px-4 py-6 sm:gap-10 sm:px-10 sm:py-10">
    {/* Name Section */}
    <p className="text-6xl font-bold ml-4 hidden sm:block md:text-8xl md:ml-10">
      Abdul Wahab Tahir.
    </p>

    {/* Theme Switcher Section */}
    <div className="ml-auto">
      <ThemeSwitcher />
    </div>
  </div>

  {/* Main Content Section */}
  <div className="w-full flex gap-6 px-3 md:px-10 sm:gap-10 sm:flex-row">
    {/* Sidebar Section */}
    <div className="min-[1415px]:block hidden ">
      <Sidebar />
    </div>

    {/* Content Section */}
    <div className="flex-1 flex flex-col bor p-6 sm:p-8 gap-6 sm:gap-10 rounded-xl">
      <p className="text-4xl sm:text-5xl font-semibold">Projects</p>
      <p>
        Creating seamless digital experiences with React, Next.js, Tailwind CSS, TypeScript, and the latest technologies.
      </p>
      <hr className="border border-black dark:border-white" />

      {/* Signature Project Section */}
      <h2 className="text-2xl sm:text-3xl">Signature Project</h2>
      <SignatureProjectCard />
      <hr className="border border-black dark:border-white" />

      {/* Comprehensive View Section */}
      <div>
        <h2 className="text-2xl sm:text-3xl">Comprehensive View</h2>
        <AllProjects />
      </div>
    </div>
  </div>
</div>

  );
}
