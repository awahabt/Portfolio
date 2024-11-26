import imageUrlBuilder from '@sanity/image-url';
import { client } from '@/sanity/lib/client'; // Assuming you have a sanity client setup

const builder = imageUrlBuilder(client);

export function urlFor(source: any) {
  return builder.image(source);
}
