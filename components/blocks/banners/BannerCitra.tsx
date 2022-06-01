import { Heading, Container, BannerProps } from '@components';
import { breakpoints } from '@styles';
import { hasHeading } from '@utils';
import BackgroundWrapper from 'components/wrappers/BackgroundWrapper';

interface BannerCitraProps extends BannerProps {
  align: string;
}

const BannerCitra = ({
  backgroundImage,
  backgroundColor = 'bg-color1',
  heading,
  level = 1,
  align = 'text-left',
  message,
  video,
  priority,
  subHeading,
}: BannerCitraProps) => {
  const headingProps = {
    heading,
    level,
    message,
    subHeading,
    containerClasses: `py-24 lg:py-40 xl:py-60 flex flex-col justify-center ${align}`,
    headingClasses: 'mb-7 text-white leading-none font-display',
    subHeadingClasses: 'mb-7 text-color1 leading-none font-display',
    messageClasses: 'text-base md:text-2xl text-white',
  };

  const backgroundProps = {
    alt: heading,
    backgroundColor,
    backgroundImage,
    priority,
    video,
  };

  return (
    <section className={`banner citra relative font-body ${align}`}>
      <BackgroundWrapper {...backgroundProps}>
        <Container maxWidth={breakpoints.xl}>
          {hasHeading(headingProps) && <Heading {...headingProps} />}
        </Container>
      </BackgroundWrapper>
    </section>
  );
};

export { BannerCitra };
export default BannerCitra;
