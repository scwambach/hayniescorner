import {
  ComponentProps,
  Container,
  Heading,
  ImageIcon,
  LinkObject,
} from '@components';
import { hasHeading } from '@utils';
import { breakpoints, colors } from '@styles';

interface FeatureListProps extends ComponentProps {
  features: any[];
}

const Feat = (feature) => {
  return (
    <>
      <dt>
        <div className="absolute flex items-center justify-center h-12 w-12 rounded-lg border bg-color1 text-black">
          <ImageIcon {...feature} color={colors.black} size={30} />
        </div>
        {feature.title && (
          <p className="ml-20 text-3xl font-display">{feature.title}</p>
        )}
      </dt>
      <dd className="mt-2 ml-20 text-base">{feature.copy}</dd>
    </>
  );
};

const FeatureList = ({
  heading,
  subHeading,
  message,
  features,
  containerClasses = 'py-24 transition-all ease-in-out flex flex-col justify-center text-center max-w-lg m-auto',
}: FeatureListProps) => {
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
    <div className="featurelist relative font-body">
      <Container maxWidth={breakpoints.xxl}>
        {hasHeading(headingProps) && <Heading {...headingProps} />}
        <div className="mt-10">
          <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-20 md:gap-y-20">
            {features.map((feature) => (
              <div key={feature._id} className="relative">
                {feature.link ? (
                  <LinkObject
                    {...feature.link}
                    classes="hover:text-color2 transition-all ease=in-out"
                  >
                    <Feat {...feature} />
                  </LinkObject>
                ) : (
                  <Feat {...feature} />
                )}
              </div>
            ))}
          </dl>
        </div>
      </Container>
    </div>
  );
};

export { FeatureList };
export default FeatureList;
