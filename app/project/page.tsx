// pages/project/page.tsx

import AllProjects from "@/components/AllProjects";
import Sidebar from "@/components/Sidebar";

import SignatureProjectCard from "@/components/SignatureProjectCard";

export default async function ProjectPage() {
  return (
    <div className="w-full h-full min-h-screen flex items-start p-10 gap-10 montserrat">
      <div className="lg:flex sticky hidden">
        <Sidebar />
      </div>
      <div className="flex flex-1 flex-col bor p-8 gap-10 rounded-xl">
        <p className="text-5xl font-semibold">Projects</p>

        <p>
          Creating seamless digital experiences with React, Next.js, Tailwind
          CSS, TypeScript, and the latest technologies.
        </p>
        <hr />
        <h2 className="text-3xl">Signature Project</h2>
        <SignatureProjectCard />
        <hr />

        <div>
          <h2 className="text-3xl">Comprehensive View</h2>
          <AllProjects />
        </div>
      </div>
    </div>
  );
}
