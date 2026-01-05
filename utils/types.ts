export type Elements =
  | "div"
  | "section"
  | "article"
  | "aside"
  | "span"
  | "header"
  | "footer"
  | "nav"
  | "main"
  | "li"
  | "ul"
  | "ol"
  | "p"
  | "a"
  | "button"
  | "form"
  | "input"
  | "label"
  | "select"
  | "textarea"
  | "img"
  | "picture"
  | "cite"
  | "figure"
  | "figcaption"
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "h6";

export interface LinkProps {
  anchor?: boolean;
  copy?: string;
  url?: string;
  _key?: string;
  _type?: string;
  newTab?: boolean;
}

export interface CustomImageProps {
  className?: string;
  src: string;
  width: number;
  height: number;
  imageWidth?: number;
  blurDataURL?: string;
  alt?: string;
  imageFor: {
    _type: string;
    asset: {
      _ref: string;
      _type: string;
    };
    crop?: {
      _type: string;
      top: number;
      bottom: number;
      left: number;
      right: number;
    };
    hotspot?: {
      _type: string;
      x: number;
      y: number;
      height: number;
      width: number;
    };
  };
}

export interface RiverProps {
  features: {
    feature: {
      _id: string;
      title: string;
      blockContent: any[];
      image: CustomImageProps;
      links: LinkProps[];
    };
    extraLinks: LinkProps[];
  }[];
}

interface IconItem {
  _id: string;
  title: string;
  subtitle?: string;
  link?: LinkProps;
  iconImage?: CustomImageProps;
  customIcon?: string;
}

export interface EventTypesProps {
  backgroundImage: CustomImageProps;
  backgroundColor: string;
  delay?: number;
  blockContent?: any[];
  items: IconItem[];
  title: string;
  links?: LinkProps[];
}

export interface LinkTilesProps {
  heading?: string;
  delay?: number;
  tiles: {
    _key?: string;
    customIcon?: string;
    iconImage?: CustomImageProps;
    link?: LinkProps;
  }[];
}

export interface LeftBannerProps {
  backgroundImage: CustomImageProps;
  blockContent: any[];
  links: LinkProps[];
  backgroundColor?: string;
  title: string;
}

export interface HeadingBlockProps {
  bgColor?: string;
  blockColor?: string;
  delay?: number;
  image?: CustomImageProps;
  heading?: string;
  message?: any;
}

export interface EventProps {
  _id: string;
  date: string;
  description?: any | any[];
  image?: CustomImageProps;
  links?: LinkProps[];
  physicalLocation?: boolean;
  location?: {
    cityStateZip: string;
    name?: string;
    street: string;
  };
  time?: string;
  title: string;
}

export interface HomePageProps {
  title: string;
  pageDescription: string;
  slug: { current: string };
  mainImage: { url: string };
  heroBanner: {
    backgroundImage: CustomImageProps;
    customIcon: string;
  };
  aboutFeatures: RiverProps;
  eventTypes: EventTypesProps;
  linkTiles: LinkTilesProps;
  arts: LeftBannerProps;
  closerFeatures: {
    features: {
      feature: {
        _id: string;
        title: string;
        blockContent: any[];
        image: CustomImageProps;
        links: LinkProps[];
      };
      extraLinks: LinkProps[];
    }[];
  };
}

export interface VolunteerPageProps {
  pageDescription: string;
  mainImage: { url: string };
  previewImage: CustomImageProps;
  heroBanner: {
    backgroundImage: CustomImageProps;
    heading: string;
  };
  formHeading: string;
  eventTypes: {
    _id: string;
    title: string;
  }[];
}

export interface ContactPageProps {
  pageDescription: string;
  mainImage: { url: string };
  mainEmail: string;
  previewImage: CustomImageProps;
  heroBanner: {
    backgroundImage: CustomImageProps;
    heading: string;
  };
  links: LinkProps[];
}

export interface ArtsPageProps {
  pageDescription: string;
  mainImage: { url: string };
  previewImage: CustomImageProps;
  heroBanner: {
    backgroundImage: CustomImageProps;
    heading: string;
  };
  artFeatures: {
    upperfeatures: {
      feature: {
        _id: string;
        title: string;
        blockContent: LinkProps[];
        image: CustomImageProps;
        links: LinkProps[];
      };
      extraLinks: LinkProps[];
    }[];
    headingBlock: HeadingBlockProps;
    lowerfeatures: {
      feature: {
        _id: string;
        title: string;
        blockContent: any[];
        image: CustomImageProps;
        links: LinkProps[];
      };
      extraLinks: LinkProps[];
    }[];
  };
}

export interface BusinessPageProps {
  pageDescription: string;
  mainImage: { url: string };
  previewImage: CustomImageProps;
  heroBanner: {
    backgroundImage: CustomImageProps;
    heading: string;
  };
  sections: {
    businessTypes: {
      _key: string;
      type: {
        _id: string;
        title: string;
        slug: string;
      };
      businesses: {
        _id: string;
        image: CustomImageProps;
        title: string;
        url: string;
      }[];
    }[];
  };
}

export interface AboutPageProps {
  pageDescription: string;
  mainImage: { url: string };
  previewImage: CustomImageProps;
  heroBanner: {
    backgroundImage: CustomImageProps;
    heading: string;
  };
  aboutFeatures: RiverProps;
  hcadaSection: {
    features: RiverProps["features"];
    headingBlock: HeadingBlockProps;
    links: LinkProps[];
  };
  footerFeatures: RiverProps;
}

export interface HcadaPageProps {
  pageDescription: string;
  mainImage: { url: string };
  previewImage: CustomImageProps;
  heroBanner: {
    backgroundImage: CustomImageProps;
    heading: string;
  };
  upperFeatures: RiverProps;
  boardSection: {
    headingBlock: HeadingBlockProps;
    boardHeading: string;
    boardMembers: {
      _id: string;
      title: string;
      positionTitle: string;
      companies: {
        _id: string;
        title: string;
        url: string;
      }[];
    }[];
  };
  lowerFeatures: RiverProps;
  formHeading: string;
}

export interface EventPageProps {
  pageDescription: string;
  mainImage: { url: string };
  previewImage: CustomImageProps;
  heroBanner: {
    backgroundImage: CustomImageProps;
    heading: string;
  };
  events: EventProps[];
}
