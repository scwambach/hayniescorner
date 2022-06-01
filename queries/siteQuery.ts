import { groq } from 'next-sanity';
import { imageQuery } from './imageQuery';

export const siteQuery = groq`{
  "site": *[_type == "globalSettings"][0] {
    title,
    customIcon -> {
      ...,
    },
    defined(iconImage) => {${imageQuery({ name: 'iconImage' })}},
    defined(mainLogo) => {${imageQuery({ name: 'mainLogo' })}},
    defined(altLogo) => {${imageQuery({ name: 'altLogo' })}},
    siteDescription,
    siteTitle,
    mainEmail,
  },
  "menus": *[_type == "navMenu"] {
    ...,
    _id,
    title,
    items[] {
      ...,
      link {
        ...,
      },
    }
  },
  "socials": *[_type == "social"] | order(order asc) {
    _id,
    icon,
    url
  },
}`;
