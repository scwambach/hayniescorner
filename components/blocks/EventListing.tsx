import { breakpoints, colors } from "@/styles";
import * as SVG from "@/components/svg";
import dayjs from "dayjs";
import { EventProps } from "@/utils/types";
import { LinkObject } from "../modules/LinkObject";
import { ImageObject } from "../modules/ImageObject";
import { Button } from "../modules/Button";
import { Container } from "../modules/Container";
import { Portable } from "../modules/Portable";

interface EventListingProps {
  past?: boolean;
  events: EventProps[];
}

export const EventListing = ({ events = [], past }: EventListingProps) => {
  return (
    <section className="eventlisting  bg-orange text-white relative py-16 md:pb-36 lg:py-sectionPadding">
      <SVG.Cap bgColor={colors.orange} />
      <SVG.DateBox />
      <Container
        maxWidth={events.length > 0 ? breakpoints.smd : breakpoints.xl}
      >
        <div className="xmd:relative xmd:left-10">
          {events.length > 0 ? (
            events.map(
              ({
                _id,
                date,
                title,
                time,
                physicalLocation,
                location,
                image,
                description,
                links,
              }) => {
                return (
                  <div
                    key={_id}
                    className="fader relative mb-44 "
                    data-aos="fade-up"
                  >
                    <div className="date text-center bg-blue mb-5 xmd:mb-0 xmd:absolute xmd:top-0 right-full w-24 py-5 mr-14">
                      <div className="text-dateMon uppercase font-bold leading-base">
                        {dayjs(date).format("MMM")}
                      </div>
                      <div className="text-dateDay font-black leading-base">
                        {dayjs(date).format("D")}
                      </div>
                    </div>
                    <h2 className="uppercase leading-7 lg:leading-8 tracking-sectionHeading text-2xl lg:text-eventTitle font-black mb-2">
                      {title}
                    </h2>
                    <div className="meta font-semibold text-eventMeta mb-10 leading-featBody">
                      <p>{dayjs(date).format("dddd, MMMM D, YYYY")}</p>
                      {time && <p>{time}</p>}
                      {physicalLocation && (
                        <p>
                          <LinkObject
                            classes="hover:text-blue transition-all ease-in-out"
                            url={`https://www.google.com/maps/place/${location?.street} ${location?.cityStateZip}`}
                            newTab
                          >
                            {location?.name ||
                              `${location?.street}, ${location?.cityStateZip}`}
                          </LinkObject>
                        </p>
                      )}
                    </div>
                    {image?.src && (
                      <div className="image mb-10">
                        <ImageObject
                          {...image}
                          className="rounded-2xl"
                          imageWidth={862}
                        />
                      </div>
                    )}

                    {description && (
                      <div className="description">
                        <Portable content={description} />
                      </div>
                    )}
                    {!past && links && (
                      <div className="mt-7 flex flex-col gap-3">
                        {links.map((link, index) => (
                          <Button
                            key={link._key}
                            index={index}
                            className={`w-full block xmd:inline-block mx-auto xmd:mx-0 sm:w-full xmd:w-auto bg-blue`}
                          >
                            <LinkObject {...link} />
                          </Button>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }
            )
          ) : (
            <div>
              <h2 className="font-black uppercase tracking-featureHeading text-2xl md:text-3xl lg:text-banner leading-tight lg:leading-tight mb-10">
                There currently aren&apos;t any events scheduled at the moment.
                Please check back soon!
              </h2>
            </div>
          )}
        </div>
      </Container>
    </section>
  );
};
