import imageQuery from "./imageQuery";

export const homeQuery = `*[_type == "homePage"][0] {
  title,
  pageDescription,
  slug,
  mainImage ${imageQuery},
  heroBanner {
    backgroundImage ${imageQuery},
    "customIcon": customIcon -> customStyleCode.code,
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
  eventTypes {
    backgroundImage ${imageQuery},
    blockContent,
    items[] -> {
      _id,
      title,
      subtitle,
      link,
      "customIcon": customIcon -> customStyleCode.code,
      iconImage ${imageQuery},
    },
    links,
    title,
  },
  linkTiles {
    heading,
    tiles[] {
      _key,
      link,
      "customIcon": customIcon -> customStyleCode.code,
      iconImage ${imageQuery},
    }
  },
  arts {
    backgroundImage ${imageQuery},
    blockContent,
    links,
    title
  },
  closerFeatures {
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
  }
}`;
