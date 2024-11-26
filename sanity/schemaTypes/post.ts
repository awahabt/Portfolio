export default {
  name: "post",
  title: "Post",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
      },
    },
    {
      name: "description",
      title: "Description",
      type: "string",
    },
    {
      name: "techstack",
      title: "Tech Stack",
      type: "array",
      of: [{ type: "string", title: "Stack", description: "Enter a Stack" }],
    },
    {
      name: "livePreview",
      title: "Live Preview Link",
      type: "string",
    },
    {
      name: "liveRepo",
      title: "Live Repo Link",
      type: "string",
    },
    {
      name: "image",
      title: "Image",
      type: "image",
      options: {
        hotspot: true, // Enables cropping and hotspot selection
      },
    },
  ],
} as const;
