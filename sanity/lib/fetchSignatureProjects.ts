import { client } from "./client"


const query = `*[_type == "signatureProjects"]{
  _id,
  title,
  slug,
  status,
  description,
  techstack,
  livePreview,
  liveRepo,
  image,
  

}`

export const fetchSignatureProjects = async () => {
  try {
    const signatureProjects = await client.fetch(query)
    return signatureProjects
  } catch (error) {
    console.error('Error fetching Signature Post:', error)
    return []
  }
}