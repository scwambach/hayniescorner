import { groq } from 'next-sanity';
import imageQuery from './imageQuery';

export const eventsQuery = groq`*[_type == "eventsPage"][0] {
  pageDescription,
  "mainImage": {
    "url": mainImage.asset->url
  },
  ${imageQuery({ name: 'previewImage' })},
  heroBanner {
    ${imageQuery({ name: 'backgroundImage' })},
    heading
  }
}`;
