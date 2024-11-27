// pages/project/page.tsx

import AllProjects from "@/components/AllProjects";
import Sidebar from "@/components/Sidebar";

import SignatureProjectCard from "@/components/SignatureProjectCard";
import ThemeSwitcher from "@/components/ThemeSwitcher";

export default async function ProjectPage() {
  return (
    <div className="w-full h-full min-h-screen flex flex-col flex-wrap p-10 gap-10 montserrat dark:bg-black-100 dark:text-white">
      <div className="relative z-[10] w-full flex justify-between gap-10 ">
        <p className="text-8xl font-semibold">Abdul Wahab Tahir.</p>
        <div>
          <ThemeSwitcher/>
        </div>
      </div>
      <div className="flex gap-10">
        <div className="lg:flex sticky hidden">
          <Sidebar />
        </div>
        <div className="flex flex-1 flex-col bor p-8 gap-10 rounded-xl">
          <p className="text-5xl font-semibold">Projects</p>

          <p>
            Creating seamless digital experiences with React, Next.js, Tailwind
            CSS, TypeScript, and the latest technologies.
          </p>
          <hr className="border dark:border-white border-black"/>
          <h2 className="text-3xl">Signature Project</h2>
          <SignatureProjectCard />
          <hr className="border dark:border-white border-black"/>

          <div>
            <h2 className="text-3xl">Comprehensive View</h2>
            <AllProjects />
          </div>
        </div>
      </div>
    </div>
  );
}
