import { client } from "./client"


const query = `*[_type == "education"]{
  institueName,
  degreeName,
  startingYear,
  endingYear,
}`

export const fetchEducationDetails = async () => {
  try {
    const education = await client.fetch(query)
    return education
  } catch (error) {
    console.error('Error fetching Education Details:', error)
    return []
  }
}