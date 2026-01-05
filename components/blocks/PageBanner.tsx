import { BackgroundWrapper } from "../global/BackgroundWrapper";
import { CustomImageProps } from "@/utils/types";
import { Container } from "../modules/Container";
import { breakpoints } from "@/styles";

interface PageBannerProps {
  backgroundColor: string;
  backgroundImage: CustomImageProps;
  containerClasses?: string;
  heading: string;
  message?: any | any[];
  priority?: boolean;
  subHeading?: string;
}

export const PageBanner = ({
  backgroundImage,
  backgroundColor,
  heading,
}: PageBannerProps) => {
  const backgroundProps = {
    backgroundImage,
    backgroundColor,
    grayScale: true,
  };
  return (
    <section className="border-t-95 border-black banner subpage relative font-body text-center text-white">
      <BackgroundWrapper {...backgroundProps} hardLight alt={heading}>
        <Container maxWidth={breakpoints.xxl}>
          <h1 className="font-black text-4xl md:text-banner uppercase tracking-sectionHeading leading-tight  py-16 md:py-32">
            {heading}
          </h1>
        </Container>
      </BackgroundWrapper>
    </section>
  );
};
