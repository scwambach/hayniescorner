import { groq } from 'next-sanity';
import imageQuery from './imageQuery';

export const businessesQuery = groq`*[_type == "businessesPage"][0] {
  pageDescription,
  "mainImage": {
    "url": mainImage.asset->url
  },
  ${imageQuery({ name: 'previewImage' })},
  heroBanner {
    ${imageQuery({ name: 'backgroundImage' })},
    heading
  },
  sections {
    businessTypes[]  {
      _key,
      "type": *[_type == 'businessCategory' && (_id == ^._ref)][0] {
        _id,
        title,
      },
      "businesses": *[_type == 'business' && references(^._ref)] | order(title asc) {
        title, 
        ${imageQuery({ name: 'image' })},
        url,
        _id
      }
    }
  }
}`;
