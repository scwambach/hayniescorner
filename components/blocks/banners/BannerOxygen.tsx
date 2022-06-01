import { Heading, Container, BannerProps } from '@components';
import { breakpoints } from '@styles';
import BackgroundWrapper from 'components/wrappers/BackgroundWrapper';

interface BannerOxygenProps extends BannerProps {}

const BannerOxygen = ({
  backgroundColor = 'bg-color1',
  backgroundImage,
  heading,
  level = 1,
  video,
  priority,
  subHeading,
}: BannerOxygenProps) => {
  const headingProps = {
    heading,
    level,
    subHeading,
    containerClasses:
      'py-14 flex flex-col justify-center text-white text-center',
    headingClasses:
      'text-5xl md:text-6xl lg:text-7xl leading-none mb-2 font-display',
    subHeadingClasses: 'text-xl font-body text-color2',
  };

  const backgroundProps = {
    alt: heading,
    video,
    backgroundColor,
    backgroundImage,
    priority,
    thin: true,
  };

  return (
    <section className="banner oxygen relative font-body">
      <BackgroundWrapper {...backgroundProps}>
        <Container maxWidth={breakpoints.lg}>
          {heading && <Heading {...headingProps} />}
        </Container>
      </BackgroundWrapper>
    </section>
  );
};

export { BannerOxygen };
export default BannerOxygen;
