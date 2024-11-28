import { fetchEducationDetails } from "@/sanity/lib/fetchEducationDetails";
import React from "react";

type EducationDetails = {
  institueName: string;
  degreeName: string;
  startingYear: string;
  endingYear: string;
};

const Education = async () => {
  const educationDetails: EducationDetails[] = await fetchEducationDetails();

  if (!educationDetails.length) {
    return <p>No Education Details.....</p>;
  }

  return (
    <div className="w-full">
      
      <ul>
        {
          educationDetails.map((items, index)=>(
<li className="relative flex items-baseline gap-8  pb-10">
          <div className={`${index === educationDetails.length -1? "":"before:absolute before:left-[5.5px] before:h-full before:w-[1px] dark:before:bg-white before:bg-black"}`}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="12"
              className="bi bi-circle-fill fill-black dark:fill-white"
              viewBox="0 0 16 16"
            >
              <circle cx="8" cy="8" r="8" />
            </svg>
          </div>
          <div className="flex gap-10 justify-between">
            <div>
              <p className="text-xl font-semibold max-w-[450px]">
                {items.institueName}
              </p>
              <p className="mt-3 text-sm max-w-[450px]">
                {items.degreeName}
              </p>
            </div>
            <div className="">
              <p className="w-[100px]">{items.startingYear} - {items.endingYear}</p>
            </div>
          </div>
        </li>
          ))
        }
      </ul>
    </div>
  );
};

export default Education;
