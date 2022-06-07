import {
  Container,
  ImageProps,
  LinkProps,
  ProgressiveImage,
  PortableTextModule,
  Button,
  LinkObject,
} from '@components';
import { Shadow } from '@components/svg/Shadow';
import { breakpoints, colors } from '@styles';
import { isEven } from '@utils';

interface FeatureProps {
  _id: string;
  blockContent?: any | any[];
  image: ImageProps;
  links?: LinkProps[];
  title: string;
}

interface RiverProps {
  features: FeatureProps[];
  bgColor?: string;
  shadowColor?: string;
  cap?: boolean;
  foot?: boolean;
  reverse?: boolean;
}

const River = ({
  features,
  bgColor = colors.color6,
  shadowColor = colors.color5,
  cap = false,
  foot = false,
  reverse = false,
}: RiverProps) => {
  return (
    <section
      className={`river relative ${
        cap
          ? 'hasCap lg:pt-sectionPadding lg:pb-sectionPaddingBottom '
          : 'lg:py-sectionPadding '
      }text-white py-16 md:py-5`}
      style={{
        backgroundColor: bgColor,
      }}
    >
      {cap && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1366.636"
          className="cap hidden md:block mega:hidden absolute w-full h-auto left-0"
          height="65.87"
          viewBox="0 0 1366.636 65.87"
        >
          <path
            d="M0,0,1366-65.87V0H0Z"
            transform="translate(0.636 65.87)"
            fill={bgColor}
          />
        </svg>
      )}
      <Container maxWidth={breakpoints.wlg}>
        {features.map(({ _id, blockContent, image, links, title }, index) => (
          <div
            key={_id}
            className={`md:flex md:justify-between items-center featureRow${
              !isEven(reverse ? index + 1 : index) ? ' md:flex-row-reverse' : ''
            }${reverse ? ' reverse' : ''}`}
          >
            <div className="image relative">
              <div className="imgShadow hidden wlg:block absolute z-0">
                <Shadow
                  color={shadowColor}
                  reverse={!isEven(reverse ? index + 1 : index)}
                />
              </div>
              <div className="relative rounded-2xl md:rounded-none overflow-hidden md:overflow-auto z-10 riverImage md:h-full w-full md:w-featImage">
                <ProgressiveImage
                  isBackground
                  alt={title}
                  imgHeight={600}
                  imgWidth={600}
                  {...image}
                />
              </div>
            </div>
            <div className="copy pt-12 max-w-xs md:max-w-none md:py-12">
              <h2 className="font-black uppercase text-xl lg:text-featHeading tracking-featureHeading mb-7">
                {title}
              </h2>
              <div className="font-semibold text-base lg:text-featBody leading-featBody">
                <PortableTextModule text={blockContent} />
              </div>
              {links && (
                <div className="mt-7">
                  {links.map((link, index) => (
                    <Button
                      key={link._key}
                      index={index}
                      classes="w-full block md:inline-block mx-auto md:mx-0 sm:w-full md:w-auto bg-color1"
                    >
                      <LinkObject {...link} />
                    </Button>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
      </Container>
      {foot && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1366.636"
          className={`foot rotate-180 absolute w-full h-auto left-0 ${bgColor.replace(
            'bg-',
            'text-'
          )}`}
          height="65.87"
          viewBox="0 0 1366.636 65.87"
        >
          <path
            d="M0,0,1366-65.87V0H0Z"
            transform="translate(0.636 65.87)"
            fill="currentColor"
          />
        </svg>
      )}
    </section>
  );
};

export { River };
export default River;
