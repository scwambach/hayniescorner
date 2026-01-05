import imageQuery from "./imageQuery";

export const businessesQuery = `*[_type == "businessesPage"][0] {
  pageDescription,
  "mainImage": {
    "url": mainImage.asset->url
  },
  previewImage ${imageQuery},
  heroBanner {
    backgroundImage ${imageQuery},
    heading
  },
  sections {
    businessTypes[]  {
      _key,
      "type": *[_type == 'businessCategory' && (_id == ^._ref)][0] {
        _id,
        title,
        "slug": slug.current
      },
      "businesses": *[_type == 'business' && references(^._ref)] | order(title asc) {
        title,
        image ${imageQuery},
        url,
        _id
      }
    }
  }
}`;
