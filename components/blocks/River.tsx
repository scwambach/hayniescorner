"use client";
import * as SVG from "@/components/svg";
import { breakpoints, colors } from "@/styles";
import { isEven, slugify } from "@/utils";
import { Portable } from "../modules/Portable";
import { ImageObject } from "../modules/ImageObject";
import { CustomImageProps, LinkProps } from "@/utils/types";
import { LinkObject } from "../modules/LinkObject";
import { Button } from "../modules/Button";
import { Container } from "../modules/Container";

interface FeatureProps {
  feature: {
    _id: string;
    blockContent?: any[];
    image: CustomImageProps;
    links?: LinkProps[];
    title: string;
  };
  extraLinks?: LinkProps[];
}

interface RiverProps {
  features: FeatureProps[];
  bgColor?: string;
  shadowColor?: string;
  cap?: boolean;
  reverse?: boolean;
  buttonColors?: string[];
}

export const River = ({
  features,
  bgColor = colors.color6,
  shadowColor = colors.color5,
  buttonColors,
  cap = false,
  reverse = false,
}: RiverProps) => {
  return (
    <section
      className={`river relative ${
        cap
          ? "hasCap lg:pt-sectionPadding lg:pb-sectionPaddingBottom "
          : "lg:py-sectionPadding "
      }text-white py-16 md:py-5${
        reverse ? " reverse-block" : " regular-block"
      }`}
      style={{
        backgroundColor: bgColor,
      }}
    >
      <SVG.RiverImage1 />
      <SVG.RiverImage2 />
      {cap && <SVG.Cap bgColor={bgColor} />}
      <Container maxWidth={breakpoints.wlg}>
        {features.map(
          (
            {
              extraLinks,
              feature: { _id, blockContent, image, links = [], title },
            },
            index
          ) => {
            const allLinks = [];

            if (links) {
              allLinks.push(...links);
            }
            if (extraLinks) {
              allLinks.push(...extraLinks);
            }

            return (
              <div
                id={`${title ? slugify(title) : "riverItem"}`}
                key={_id}
                className={`fader md:flex md:justify-between items-center featureRow${
                  !isEven(reverse ? index + 1 : index)
                    ? " md:flex-row-reverse"
                    : ""
                }${reverse ? " reverse" : " regular"}`}
              >
                <div className="image relative">
                  <div className="imgShadow hidden wlg:block absolute z-0">
                    <SVG.Shadow
                      color={shadowColor}
                      reverse={!isEven(reverse ? index + 1 : index)}
                    />
                  </div>
                  <div className="riverImage relative rounded-2xl md:rounded-none overflow-hidden md:overflow-auto z-10 md:h-full w-full">
                    <ImageObject
                      className="object-cover w-full h-full"
                      alt={title}
                      imageWidth={600}
                      {...image}
                    />
                  </div>
                </div>
                <div className="copy pt-12 max-w-xs md:max-w-none md:py-12">
                  <h2 className="fader font-black uppercase text-xl lg:text-featHeading tracking-featureHeading mb-7">
                    {title}
                  </h2>
                  <div className="fader font-semibold text-base lg:text-featBody leading-featBody">
                    {blockContent && <Portable content={blockContent} />}
                  </div>

                  {allLinks.length > 0 && (
                    <div className="fader mt-7">
                      {allLinks.map((link, index) => (
                        <Button
                          key={link._key}
                          className={`w-full block md:inline-block mx-auto md:mx-0 sm:w-full md:w-auto ${
                            isEven(index)
                              ? buttonColors
                                ? buttonColors[0]
                                : "bg-color1"
                              : buttonColors
                                ? buttonColors[1]
                                : "bg-orange"
                          }`}
                        >
                          <LinkObject url={link.url}>{link.copy}</LinkObject>
                        </Button>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            );
          }
        )}
      </Container>
    </section>
  );
};
