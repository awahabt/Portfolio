import { fetchExperienceDetails } from "@/sanity/lib/fetchExperienceDetails";
import React from "react";

type ExperienceProps = {
  company: string;
  role: string;
  startDate: string;
  endDate: string;
  description: string[];
  techStack: string[];
};

type HeroExperienceProps = {
  hero: boolean;
};

const HeroExperience = async ({ hero }: HeroExperienceProps) => {
  const experienceDetails: ExperienceProps[] = await fetchExperienceDetails();

  // If hero is true, only show the first experience, else show all
  const experiencesToShow = hero ? experienceDetails.slice(0, 1) : experienceDetails;

  return (
    <div className="text-xl font-normal flex flex-col flex-wrap gap-6 group-hover/bento:translate-x-2 transition duration-200 ">
      {experiencesToShow.map((item, index) => (
        <div key={index} className="flex flex-col gap-2">
          {/* Role  */}
          <div className="flex flex-col gap-2  text-xl ">
            <div className="text-2xl font-bold">{item.company}</div>
            <div className="flex flex-wrap justify-between">
              <div className=" text-2xl font-semibold max-w-[300px]">
                {item.role}
              </div>
              <div className="text-[15px]">
                {item.startDate} | {item.endDate}
              </div>
            </div>
          </div>

          {/* techStack  */}
          <div className="flex gap-2 flex-col">
            {/* Description  */}
            <div className="dark:text-white">
              <ul className="list-disc pl-6 space-y-1 text-[15px] max-w-[900px]">
                {item.description.map((desc, i) => (
                  <li key={i} className=" ">
                    {desc}
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex gap-2 flex-wrap ml-5">
              {item.techStack.map((tech, i) => (
                <div
                  key={i}
                  className="dark:bg-black-200 bg-black text-white text-sm px-2 py-1 rounded-sm"
                >
                  {tech}
                </div>
              ))}
            </div>
          </div>
          {index < experiencesToShow.length - 1 ? <hr className="mt-10 mb-5" /> : ""}
        </div>
      ))}
    </div>
  );
};

export default HeroExperience;
