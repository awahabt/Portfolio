// lib/fetchPostById.ts

import { client } from './client'

const query = `*[_type == "post" && _id == $id][0]{
  _id,
  title,
  slug,
  publishedAt,
  "author": author->name,
  "category": category->title,
  content
}`

export const fetchPostById = async (id: string) => {
  try {
    console.log(id[0])
    // Make sure the query variable is passed correctly to the client
    const post = await client.fetch(query, { id:id[0] });

    return post;
  } catch (error) {
    console.error('Error fetching post by _id:', error);
    return null;
  }
}
