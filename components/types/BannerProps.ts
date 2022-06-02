import { ImageProps } from '@components';

export interface BannerProps {
  backgroundColor?: string;
  backgroundImage?: ImageProps;
  backgroundColorStart?: string;
  backgroundColorEnd?: string;
  componentClasses?: string;
  containerClasses?: string;
  foregroundImage?: ImageProps;
  heading: string;
  headingClasses?: string;
  headingColorClasses?: string;
  headingContainerClasses?: string;
  level?: number;
  message?: any | any[];
  messageClasses?: string;
  messageColorClasses?: string;
  modalVideo?: string;
  priority?: boolean;
  subHeading?: string;
  subHeadingClasses?: string;
  subHeadingColorClasses?: string;
  video?: string;
}
