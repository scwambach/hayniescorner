import { imageQuery } from "./imageQuery";

export const siteQuery = `{
  "site": *[_type == "globalSettings"][0] {
    title,
    "footerLogo": footerLogo -> customStyleCode.code,
    "mainLogo": mainLogo -> customStyleCode.code,
    "customIcon": customIcon -> customStyleCode.code,
    mainLogoImage ${imageQuery},
    footerLogoImage ${imageQuery},
    siteDescription,
    siteTitle,
    mainEmail,
  },
  "navigation": *[_type == "navMenu"][0].items[] {
    _key,
    "url": link.url,
    "copy": link.copy,
  },
  "socials": *[_type == "social"] | order(order asc) {
    _id,
    icon,
    url
  },
}`;
