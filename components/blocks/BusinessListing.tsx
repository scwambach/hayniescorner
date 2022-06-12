import { ProgressiveImage, ImageProps } from '@components';
import LinkObject from '@components/modules/LinkObject';
interface SectionProps {
  _key: string;
  businesses: {
    _id: string;
    image: ImageProps;
    title: string;
    url: string;
  }[];
  type: {
    _id: string;
    title: string;
  };
}

interface BusinessListingProps {
  sections: SectionProps[];
}

const BusinessListing = ({ sections }: BusinessListingProps) => {
  return (
    <section>
      <div className="businesslisting text-center text-white">
        {sections.map(({ type, _key, businesses }) => (
          <div
            key={_key}
            className="type lg:pt-sectionPadding lg:pb-sectionPaddingBottom relative"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1366.636"
              className="cap hidden md:block mega:hidden absolute w-full h-auto left-0"
              height="65.87"
              viewBox="0 0 1366.636 65.87"
            >
              <path
                d="M0,0,1366-65.87V0H0Z"
                transform="translate(0.636 65.87)"
              />
            </svg>
            <h2 className="font-black uppercase tracking-sectionHeading text-sectionHeading">
              {type.title}
            </h2>
            <div className="flex flex-wrap">
              {businesses.map((business) => (
                <LinkObject
                  classes="block w-full md:w-1/2"
                  url={business.url}
                  newTab={true}
                  key={business._id}
                >
                  <div className="relative">
                    <ProgressiveImage {...business.image} isBackground />
                    <div className="relative p-20 z-10">
                      <h3>{business.title}</h3>
                    </div>
                  </div>
                </LinkObject>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export { BusinessListing };
export default BusinessListing;
