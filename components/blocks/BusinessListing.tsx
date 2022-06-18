import {
  ProgressiveImage,
  ImageProps,
  Container,
  LinkObject,
} from '@components';
import * as SVG from '@svgs';
import { breakpoints } from '@styles';
import { noOrphans } from '@utils';

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
            className="type py-16 md:pb-36 lg:pt-sectionPadding lg:pb-52 mega:pb-sectionPaddingBottom relative"
          >
            <SVG.Cap />
            <Container maxWidth={breakpoints.bl}>
              <h2 className="font-black uppercase leading-tight mb-14 tracking-sectionHeading text-businessType">
                {type.title}
              </h2>
              <div className="grid lg:grid-cols-2 gap-10">
                {businesses.map((business, index) => {
                  const numberOrder = index * 50;

                  return (
                    <div
                      className="card block w-full"
                      data-aos="fade-up"
                      data-aos-delay={`${numberOrder}`}
                    >
                      <LinkObject
                        url={business.url}
                        newTab={true}
                        key={business._id}
                      >
                        <div className="relative">
                          <div className="cardImage">
                            <ProgressiveImage
                              {...business.image}
                              imgWidth={600}
                              imgHeight={400}
                              alt={business.title}
                              isBackground
                            />
                          </div>
                          <div className="relative z-10 overflow-hidden h-0 pt-businessCard">
                            <h3 className="text-xl md:text-businessTitle absolute px-10 bottom-10 w-full font-black uppercase tracking-sectionHeading leading-base">
                              {noOrphans(business.title)}
                            </h3>
                          </div>
                        </div>
                      </LinkObject>
                    </div>
                  );
                })}
              </div>
            </Container>
          </div>
        ))}
        <SVG.Card1 />
        <SVG.Card2 />
        <SVG.Card3 />
        <SVG.Card4 />
        <SVG.Card5 />
      </div>
    </section>
  );
};

export { BusinessListing };
export default BusinessListing;
