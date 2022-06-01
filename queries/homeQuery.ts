import { portableTextQuery } from './portableTextQuery';
import { groq } from 'next-sanity';
import imageQuery from './imageQuery';
import headingQuery from './headingQuery';

export const homeQuery = groq`*[_type == "homePage"][0] {
  title,
  pageDescription,
  slug,
  "mainImage": {
    "url": mainImage.asset->url
  },
  heroBanner {
    ${imageQuery({ name: 'backgroundImage' })},
    ${headingQuery()},
    features[] -> {
      _id,
      copy,
      title,
      icon,
      "customIcon": customIcon -> customStyleCode.code,
      ${imageQuery({ name: 'iconImage' })}
    }
  }
}`;
