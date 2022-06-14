import { groq } from 'next-sanity';
import imageQuery from './imageQuery';

export const aboutQuery = groq`*[_type == "aboutPage"][0] {
  pageDescription,
  "mainImage": {
    "url": mainImage.asset->url
  },
  ${imageQuery({ name: 'previewImage' })},
  heroBanner {
    ${imageQuery({ name: 'backgroundImage' })},
    heading
  },
  aboutFeatures {
    features[] {
      feature -> {
        _id,
        title,
        blockContent,
        ${imageQuery({ name: 'image' })},
        links,
      },
      extraLinks,
    }
  },
}`;
