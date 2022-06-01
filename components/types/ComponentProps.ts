import { ImageProps } from './ImageProps';

export interface CodeProps {
  _type?: string;
  code?: string;
  language?: string;
}

export interface StyleProps {
  componentPaddingBottom?: number;
  componentPaddingTop?: number;
  customStyleCode?: CodeProps;
  customStyles?: boolean;
  headingFontSize?: number;
  subHeadingFontSize?: number;
}

export interface BuilderComponentProps {
  _type: string;
  componentId?: string;
  backgroundImage?: ImageProps;
  styleSettings?: StyleProps;
  copyPlacement?: 'left' | 'right' | 'center';
  layout?: string;
  title?: string;
  subHeading?: string;
}

export interface ComponentProps {
  heading?: string;
  subHeading?: string;
  message?: any | any[];
  containerClasses?: string;
  backgroundColor?: string;
  priority?: boolean;
}
