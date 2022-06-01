import { Heading, Container, BannerProps } from '@components';
import { breakpoints } from '@styles';
import { hasHeading } from '@utils';
import BackgroundWrapper from 'components/wrappers/BackgroundWrapper';

interface BannerOrbisProps extends BannerProps {}

const BannerOrbis = ({
  backgroundImage,
  heading,
  level = 1,
  message,
  video,
  priority,
  subHeading,
}: BannerOrbisProps) => {
  const headingProps = {
    heading,
    level,
    message,
    subHeading,
    containerClasses:
      'py-24 w-full md:w-3/4 lg:w-1/2 lg:py-40 xl:py-60 flex flex-col justify-center buttons-white-copy text-white md:text-black',
    headingClasses: 'mb-7 leading-none font-display',
    messageClasses: 'text-base md:text-2xl',
    subHeadingClasses: 'mb-7 leading-none font-display',
    headCompressor: 1,
    mesCompressor: 3,
  };

  const backgroundProps = {
    alt: heading,
    backgroundColor: 'bg-overlay md:bg-transparent',
    backgroundImage,
    priority,
    video,
  };

  return (
    <section className="banner orbis relative font-body">
      <BackgroundWrapper {...backgroundProps}>
        <Container maxWidth={breakpoints.xxl}>
          {hasHeading(headingProps) && <Heading {...headingProps} />}
        </Container>
      </BackgroundWrapper>
    </section>
  );
};

export { BannerOrbis };
export default BannerOrbis;
