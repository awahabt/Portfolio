import { fetchSignatureProjects } from "@/sanity/lib/fetchSignatureProjects";
import { MoveRight, MoveUpRight } from "lucide-react";
import Link from "next/link";
import React from "react";
import { urlFor } from "@/sanity/lib/image";

type SignatureProjects = {
  _id: string,
  title: string,
  slug: string,
  status: string,
  description: string,
  techstack: string[],
  livePreview: string,
  liveRepo: string,
  image: {
    asset: {
      _ref: string,
      _type: 'reference',
    };
    altText: string,
    caption?: string,
  }

}




const SignatureProjectCard = async () => {

  const signatureProjects : SignatureProjects[] = await fetchSignatureProjects();

  if(!signatureProjects.length){
    return <p>Loading.....</p>
  }


  // const signatureProject = [
  //   {
  //     title: "Learning Management System",
  //     status: "Under Construction",
  //     disc: "Explore my comprehensive personal portfolio, constructed with Next.js, TypeScript, and Tailwind",
  //     teckStack: ["NodeJs", "React", "MongoDB", "Express", "Tailwind"],
  //     liveLink: "https://github.com/awahabt/LMS-MERN",
  //     repoLink: "https://github.com/awahabt/LMS-MERN",
  //     image:
  //       "https://www.google.com/url?sa=i&url=https%3A%2F%2Fmemberpress.com%2Fblog%2Fwhat-is-a-learning-management-system-lms%2F&psig=AOvVaw2rYgakgi-jbk4ygufXe6AB&ust=1732559820261000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCPC3gbvO9YkDFQAAAAAdAAAAABAE",
   
  //   },
  //   {
  //     title: "Learning Management System",
  //     status: "Under Construction",
  //     disc: "Explore my comprehensive personal portfolio, constructed with Next.js, TypeScript, and Tailwind",
  //     teckStack: ["NodeJs", "React", "MongoDB", "Express", "Tailwind"],
  //     liveLink: "https://github.com/awahabt/LMS-MERN",
  //     repoLink: "https://github.com/awahabt/LMS-MERN",
  //     image:
  //       "https://www.google.com/url?sa=i&url=https%3A%2F%2Fmemberpress.com%2Fblog%2Fwhat-is-a-learning-management-system-lms%2F&psig=AOvVaw2rYgakgi-jbk4ygufXe6AB&ust=1732559820261000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCPC3gbvO9YkDFQAAAAAdAAAAABAE",
  //   },
  // ];
  return (
    <div className="bor rounded-xl p-5  flex flex-col  ">
      {signatureProjects.map((items, index) => (
        <div
          className={`flex  flex-wrap  justify-between flex-1 p-2 md:p-8 max-[1580px]:justify-center max-[1580px]:gap-8 ${
            index === signatureProjects.length - 1
              ? "border-t-[1px] border-gray-700"
              : " border-none"
          }`}
          key={index}
        >
          <div className="min-[1550px]:w-full  flex flex-wrap flex-col-reverse min-[1550px]:flex-row items-center justify-between gap-4">
          <div className="p-5 flex  flex-1 flex-col flex-wrap max-w-[600px]  ">
            <div className="flex items-start justify-between gap-10">
              <p className="text-2xl font-semibold max-w-[300px]  ">{items.title}</p>
              <p className="underline underline-offset-4">{items.status}</p>
            </div>
            <div className="mt-5 flex flex-col gap-4">
              <p className="w-[450px]">{items.description}</p>

              <div className="flex flex-col gap-1 ">
                <p className="font-semibold">Tech Stack:</p>

                <div className="flex gap-2 flex-wrap">
                  {items.techstack.map((tech, i) => (
                    <div key={i} className="px-3 bor rounded bg-black-200">{tech}</div>
                  ))}
                </div>
              </div>
              <div className="flex gap-4 mt-10">
                <Link
                  href={items.livePreview}
                  className="hover:underline flex gap-2"
                >
                  Preview <MoveUpRight className="w-5"/>
                </Link>
                <span> | </span>
                <Link
                  href={items.liveRepo} target="blank"
                  className="hover:underline flex gap-2"
                >
                  Repo <MoveRight className="w-5"/>
                </Link>
              </div>
            </div>
          </div>
          <div className=" rounded flex-1 flex justify-center items-center">
            <img src={urlFor(items.image.asset).width(500).url()} 
            alt={items.image.altText || "Signature Project Image"}
             className="w-full min-[1550px]:max-w-[450px] object-contain h-[350px] " />
          </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SignatureProjectCard;
