// app/components/PostById.tsx
import React, { useEffect, useState } from "react";
import { fetchPostById } from "@/sanity/lib/fetchPostById"; // Make sure this is the correct import
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import { MoveRight, MoveUpRight } from "lucide-react";
import Link from "next/link";

type Post = {
  _id: string;
  title: string;
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
  };
};

const PostById = ({ id }: { id: string }) => {
  const [post, setPost] = useState<Post | null>(null);

  useEffect(() => {
    // Fetch post data by ID when the ID changes
    const fetchPost = async () => {
      const fetchedPost = await fetchPostById(id);
      setPost(fetchedPost);
    };

    fetchPost();
  }, [id]);

  if (!post) {
    return <div>Loading...</div>;
  }

  return (
    <Card className="w-[100%] flex flex-wrap gap-5 justify-center border rounded-md  ">
      {/* the left side */}
      <CardHeader className=" flex  flex-col  ">
        <CardTitle className="text-2xl w-[300px] dark:text-white text-black ">
          {post.title}
        </CardTitle>

        <div>
          <div className="max-w-[400px]">
            <Image
              src={urlFor(post.image.asset).width(500).url()} // Generate the URL using urlFor
              alt={post.image.altText || "Project Image"}
              width={500}
              height={200}
              className=" h-[200px] mt-5 rounded-xl shadow-sm shadow-gray-800 "
            />
          </div>
        </div>
      </CardHeader>

      {/* the right side */}
      <div className="py-5 px-3 max-w-[400px] flex flex-col justify-center">
        <CardContent>
          <CardDescription className="overflow-y-auto">
            <p className=" whitespace-normal max-h-[400px] p-2 dark:text-white text-black">
              {post.detailDescription}
            </p>
          </CardDescription>
        </CardContent>
        <hr className="border-[1/2px] border-gray-700 mt-5 " />
        <CardFooter>
          <div className="flex w-full flex-wrap gap-5 items-center mt-10">
            <Link
              href={post.liveRepo}
              target="_blank"
              className=" items-center dark:bg-gray-800 bg-black text-white hover:bg-gray-950 dark:hover:bg-gray-900 px-5 py-2 rounded-md
                   border-transparent hover:border-white flex gap-2"
            >
              Repo
              <div className="hover:text-white">
                <MoveUpRight className="w-5" />
              </div>
            </Link>

            <Link
              href={post.livePreview}
              target="_blank"
              className=" items-center dark:bg-gray-800 bg-black text-white hover:bg-gray-950 dark:hover:bg-gray-900 px-5 py-2 rounded-md
                   border-transparent hover:border-white flex gap-2"
            >
              Preview
              <div className="hover:text-white">
                <MoveRight className="w-5" />
              </div>
            </Link>
          </div>
        </CardFooter>
      </div>

      {/* <h2 className="text-3xl">{post.title}</h2>
      <p>{post.description}</p> */}
      {/* Render other post details here */}
    </Card>
  );
};

export default PostById;
