// app/post/[...id]/page.tsx

import { fetchPostById } from "@/sanity/lib/fetchPostById";
import { PortableText } from "next-sanity";

type Post = {
  _id: string;
  title: string;
  slug: string;
  description: string;
  techStack: any;    // Should be of type that holds Portable Text data
  livePreview: string;
  liveRepo: string; 
};

const PostById = async ({ params }:{
  params:{
    id:string,
    techStack:[ 
      type: object,
    ]
  }
}) => {
  const { id } = await params;
  const post: Post = await fetchPostById(id);
console.log(post);

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <div>
      <PortableText value={post.techStack} />
    </div>
  );
};

export default PostById;
