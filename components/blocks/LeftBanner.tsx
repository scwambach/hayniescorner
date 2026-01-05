"use client";
import { slugify } from "@/utils";
import { LeftBannerProps } from "@/utils/types";
import { BackgroundWrapper } from "../global/BackgroundWrapper";
import { Portable } from "../modules/Portable";
import { Button } from "../modules/Button";
import { LinkObject } from "../modules/LinkObject";
import { Container } from "../modules/Container";
import { breakpoints } from "@/styles";

export const LeftBanner = ({
  backgroundImage,
  blockContent,
  links = [],
  title,
  backgroundColor = "bg-red",
}: LeftBannerProps) => {
  const backgroundProps = {
    backgroundImage,
    backgroundColor,
  };
  return (
    <section
      className="leftbanner relative overflow-hidden"
      id={slugify(title)}
    >
      <BackgroundWrapper {...backgroundProps} hardLight grayScale alt={title}>
        <div className="fader py-16 md:py-sectionPaddingBottom text-white ">
          <Container maxWidth={breakpoints.lg}>
            <div className="copy max-w-xs mx-auto xmd:mx-0 mb-12 xmd:mb-0 xmd:max-w-eventTypeHeading">
              <h3 className="fader font-black uppercase leading-base tracking-eventTypeHeading text-4xl lg:text-eventTypeHeading mb-5">
                {title}
              </h3>
              {blockContent && (
                <div className="fader text-eventTypeBody leading-6">
                  <Portable content={blockContent} />
                </div>
              )}
              {links && (
                <div className="fader mt-7">
                  {links.map((link, index) => {
                    return (
                      <Button
                        key={link._key}
                        index={index}
                        className="w-full block xmd:inline-block mx-auto xmd:mx-0 sm:w-full xmd:w-auto bg-color7 whitespace-nowrap"
                      >
                        <LinkObject {...link} />
                      </Button>
                    );
                  })}
                </div>
              )}
            </div>
          </Container>
        </div>
      </BackgroundWrapper>
    </section>
  );
};
