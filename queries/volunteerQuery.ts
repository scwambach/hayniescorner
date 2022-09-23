import { groq } from 'next-sanity';
import imageQuery from './imageQuery';

export const volunteerQuery = groq`*[_id == $pageId][0] {
  pageDescription,
  "mainImage": {
    "url": mainImage.asset->url
  },
  ${imageQuery({ name: 'previewImage' })},
  heroBanner {
    ${imageQuery({ name: 'backgroundImage' })},
    heading
  },
  formHeading,
  "eventTypes": *[_type == "iconItem" && ((_id in path('drafts.**')) == false)] | order(title asc) {
    _id,
    title,
  }
}`;
