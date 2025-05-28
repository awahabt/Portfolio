import Education from "@/components/Education";
import HeroExperience from "@/components/HeroExperience";
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
          <HeroExperience hero={false}/>
          <hr className="border dark:border-white border-black" />
          <div className="flex flex-col gap-10">
            <p className="text-5xl font-semibold ">Education</p>
            <p>
            Empowered with cutting-edge software engineering expertise, crafting innovative web solutions with precision and creativity.
            </p>

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
