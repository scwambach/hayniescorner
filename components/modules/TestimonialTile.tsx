import { isEven } from '@utils';
import { ImageIcon } from '@components';
import { colors } from '@styles';
import ProgressiveImage from './ProgressiveImage';

interface TestimonialTileProps {
  _id: string;
  person: any;
  quote: string;
  index?: number;
}

const TestimonialTile = ({ person, quote, index }: TestimonialTileProps) => {
  return (
    <div
      className={`py-12 px-4 sm:px-6 lg:py-16 lg:pr-0 lg:pl-10${
        index && index > 0 ? ' border-t-2 lg:border-t-0' : ''
      }`}
    >
      <div className="lg:flex-shrink-0">
        {person.company && (
          <ImageIcon
            {...person.company}
            color={colors.black}
            blockType="inline-block"
            size={200}
          />
        )}
      </div>
      <blockquote className="mt-6 lg:flex-grow lg:flex lg:flex-col">
        <div className="relative text-lg font-medium text-black lg:flex-grow">
          <svg
            className="absolute -top-5 -left-5 transform -translate-x-3 -translate-y-2 h-8 w-8 text-black"
            fill="currentColor"
            viewBox="0 0 32 32"
          >
            <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
          </svg>
          <p className="relative">{quote}</p>
        </div>
        <footer className="mt-8">
          <div className="flex items-start">
            <div className="flex-shrink-0 inline-flex rounded-full border-2 border-white">
              <div className="h-12 w-12 rounded-full relative overflow-hidden">
                <ProgressiveImage
                  isBackground
                  imgWidth={50}
                  imgHeight={50}
                  {...person.headShot}
                />
              </div>
            </div>
            <div className="ml-4">
              <div className="text-base font-medium text-black">
                {person.name}
              </div>
              {person.positionTitle && (
                <div className="text-base font-medium text-black">
                  {person.positionTitle}
                </div>
              )}
            </div>
          </div>
        </footer>
      </blockquote>
    </div>
  );
};

export { TestimonialTile };
export default TestimonialTile;
