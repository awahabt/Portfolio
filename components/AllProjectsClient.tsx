// components/AllProjectsClient.tsx
"use client";

import React, { useState } from "react";
import Link from "next/link";
import { MoveRight, MoveUpRight } from "lucide-react";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import {
  Modal,
  ModalTrigger,
  ModalBody,
  ModalContent,
} from "./ui/animated-modal";
import PostById from "./PostById";

type Post = {
  _id: string;
  title: string;
  slug: string;
  smallDescription: string;
  detailDescription: string;
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

const AllProjectsClient = ({ posts }: { posts: Post[] }) => {
  const [selectedPostId, setSelectedPostId] = useState<string | null>(null);

  return (
    <div className="flex justify-center w-full montserrat overflow-hidden">
      <div className="my-8 p-2 rounded-xl gap-x-4 gap-y-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 max-w-full">
        <Modal>
          {posts.map((post) => (
            <div
              key={post._id}
              // Pass ID to state
              className="border dark:border-white border-black flex flex-col justify-center gap-5 p-8 rounded-xl w-full max-w-[400px] mx-auto"
            >
              <div className="w-full">
                <Image
                  src={urlFor(post.image.asset).width(500).url()} // Generate the URL using urlFor
                  alt={post.image.altText || "Project Image"}
                  width={500}
                  height={200}
                  className="w-full h-[200px] rounded-xl shadow-sm shadow-gray-800"
                />
              </div>
              <div className="flex flex-col flex-wrap py-5">
                <p className="text-2xl font-semibold hover:underline text-start">
                  {post.title}
                </p>
                <p className="w-full mt-5 text-sm text-start">
                  {post.smallDescription}
                </p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {post.techstack.map((stack, i) => (
                    <div
                      key={i}
                      className="px-3 rounded bg-black dark:bg-gray-900 text-white"
                    >
                      {stack}
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex mt-5 justify-end">
                <div onClick={() => setSelectedPostId(post._id)}>
                  <ModalTrigger
                   
                    className=" items-center dark:bg-gray-950 bg-black text-white hover:bg-gray-950 dark:hover:bg-gray-900 px-5 py-2 rounded-md
                   border-transparent hover:border-white flex gap-2"
                  >
                    Show more
                    <div className=" hover:text-white  rounded-md py-1 ">
                      <MoveUpRight className="w-5" />
                    </div>
                  </ModalTrigger>
                </div>
              </div>
            </div>
          ))}
          <ModalBody>
            <ModalContent>
              <div className="py-10 flex flex-wrap items-start justify-start ">
                {selectedPostId ? (
                  <PostById id={selectedPostId} /> // Pass selected post ID to PostById
                ) : (
                  <p>Select a project to see details</p>
                )}
              </div>
            </ModalContent>
          </ModalBody>
        </Modal>
      </div>
    </div>
  );
};

export default AllProjectsClient;
