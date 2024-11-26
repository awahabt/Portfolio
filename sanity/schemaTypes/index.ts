import { type SchemaTypeDefinition } from 'sanity'
import post from './post'
import signatureProjects from './signatureProjects'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [post, signatureProjects],
}
