import imageQuery from "./imageQuery";

export const aboutQuery = `*[_type == "aboutPage"][0] {
  pageDescription,
  "mainImage": {
    "url": mainImage.asset->url
  },
  previewImage ${imageQuery},
  heroBanner {
    backgroundImage ${imageQuery},
    heading
  },
  aboutFeatures {
    features[] {
      feature -> {
        _id,
        title,
        blockContent,
        image ${imageQuery},
        links,
      },
      extraLinks,
    }
  },
  hcadaSection {
    features[] {
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
    links
  },
  footerFeatures {
    features[] {
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
