import {
  Heading,
  Container,
  BannerProps,
  ImageIcon,
  BackgroundWrapper,
} from '@components';
import { breakpoints, colors } from '@styles';
import { hasHeading } from '@utils';
import IosArrowDown from '@meronex/icons/ios/IosArrowDown';

interface BannerDurangoProps extends BannerProps {
  features: any[];
  scrollCopy?: string;
}

const BannerDurango = ({
  backgroundColor = 'bg-overlay',
  backgroundImage,
  features,
  heading,
  priority,
  level,
  scrollCopy,
  subHeading,
  video,
}: BannerDurangoProps) => {
  const headingProps = {
    heading,
    subHeading,
    level,
    containerClasses: 'pt-24 lg:pt-40 xl:pt-60 pb-0 lg:pb-20 xl:pb-20',
    headingClasses: 'mb-7 text-white leading-none font-display',
    subHeadingClasses: 'mb-7 text-color1 leading-none font-display',
  };

  const backgroundProps = {
    alt: heading,
    backgroundColor,
    backgroundImage,
    video,
    priority,
  };

  return (
    <section className={`banner durango relative font-body text-center`}>
      <BackgroundWrapper {...backgroundProps}>
        <Container maxWidth={breakpoints.xxl}>
          {hasHeading(headingProps) && <Heading {...headingProps} />}
          <div className="w-full max-w-sm m-auto lg:max-w-full flex flex-wrap justify-center items-start pb-24 lg:pb-40 xl:pb-60">
            {features.map((feat) => (
              <div
                key={feat._id}
                className="iconContainer text-white text-center mt-7 lg:mt-0 w-full md:w-1/2 lg:w-1/4 md:px-6"
              >
                <ImageIcon {...feat} color={colors.white} />
                <h5 className="pb-2 text-base">{feat.title}</h5>
              </div>
            ))}
          </div>
          <div className="absolute text-white text-center z-1 bottom-0 left-1/2 -translate-x-1/2">
            {scrollCopy || 'Scroll on'}
            <IosArrowDown
              className="block mx-auto"
              color={colors.white}
              size={50}
            />
          </div>
        </Container>
      </BackgroundWrapper>
    </section>
  );
};

export { BannerDurango };
export default BannerDurango;
