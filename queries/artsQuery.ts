import { groq } from 'next-sanity';
import imageQuery from './imageQuery';

export const artsQuery = groq`*[_type == "artsPage"][0] {
  pageDescription,
  "mainImage": {
    "url": mainImage.asset->url
  },
  ${imageQuery({ name: 'previewImage' })},
  heroBanner {
    ${imageQuery({ name: 'backgroundImage' })},
    heading
  },
  artFeatures {
    upperfeatures[] {
      feature -> {
        _id,
        title,
        blockContent,
        ${imageQuery({ name: 'image' })},
        links,
      },
      extraLinks,
    },
    headingBlock -> {
      heading,
      message,
      ${imageQuery({ name: 'image' })}
    },
    lowerfeatures[] {
      feature -> {
        _id,
        title,
        blockContent,
        ${imageQuery({ name: 'image' })},
        links,
      },
      extraLinks,
    },
  }
}`;
