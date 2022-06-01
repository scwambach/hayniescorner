import { ImageIcon } from '@components';
import { colors } from '@styles';
import ProgressiveImage from './ProgressiveImage';

interface TestimonialProps {
  _id: string;
  person: any;
  title: string;
  quote: string;
}

const Testimonial = (testimonial: TestimonialProps) => {
  return (
    <div className="relative">
      {testimonial.person.company && (
        <div className="text-center">
          <ImageIcon
            {...testimonial.person.company}
            color={colors.black}
            blockType="inline-block"
            size={200}
          />
        </div>
      )}
      <blockquote className="mt-10">
        <div className="max-w-lg mx-auto text-center text-2xl leading-9 font-medium text-gray-900">
          <p>&ldquo;{testimonial.quote}&rdquo;</p>
        </div>
        <footer className="mt-8">
          <div className="md:flex md:items-center md:justify-center">
            <div className="md:flex-shrink-0">
              <div className="mx-auto h-10 w-10 rounded-full relative overflow-hidden">
                <ProgressiveImage
                  isBackground
                  imgWidth={50}
                  imgHeight={50}
                  {...testimonial.person.headShot}
                />
              </div>
            </div>
            <div className="mt-3 text-center md:mt-0 md:ml-4 md:flex md:items-center">
              <div className="text-base font-medium text-gray-900">
                {testimonial.person.name}
              </div>

              {testimonial.person.positionTitle && (
                <>
                  <svg
                    className="hidden md:block mx-1 h-5 w-5 text-color2"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M11 0h3L9 20H6l5-20z" />
                  </svg>
                  <div className="text-base font-medium text-gray-500">
                    {testimonial.person.positionTitle}
                  </div>
                </>
              )}
            </div>
          </div>
        </footer>
      </blockquote>
    </div>
  );
};

export { Testimonial };
export default Testimonial;
