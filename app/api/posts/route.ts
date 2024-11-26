import { fetchPosts } from "@/sanity/lib/fetchPosts"

export async function GET() {
  const posts = await fetchPosts()
  return new Response(JSON.stringify(posts), {
    headers: { 'Content-Type': 'application/json' },
  })
}

