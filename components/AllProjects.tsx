// app/components/AllProjects.tsx
import React, { useEffect, useState } from "react";
import { fetchPosts } from "@/sanity/lib/fetchPosts";
import Link from "next/link";
import { MoveRight, MoveUpRight } from "lucide-react";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image"; // Import the optimized Image component
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

const AllProjects = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [selectedPostId, setSelectedPostId] = useState<string | null>(null);

  // Fetch posts data in useEffect
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchPosts();
        setPosts(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching posts:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <p>Loading posts...</p>; // Show loading state
  }

  return (
    <div className="flex justify-center w-full montserrat overflow-hidden">
      <div className="my-8 p-2 rounded-xl gap-x-4 gap-y-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 max-w-full">
        <Modal>
          {posts.map((post, index) => (
            <div
              key={index}
              className="border dark:border-white border-black flex flex-col justify-center gap-5 p-8 rounded-xl w-full max-w-[400px] mx-auto"
              onClick={() => setSelectedPostId(post._id)} // Set selected post ID when clicked
            >
              <ModalTrigger>
                <div className="w-full">
                  <Image
                    src={urlFor(post.image.asset).width(500).url()} // Generate the URL using urlFor
                    alt={post.image.altText || "Project Image"}
                    width={500}
                    height={200}
                    className="w-full h-[200px] rounded-xl shadow-sm shadow-gray-800 "
                  />
                </div>
                <div className="flex flex-col flex-wrap py-5">
                  <p className="text-2xl font-semibold hover:underline text-start">
                    {post.title}
                  </p>
                  <p className="w-full mt-5 text-sm text-start">
                    {post.smallDescription}
                  </p>
                  <div className="flex flex-wrap gap-2 mt-4 ">
                    {Array.isArray(post.techstack) &&
                    post.techstack.length > 0 ? (
                      post.techstack.map((stack, i) => (
                        <div
                          key={i}
                          className="px-3 rounded bg-black dark:bg-gray-900 text-white"
                        >
                          {stack}
                        </div>
                      ))
                    ) : (
                      <p>No tech stack available</p>
                    )}
                  </div>
                  <div className="flex flex-wrap gap-4 items-center mt-10">
                    <Link
                      href={post.liveRepo}
                      target="_blank"
                      className="hover:underline items-center flex gap-2"
                    >
                      Repo
                      <div className="dark:hover:bg-white hover:bg-black hover:text-white dark:hover:text-black rounded-full px-2 py-1.5 border dark:border-white border-black">
                        <MoveUpRight className="w-5" />
                      </div>
                    </Link>
                    <span className="max-[1433px]:hidden"> | </span>
                    <Link
                      href={post.livePreview}
                      target="_blank"
                      className="hover:underline items-center flex gap-2"
                    >
                      Preview
                      <div className="dark:hover:bg-white hover:bg-black hover:text-white dark:hover:text-black rounded-full px-2 py-1.5 border dark:border-white border-black">
                        <MoveRight className="w-5" />
                      </div>
                    </Link>
                  </div>
                </div>
              </ModalTrigger>
            </div>
          ))}

          <ModalBody>
            <ModalContent>
              <div className="py-10 flex flex-wrap gap-x-4 gap-y-6 items-start justify-start max-w-sm mx-auto">
                {selectedPostId && <PostById id={selectedPostId} />}
              </div>
            </ModalContent>
          </ModalBody>
        </Modal>
      </div>
    </div>
  );
};

export default AllProjects;
