"use client";
import { slugify } from "@/utils";
import { EventTypesProps } from "@/utils/types";
import { Portable } from "../modules/Portable";
import { ListBox } from "../svg";
import { LinkObject } from "../modules/LinkObject";
import { BackgroundWrapper } from "../global/BackgroundWrapper";
import { Button } from "../modules/Button";
import { Container } from "../modules/Container";
import { breakpoints } from "@/styles";

export const EventTypes = ({
  title,
  links = [],
  items,
  blockContent,
  backgroundImage,
  backgroundColor = "bg-darkOrange",
}: EventTypesProps) => {
  const backgroundProps = {
    backgroundImage,
    backgroundColor,
  };

  return (
    <section
      className="iconListBanner relative overflow-hidden"
      id={slugify(title)}
    >
      <BackgroundWrapper {...backgroundProps} grayScale alt={title}>
        <div className="fader py-16 md:py-sectionPadding text-white ">
          <Container maxWidth={breakpoints.lg}>
            <div className="xmd:flex xmd:ml-4 w-full items-center justify-between">
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
                    {links.map((link) => {
                      return (
                        <Button
                          key={link._key}
                          className="w-full block xmd:inline-block mx-auto xmd:mx-0 sm:w-full xmd:w-auto bg-color7 whitespace-nowrap"
                        >
                          <LinkObject {...link} />
                        </Button>
                      );
                    })}
                  </div>
                )}
              </div>

              <ListBox />
              <div className="fader bg-orange mx-auto xmd:mx-0 content-box rounded-2xl px-7 py-16 md:p-eventListMobile lg:p-eventList w-full flex flex-col h-full max-w-featList">
                {items.map((item, index) => {
                  return (
                    <div
                      key={item._id}
                      className={`fader sm:flex w-full text-center sm:text-left sm:justify-between items-center${
                        index !== 0 ? " mt-7" : ""
                      }`}
                    >
                      <div className="itemIcon mx-auto mb-3 sm:m-0 flex justify-center">
                        <span
                          dangerouslySetInnerHTML={{
                            __html: item.customIcon || "",
                          }}
                        />
                      </div>
                      <div className="itemTitle font-semibold uppercase text-iconHeading">
                        {item.title}
                        <span className="block text-base tracking-widest">
                          {item.subtitle}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </Container>
        </div>
      </BackgroundWrapper>
    </section>
  );
};
