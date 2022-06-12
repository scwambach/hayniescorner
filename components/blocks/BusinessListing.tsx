import { ImageProps } from '@components';
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
        {sections.map((type) => (
          <>
            <div
              key={type._key}
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
                {type.type.title}
              </h2>
            </div>
          </>
        ))}
      </div>
    </section>
  );
};

export { BusinessListing };
export default BusinessListing;
