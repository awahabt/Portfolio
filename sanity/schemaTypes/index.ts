import { type SchemaTypeDefinition } from 'sanity'
import post from './post'
import signatureProjects from './signatureProjects'
import education from './education'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [post, signatureProjects, education],
}
