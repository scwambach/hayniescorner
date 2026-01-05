"use client";
import * as SVG from "@/components/svg";
import { CustomImageProps } from "@/utils/types";
import { LinkObject } from "../modules/LinkObject";
import { ImageObject } from "../modules/ImageObject";
import { Container } from "../modules/Container";
import { breakpoints } from "@/styles";

interface SectionProps {
  _key: string;
  businesses: {
    _id: string;
    image: CustomImageProps;
    title: string;
    url: string;
  }[];
  type: {
    _id: string;
    title: string;
    slug: string;
  };
}

interface BusinessListingProps {
  sections: SectionProps[];
}

export const BusinessListing = ({ sections }: BusinessListingProps) => {
  return (
    <section>
      <div className="businesslisting text-center text-white">
        {sections.map(({ type, _key, businesses }) => (
          <div
            id={type.slug}
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
                  const numberOrder = index * 100;

                  return (
                    <div
                      className="fader card block w-full"
                      data-aos="fade-up"
                      data-aos-anchor={`#${type.slug}`}
                      key={business._id}
                      data-aos-delay={`${numberOrder}`}
                    >
                      <LinkObject url={business.url} newTab={true}>
                        <div className="relative">
                          <div className="cardImage">
                            <div className="absolute bottom-0 left-0 h-1/2 w-full z-10 bg-linear-to-t from-black to-transparent" />
                            <ImageObject
                              {...business.image}
                              imageWidth={600}
                              alt={business.title}
                              className="absolute object-cover h-full w-full top-0 left-0"
                            />
                          </div>
                          <div className="relative z-10 overflow-hidden h-0 pt-businessCard">
                            <h3 className="text-xl text-pretty md:text-businessTitle absolute px-10 bottom-10 w-full font-black uppercase tracking-sectionHeading leading-base">
                              {business.title}
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
