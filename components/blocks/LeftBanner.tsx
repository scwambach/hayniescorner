import Button from '@components/modules/Button';
import Container from '@components/modules/Container';
import LinkObject from '@components/modules/LinkObject';
import PortableTextModule from '@components/modules/PortableTextModule';
import { ImageProps } from '@components/types/ImageProps';
import { LinkProps } from '@components/types/LinkProps';
import BackgroundWrapper from '@components/wrappers/BackgroundWrapper';
import { breakpoints } from '@styles';
import { slugify } from '@utils';

interface LeftBannerProps {
  backgroundImage?: ImageProps;
  blockContent?: any;
  links?: LinkProps[];
  title?: string;
  delay?: number;
  backgroundColor?: string;
}

const LeftBanner = ({
  backgroundImage,
  blockContent,
  links = [],
  delay = 0,
  title,
  backgroundColor = 'bg-red',
}: LeftBannerProps) => {
  const backgroundProps = {
    backgroundImage,
    backgroundColor,
  };
  const delayNum = delay * 100;
  return (
    <section
      className="leftbanner relative overflow-hidden"
      id={slugify(title)}
    >
      <BackgroundWrapper {...backgroundProps} grayScale alt={title}>
        <div
          className="fader py-16 md:py-sectionPaddingBottom text-white "
          data-aos="fade-up"
          data-aos-delay={`${delayNum}`}
        >
          <Container maxWidth={breakpoints.lg}>
            <div className="copy max-w-xs mx-auto xmd:mx-0 mb-12 xmd:mb-0 xmd:max-w-eventTypeHeading">
              <h3
                className="fader font-black uppercase leading-base tracking-eventTypeHeading text-4xl lg:text-eventTypeHeading mb-5"
                data-aos="fade-up"
                data-aos-anchor={`#${slugify(title)}`}
                data-aos-delay={`${delayNum + 50}`}
              >
                {title}
              </h3>
              {blockContent && (
                <div
                  className="fader text-eventTypeBody leading-6"
                  data-aos="fade-up"
                  data-aos-anchor={`#${slugify(title)}`}
                  data-aos-delay={`${delayNum + 100}`}
                >
                  <PortableTextModule text={blockContent} />
                </div>
              )}
              {links && (
                <div
                  className="fader mt-7"
                  data-aos="fade-up"
                  data-aos-anchor={`#${slugify(title)}`}
                  data-aos-delay={`${delayNum + 150}`}
                >
                  {links.map((link, index) => {
                    return (
                      <Button
                        key={link._key}
                        index={index}
                        classes="w-full block xmd:inline-block mx-auto xmd:mx-0 sm:w-full xmd:w-auto bg-color7 whitespace-nowrap"
                      >
                        <LinkObject {...link} />
                      </Button>
                    );
                  })}
                </div>
              )}
            </div>
          </Container>
        </div>
      </BackgroundWrapper>
    </section>
  );
};

export { LeftBanner };
export default LeftBanner;
