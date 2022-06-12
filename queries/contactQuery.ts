import { groq } from 'next-sanity';
import imageQuery from './imageQuery';

export const contactQuery = groq`*[_type == "contactPage"][0] {
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
