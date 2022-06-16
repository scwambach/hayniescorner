import { BlockContent } from '@sanity/block-content-to-react';
import { groq } from 'next-sanity';
import imageQuery from './imageQuery';

export const volunteerQuery = groq`*[_type == "volunteerPage"][0] {
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
  "availableEvents": *[_type == "event" && ((_id in path('drafts.**')) == false) && date >= $todayDate] | order(date asc) {
    _id,
    title,
    date
  }
}`;
