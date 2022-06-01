import { breakpoints } from '@styles';
import {
  BannerMercury,
  BannerProps,
  ComponentProps,
  Container,
  Heading,
} from '@components';
import { hasHeading, isEven } from '@utils';

interface Feature extends BannerProps {
  _key: string;
}

interface RiverProps extends ComponentProps {
  contained?: boolean;
  features: Feature[];
  flipImageSide?: boolean;
}

const River = ({
  backgroundColor = 'bg-white',
  contained,
  containerClasses = 'py-24 transition-all ease-in-out flex flex-col justify-center text-center max-w-lg m-auto',
  features,
  flipImageSide,
  heading,
  message,
  priority,
  subHeading,
}: RiverProps) => {
  const headingProps = {
    containerClasses,
    heading,
    headingClasses:
      'mb-7 text-3xl md:text-4xl lg:text-5xl leading-none font-display',
    level: 2,
    message,
    messageClasses: 'text-base md:text-2xl',
    subHeading,
    subHeadingClasses:
      'mb-7 text-2xl md:text-3xl lg:text-4xl leading-none font-display',
  };

  return (
    <section
      className={`river relative overflow-hidden font-body ${backgroundColor}`}
    >
      <Container maxWidth={contained ? breakpoints.xxl : '100%'} edges>
        {hasHeading(headingProps) && <Heading {...headingProps} />}
        {features.map((feature, index) => {
          const orderNumber = flipImageSide ? index + 1 : index;
          return (
            <BannerMercury
              key={feature._key}
              {...feature}
              index={orderNumber + 1}
              priority={priority}
              backgroundColor={isEven(index) ? 'bg-color2' : 'bg-color1 '}
            />
          );
        })}
      </Container>
    </section>
  );
};

export { River };
export default River;
