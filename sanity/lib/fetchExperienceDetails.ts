import { client } from "./client"

const query = `*[_type == "experience"]{
  company,
  role,
  startDate,
  endDate,
  description,
  techStack
}`

export const fetchExperienceDetails = async () => {
  try {
    const experience = await client.fetch(query)
    return experience
  } catch (error) {
    console.error('Error fetching Experience Details:', error)
    return []
  }
}
