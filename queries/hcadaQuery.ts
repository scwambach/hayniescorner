import imageQuery from "./imageQuery";

export const hcadaQuery = `*[_type == "hcadaPage"][0] {
  pageDescription,
  "mainImage": {
    "url": mainImage.asset->url
  },
  previewImage ${imageQuery},
  heroBanner {
    backgroundImage ${imageQuery},
    heading
  },
  upperFeatures {
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
  boardSection {
    headingBlock -> {
      heading,
      message,
      image ${imageQuery}
    },
    boardHeading,
    boardMembers[] -> {
      _id,
      title,
      positionTitle,
      companies[] -> {
        _id,
        title,
        url,
      }
    }
  },
  lowerFeatures {
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
  },
  formHeading
}`;
