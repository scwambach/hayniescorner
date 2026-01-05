import imageQuery from "./imageQuery";

export const artsQuery = `*[_type == "artsPage"][0] {
  pageDescription,
  "mainImage": {
    "url": mainImage.asset->url
  },
  previewImage ${imageQuery},
  heroBanner {
    backgroundImage ${imageQuery},
    heading
  },
  artFeatures {
    upperfeatures[] {
      feature -> {
        _id,
        title,
        blockContent,
        image ${imageQuery},
        links,
      },
      extraLinks,
    },
    headingBlock -> {
      heading,
      message,
      image ${imageQuery}
    },
    lowerfeatures[] {
      feature -> {
        _id,
        title,
        blockContent,
        image ${imageQuery},
        links,
      },
      extraLinks,
    },
  }
}`;
