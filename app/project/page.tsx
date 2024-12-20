// app/project/page.tsx
import AllProjectsClient from "@/components/AllProjectsClient";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import SignatureProjectCard from "@/components/SignatureProjectCard";
import { fetchPosts } from "@/sanity/lib/fetchPosts";

export default async function ProjectPage() {
  const posts = await fetchPosts(); // Fetch posts here (Server Component)

  return (
    <div className="flex flex-wrap gap-5 montserrat dark:text-white text-black">
      {/* Navbar Section */}
      <div className="w-full px-3 md:px-10 pt-5 md:pt-10">
        <Navbar value={""} padding={""} />
      </div>

      {/* Main Content Section */}
      <div className="w-full flex gap-6 px-3 md:px-10 sm:gap-10 sm:flex-row">
        {/* Sidebar Section */}
        <div className="min-[1415px]:block hidden">
          <Sidebar />
        </div>

        {/* Content Section */}
        <div className="flex-1 flex flex-col border dark:border-white border-black p-6 sm:p-8 gap-6 sm:gap-10 rounded-xl">
          <p className="text-4xl sm:text-5xl font-semibold">Projects</p>
          <p>
            Creating seamless digital experiences with React, Next.js, Tailwind
            CSS, TypeScript, and the latest technologies.
          </p>
          <hr className="border border-black dark:border-white" />

          {/* Signature Project Section */}
          <h2 className="text-2xl sm:text-3xl">Signature Project</h2>
          <SignatureProjectCard />
          <hr className="border border-black dark:border-white" />

          {/* Comprehensive View Section */}
          <div>
            <h2 className="text-2xl sm:text-3xl">Comprehensive View</h2>
            {/* Pass posts as a prop to AllProjectsClient */}
            <AllProjectsClient posts={posts} />
          </div>
        </div>
      </div>
    </div>
  );
}
