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
  hcadaSection {
    features[] {
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
    links
  },
  footerFeatures {
    features[] {
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
