import imageQuery from "./imageQuery";

export const sponsorshipQuery = `*[_id == 'sponsorshipPage'][0] {
  pageDescription,
  "mainImage": {
    "url": mainImage.asset->url
  },
  previewImage,
  heroBanner {
    backgroundImage ${imageQuery},
    heading
  },
  formHeading,
  "eventTypes": *[_type == "iconItem" && ((_id in path('drafts.**')) == false)] | order(title asc) {
    _id,
    title,
  }
}`;
