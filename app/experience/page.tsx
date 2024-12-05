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
            <div className="text-xl font-normal flex flex-col flex-wrap gap-6 group-hover/bento:translate-x-2 transition duration-200 ">
              {/* Role  */}
              <div className="flex flex-col gap-2  text-xl ">
                <div className="text-2xl font-bold">VirtuoByte</div>
                <div className="flex flex-wrap justify-between">
                  <div className=" text-2xl font-semibold max-w-[300px]">
                    Frontend Engineer
                  </div>
                  <div className="text-[15px]">
                    July 2024 | Currently Working Here
                  </div>
                </div>
              </div>

              {/* techStack  */}
              <div className="flex gap-4 flex-col">
                {/* Description  */}
                <div className="dark:text-white max-w-[900px]">
                  <ul className="list-disc pl-6 space-y-1 text-[15px] ">
                    <li className=" ">
                      Developed and maintained responsive, user-friendly
                      front-end interfaces, ensuring optimal performance across
                      various devices and browsers.
                    </li>
                    <li className=" ">
                      Collaborated with cross-functional teams, including
                      backend developers, to ensure seamless API integration and
                      resolve workflow challenges.
                    </li>

                    <li className=" ">
                      Delivered consistent, high-quality code within project
                      deadlines, exceeding client expectations while focusing on
                      scalability, maintainability, and performance.
                    </li>
                  </ul>
                </div>
                <div className="flex gap-2 flex-wrap ml-5">
                  <div className="dark:bg-black-200 bg-black text-white text-sm px-2 py-1 rounded-sm">
                    ReactJS
                  </div>
                  <div className="dark:bg-black-200 bg-black text-white text-sm px-2 py-1 rounded-sm">
                    JavaScript
                  </div>
                  <div className="dark:bg-black-200 bg-black text-white text-sm px-2 py-1 rounded-sm">
                    Tailwind
                  </div>
                </div>
              </div>
            </div>
          </div>
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
