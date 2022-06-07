import { groq } from 'next-sanity';
import imageQuery from './imageQuery';

export const homeQuery = groq`*[_type == "homePage"][0] {
  title,
  pageDescription,
  slug,
  "mainImage": {
    "url": mainImage.asset->url
  },
  heroBanner {
    ${imageQuery({ name: 'backgroundImage' })},
    customIcon -> {
      ...,
    },
  },
  aboutFeatures {
    features[] -> {
      _id,
      title,
      blockContent,
      ${imageQuery({ name: 'image' })},
      links,
    }
  }
}`;
