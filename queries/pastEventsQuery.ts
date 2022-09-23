import { groq } from 'next-sanity';
import imageQuery from './imageQuery';

export const pastEventsQuery = groq`*[_type == "eventsPage"][0] {
  pageDescription,
  "mainImage": {
    "url": mainImage.asset->url
  },
  ${imageQuery({ name: 'previewImage' })},
  heroBanner {
    ${imageQuery({ name: 'backgroundImage' })},
    heading
  },
  "events": *[_type == "event" && ((_id in path('drafts.**')) == false) && date < $todayDate] | order(date desc) {
    _id, 
    title,
    ${imageQuery({ name: 'image' })},
    description,
    physicalLocation,
    location,
    time,
    links,
    date
  }
}`;
