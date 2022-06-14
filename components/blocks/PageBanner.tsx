import { Container, ImageProps, ComponentProps } from '@components';
import BackgroundWrapper from '@components/wrappers/BackgroundWrapper';
import { breakpoints } from '@styles';

interface PageBannerProps extends ComponentProps {
  backgroundImage: ImageProps;
  backgroundColor: string;
  heading: string;
}

const PageBanner = ({
  backgroundImage,
  backgroundColor,
  heading,
}: PageBannerProps) => {
  const backgroundProps = {
    backgroundImage,
    backgroundColor,
  };
  return (
    <section className="banner subpage relative font-body text-center text-white">
      <BackgroundWrapper {...backgroundProps} alt={heading}>
        <Container maxWidth={breakpoints.xxl}>
          <h1 className="font-black text-4xl md:text-banner uppercase tracking-sectionHeading leading-tight  py-16 md:py-32">
            {heading}
          </h1>
        </Container>
      </BackgroundWrapper>
    </section>
  );
};

export { PageBanner };
export default PageBanner;
