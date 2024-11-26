import { client } from "./client"


const query = `*[_type == "post"]{
  _id,
  title,
  slug,
  description,
  techstack,
  livePreview,
  liveRepo,
  image,
  

}`

export const fetchPosts = async () => {
  try {
    const posts = await client.fetch(query)
    return posts
  } catch (error) {
    console.error('Error fetching posts:', error)
    return []
  }
}