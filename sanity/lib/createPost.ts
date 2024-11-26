import { client } from "./client"


interface PostData {
  title: string
  slug: string
  publishedAt: string
  authorId: string
  categoryId: string
  content: string
}

export const createPost = async (postData:PostData) => {
  try {
    const createdPost = await client.create({
      _type: 'post',
      title: postData.title,
      slug: {
        _type: 'slug',
        current: postData.slug,
      },
      publishedAt: postData.publishedAt,
      author: {
        _type: 'reference',
        _ref: postData.authorId,
      },
      category: {
        _type: 'reference',
        _ref: postData.categoryId,
      },
      content: postData.content,
    })
    return createdPost
  } catch (error) {
    console.error('Error creating post:', error)
    return null
  }
}



