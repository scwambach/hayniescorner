import {
  Heading,
  ComponentProps,
  Container,
  Testimonial,
  TestimonialTile,
} from '@components';
import { hasHeading } from '@utils';
import { breakpoints } from '@styles';

interface TestimonialsProps extends ComponentProps {
  testimonials: {
    _id: string;
    person: any;
    title: string;
    quote: string;
  }[];
}

const Testimonials = ({
  heading,
  subHeading,
  message,
  containerClasses = 'py-24 transition-all ease-in-out flex flex-col justify-center text-center max-w-lg m-auto',
  testimonials,
}: TestimonialsProps) => {
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
    <div className="Testimonials relative font-body">
      <Container maxWidth={breakpoints.xxl}>
        {hasHeading(headingProps) && <Heading {...headingProps} />}

        <div className={`${hasHeading(headingProps) ? '' : containerClasses}`}>
          {testimonials.length === 1 ? (
            <Testimonial {...testimonials[0]} />
          ) : (
            <div className="grid lg:grid-cols-2 gap-20">
              {testimonials.map((testimonial, index) => (
                <TestimonialTile {...testimonial} index={index} />
              ))}
            </div>
          )}
        </div>
      </Container>
    </div>
  );
};

export { Testimonials };
export default Testimonials;
