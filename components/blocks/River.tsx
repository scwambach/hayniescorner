import {
  Container,
  ImageProps,
  LinkProps,
  ProgressiveImage,
  PortableTextModule,
  Button,
  LinkObject,
} from '@components';
import * as SVG from '@svgs';
import { breakpoints, colors } from '@styles';
import { isEven, slugify } from '@utils';

interface FeatureProps {
  feature: {
    _id: string;
    blockContent?: any | any[];
    image: ImageProps;
    links?: LinkProps[];
    title: string;
  };
  extraLinks?: LinkProps[];
}

interface RiverProps {
  features: FeatureProps[];
  bgColor?: string;
  shadowColor?: string;
  delay?: number;
  cap?: boolean;
  reverse?: boolean;
}

const River = ({
  features,
  bgColor = colors.color6,
  shadowColor = colors.color5,
  delay = 0,
  cap = false,
  reverse = false,
}: RiverProps) => {
  return (
    <section
      className={`river relative ${
        cap
          ? 'hasCap lg:pt-sectionPadding lg:pb-sectionPaddingBottom '
          : 'lg:py-sectionPadding '
      }text-white py-16 md:py-5${
        reverse ? ' reverse-block' : ' regular-block'
      }`}
      style={{
        backgroundColor: bgColor,
      }}
    >
      <SVG.RiverImage1 />
      <SVG.RiverImage2 />
      {cap && <SVG.Cap bgColor={bgColor} />}
      <Container maxWidth={breakpoints.wlg}>
        {features.map(
          (
            {
              extraLinks,
              feature: { _id, blockContent, image, links = [], title },
            },
            index
          ) => {
            const allLinks = [];

            if (links) {
              allLinks.push(...links);
            }
            if (extraLinks) {
              allLinks.push(...extraLinks);
            }

            const numberOrder = (delay || index) * 100;

            return (
              <div
                id={`${title ? slugify(title) : 'riverItem'}`}
                data-aos="fade-up"
                data-aos-delay={`${numberOrder}`}
                key={_id}
                className={`fader md:flex md:justify-between items-center featureRow${
                  !isEven(reverse ? index + 1 : index)
                    ? ' md:flex-row-reverse'
                    : ''
                }${reverse ? ' reverse' : ' regular'}`}
              >
                <div className="image relative">
                  <div className="imgShadow hidden wlg:block absolute z-0">
                    <SVG.Shadow
                      color={shadowColor}
                      reverse={!isEven(reverse ? index + 1 : index)}
                    />
                  </div>
                  <div className="riverImage relative rounded-2xl md:rounded-none overflow-hidden md:overflow-auto z-10 md:h-full w-full md:w-featImage">
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
                  <h2
                    className="font-black uppercase text-xl lg:text-featHeading tracking-featureHeading mb-7"
                    data-aos-anchor={`#${title ? slugify(title) : 'riverItem'}`}
                    data-aos="fade-up"
                    data-aos-delay={`${numberOrder + 50}`}
                  >
                    {title}
                  </h2>
                  <div
                    className="font-semibold text-base lg:text-featBody leading-featBody"
                    data-aos-anchor={`#${title ? slugify(title) : 'riverItem'}`}
                    data-aos="fade-up"
                    data-aos-delay={`${numberOrder + 100}`}
                  >
                    <PortableTextModule text={blockContent} />
                  </div>

                  {allLinks.length > 0 && (
                    <div
                      className="mt-7"
                      data-aos-anchor={`#${
                        title ? slugify(title) : 'riverItem'
                      }`}
                      data-aos="fade-up"
                      data-aos-delay={`${numberOrder + 150}`}
                    >
                      {allLinks.map((link, index) => (
                        <Button
                          key={link._key}
                          index={index}
                          classes={`w-full block md:inline-block mx-auto md:mx-0 sm:w-full md:w-auto ${
                            isEven(index) ? 'bg-color1' : 'bg-orange'
                          }`}
                        >
                          <LinkObject {...link} />
                        </Button>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            );
          }
        )}
      </Container>
    </section>
  );
};

export { River };
export default River;
