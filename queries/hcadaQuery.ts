import { groq } from 'next-sanity';
import imageQuery from './imageQuery';

export const hcadaQuery = groq`*[_type == "hcadaPage"][0] {
  pageDescription,
  "mainImage": {
    "url": mainImage.asset->url
  },
  ${imageQuery({ name: 'previewImage' })},
  heroBanner {
    ${imageQuery({ name: 'backgroundImage' })},
    heading
  },
  upperFeatures {
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
  boardSection {
    headingBlock -> {
      heading,
      message,
      ${imageQuery({ name: 'image' })}
    },
    boardHeading,
    boardMembers[] -> {
      _id,
      title,
      positionTitle,
      companies[] -> {
        _id,
        title,
        url,
      }
    }
  },
  lowerFeatures {
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
  },
  formHeading
}`;
