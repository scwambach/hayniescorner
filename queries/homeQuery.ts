import { BlockContent } from '@sanity/block-content-to-react';
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
  eventTypes {
    ${imageQuery({ name: 'backgroundImage' })},
    blockContent,
    items[] -> {
      _id,
      title,
      link,
      "customIcon": customIcon -> customStyleCode.code,
      ${imageQuery({ name: 'iconImage' })},
    },
    links,
    title,
  },
  linkTiles {
    heading,
    tiles[] {
      _key,
      link,
      "customIcon": customIcon -> customStyleCode.code,
      ${imageQuery({ name: 'iconImage' })},
    }
  },
  arts {
    ${imageQuery({ name: 'backgroundImage' })},
    blockContent,
    links,
    title
  },
  closerFeatures {
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
  }
}`;
