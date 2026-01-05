import imageQuery from "./imageQuery";

export const contactQuery = `*[_type == "contactPage"][0] {
  pageDescription,
  "mainEmail": *[_type == "globalSettings"][0].mainEmail,
  "mainImage": {
    "url": mainImage.asset->url
  },
  previewImage ${imageQuery},
  heroBanner {
    backgroundImage ${imageQuery},
    heading
  },
  links,
}`;
