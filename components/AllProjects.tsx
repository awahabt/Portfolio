import React from "react";
import { fetchPosts } from "@/sanity/lib/fetchPosts";
import Link from "next/link";
import { MoveRight, MoveUpRight } from "lucide-react";
import { urlFor } from "@/sanity/lib/image"; // Import the urlFor function

type Post = {
  _id: string;
  title: string;
  slug: string;
  description: string;
  techstack: string[]; // Make sure this is an array
  livePreview: string;
  liveRepo: string;
  image: {
    asset: {
      _ref: string;
      _type: 'reference';
    };
    altText: string;
    caption?: string;
  };
};

const AllProjects = async () => {
  const posts: Post[] = await fetchPosts();

  if (!posts.length) {
    return <p>Loading posts...</p>; // Show loading state or error
  }

  return (
    <div className="flex justify-center w-full ">
      <div className=" my-8 p-2 rounded-xl px-10 gap-x-4 gap-y-6 grid grid-cols-1 min-[1380px]:grid-cols-2 min-[1800px]:grid-cols-3  ">
      {posts.map((post, index) => (
        <div key={index} className="bor flex flex-col justify-center gap-5 p-8 rounded-xl max-w-[430px]">
          <div className="w-full">
            <img
              src={urlFor(post.image.asset).width(500).url()} // Use the urlFor function to generate the image URL
              alt={post.image.altText || "Project Image"}
              className="w-full h-[200px] bor rounded-xl shadow-sm shadow-gray-800"
            />
          </div>
          <div className="flex flex-col flex-wrap">
            <p className="text-2xl font-semibold">{post.title}</p>
            <p className="w-full mt-5 text-sm">{post.description}</p>
            <div className="flex flex-wrap gap-2 mt-4">
              {/* Add a safe check before using .map */}
              {Array.isArray(post.techstack) && post.techstack.length > 0 ? (
                post.techstack.map((stack, i) => (
                  <div key={i} className="px-3 rounded bor bg-gray-900">
                    {stack}
                  </div>
                ))
              ) : (
                <p>No tech stack available</p> // Fallback if techstack is empty or undefined
              )}
            </div>
            <div className="flex gap-4 items-center mt-10">
              <Link
                href={post.liveRepo}
                target="blank"
                className="hover:underline items-center flex gap-2"
              >
                Repo <div className="hover:bg-white hover:text-black rounded-full px-2 py-1.5 bor">
                  <MoveUpRight className="w-5" />
                </div>
              </Link>{" "}
              <span> | </span>
              <Link
                href={post.livePreview}
                className="hover:underline items-center flex gap-2"
              >
                Preview{" "}
                <div className="hover:bg-white hover:text-black rounded-full px-2 py-1.5 bor">
                  <MoveRight className="w-5" />
                </div>
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
    </div>
  );
};

export default AllProjects;
