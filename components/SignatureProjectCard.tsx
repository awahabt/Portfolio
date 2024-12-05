import React from "react";
import Link from "next/link";
import Image from "next/image"; // Import the Next.js Image component
import { MoveRight, MoveUpRight } from "lucide-react";
import { fetchSignatureProjects } from "@/sanity/lib/fetchSignatureProjects";
import { urlFor } from "@/sanity/lib/image";

type SignatureProject = {
  _id: string;
  title: string;
  slug: string;
  status: string;
  description: string;
  techstack: string[];
  livePreview: string;
  liveRepo: string;
  image: {
    asset: {
      _ref: string;
      _type: "reference";
    };
    altText: string;
    caption?: string;
  };
};

const SignatureProjectCard = async () => {
  const signatureProjects: SignatureProject[] = await fetchSignatureProjects();

  if (!signatureProjects.length) {
    return <p>Loading.....</p>;
  }

  return (
    <div className="border dark:border-white border-black rounded-xl p-5 flex flex-col w-full max-w-full overflow-hidden">
    {signatureProjects.map((item, index) => (
      <div
        key={index}
        className={`flex flex-wrap justify-between p-2 md:p-8 gap-8 ${
          index === signatureProjects.length - 1
            ? "border-t-[1px] dark:border-white border-black"
            : "border-none"
        }`}
      >
        <div className="w-full flex flex-wrap flex-col-reverse md:flex-row items-center justify-between gap-4">
          {/* Left Section */}
          <div className="p-5 flex-1 max-w-[600px]">
            <div className="flex flex-wrap justify-between gap-4">
              <p className="text-2xl font-semibold max-w-[300px]">{item.title}</p>
              <p className="underline underline-offset-4">{item.status}</p>
            </div>
            <div className="mt-5 flex flex-col gap-4">
              <p className="max-w-full">{item.description}</p>
              <div className="flex flex-col gap-1">
                <p className="font-semibold">Tech Stack:</p>
                <div className="flex gap-2 flex-wrap">
                  {item.techstack.map((tech, i) => (
                    <div
                      key={i}
                      className="px-3 rounded bg-black text-white dark:bg-gray-900"
                    >
                      {tech}
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex gap-4 mt-10">
                <Link href={item.livePreview} className="hover:underline flex gap-2">
                  Preview <MoveUpRight className="w-5" />
                </Link>
                <span> | </span>
                <Link
                  href={item.liveRepo}
                  target="_blank"
                  className="hover:underline flex gap-2"
                >
                  Repo <MoveRight className="w-5" />
                </Link>
              </div>
            </div>
          </div>
  
          {/* Right Section */}
          <div className="flex-1 flex justify-center items-center p-5 w-full h-full max-w-[450px]">
            <Image
              src={urlFor(item.image.asset).width(500).url() || "/placeholder.png"} // Fallback to a placeholder
              alt={item.image.altText || "Signature Project Image"}
              width={450}
              height={350}
              className="w-full shadow-sm shadow-gray-800 rounded-xl object-contain"
              priority
            />
          </div>
        </div>
      </div>
    ))}
  </div>
  
  );
};

export default SignatureProjectCard;
