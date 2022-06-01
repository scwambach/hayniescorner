import {
  Heading,
  Container,
  BannerProps,
  ImageIcon,
  BackgroundWrapper,
} from '@components';
import { breakpoints, colors } from '@styles';
import { hasHeading } from '@utils';

interface BannerXenonProps extends BannerProps {
  features: any[];
}

const BannerXenon = ({
  backgroundImage,
  backgroundColor = 'bg-color1',
  features,
  heading,
  level = 1,
  priority,
  subHeading,
  video,
}: BannerXenonProps) => {
  const headingProps = {
    heading,
    level,
    subHeading,
    containerClasses:
      'pt-24 lg:pt-40 xl:pt-60 pb-20 lg:pb-20 xl:pb-20 text-center',
    headingClasses:
      'mb-7 text-5xl md:text-6xl lg:text-7xl text-white leading-none font-display',
    subHeadingClasses:
      'mb-7 text-3xl md:text-4xl lg:text-5xl text-color2 leading-none font-display',
  };

  const backgroundProps = {
    alt: heading,
    backgroundColor,
    backgroundImage,
    video,
    priority,
  };

  return (
    <section className="banner durango relative font-body mb-20">
      <BackgroundWrapper {...backgroundProps}>
        <Container maxWidth={breakpoints.xxl}>
          {hasHeading(headingProps) && <Heading {...headingProps} />}
          <div className="flex w-full flex-wrap justify-center items-stretch relative -bottom-20">
            {features.map((feat, index) => (
              <div
                key={feat._id}
                className={`iconContainer text-white text-center w-full md:w-1/2 lg:w-1/4 ${
                  index === 0
                    ? 'mb-10 lg:mb-0'
                    : index === 1
                    ? 'mb-10 lg:mb-0'
                    : index === 2
                    ? 'mb-10 md:mb-0'
                    : ''
                }`}
              >
                <div className="w-11/12 h-full mx-auto p-6 bg-color1">
                  <ImageIcon {...feat} color={colors.white} />
                  <h5 className="pb-2 text-base">{feat.title}</h5>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </BackgroundWrapper>
    </section>
  );
};

export { BannerXenon };
export default BannerXenon;
