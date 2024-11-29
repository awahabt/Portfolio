import Education from "@/components/Education";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";

export default function ExperiencePage() {
  return (
    <div className="p-3 gap-10 montserrat md:p-10  text-black dark:text-white">
      <Navbar value={""} padding={""} />
      <div className="flex gap-10 mt-5">
        <div className="min-[1415px]:flex sticky hidden ">
          <Sidebar />
        </div>
        <div className="flex flex-1  flex-col border dark:border-white border-black p-8 gap-10 rounded-xl">
          <div className="flex flex-col gap-10">
            <p className="text-5xl font-semibold">Experience</p>

            <p>
              Creating seamless digital experiences with React, Next.js,
              Tailwind CSS, TypeScript, and the latest technologies.
            </p>
          </div>

          <hr className="border dark:border-white border-black " />
          <div className="flex flex-col gap-10">
            <h2 className="text-3xl ">Field Experience</h2>
          </div>
          <hr className="border dark:border-white border-black" />
          <div className="flex flex-col gap-10">
            <p className="text-5xl font-semibold ">Education</p>

            {/* TimeLine */}

            <div className="w-full px-10 flex justify-start">
              <Education />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
