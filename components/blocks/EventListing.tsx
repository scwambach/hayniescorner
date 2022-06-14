import {
  Button,
  Container,
  ImageProps,
  LinkObject,
  LinkProps,
  PortableTextModule,
  ProgressiveImage,
} from '@components';
import { breakpoints, colors } from '@styles';
import * as SVG from '@svgs';
import dayjs from 'dayjs';

interface EventProps {
  _id: string;
  date: string;
  description?: any | any[];
  image?: ImageProps;
  links?: LinkProps[];
  physicalLocation?: boolean;
  location?: {
    cityStateZip: string;
    name?: string;
    street: string;
  };
  time?: string;
  title: string;
}

interface EventListingProps {
  past?: boolean;
  events: EventProps[];
}

const EventListing = ({ events, past }: EventListingProps) => {
  return (
    <section className="eventlisting  bg-orange text-white relative py-16 md:pb-36 lg:py-sectionPadding">
      <SVG.Cap bgColor={colors.orange} />
      <SVG.DateBox />
      <Container maxWidth={breakpoints.smd}>
        <div className="xmd:relative xmd:left-10">
          {events.map(
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
            }) => (
              <div key={_id} className="relative mb-44 ">
                <div className="date text-center bg-blue mb-5 xmd:mb-0 xmd:absolute xmd:top-0 right-full w-24 py-5 mr-14">
                  <div className="text-dateMon uppercase font-bold leading-base">
                    {dayjs(date).format('MMM')}
                  </div>
                  <div className="text-dateDay font-black leading-base">
                    {dayjs(date).format('D')}
                  </div>
                </div>
                <h2 className="uppercase tracking-sectionHeading text-eventTitle font-black mb-2">
                  {title}
                </h2>
                <div className="meta font-semibold text-eventMeta mb-10 leading-featBody">
                  <p>{dayjs(date).format('dddd, MMMM D, YYYY')}</p>
                  {time && <p>{time}</p>}
                  {physicalLocation && (
                    <p>
                      <LinkObject
                        classes="hover:text-blue transition-all ease-in-out"
                        url={`https://www.google.com/maps/place/${location.street} ${location.cityStateZip}`}
                        newTab
                      >
                        {location.name ||
                          `${location.street}, ${location.cityStateZip}`}
                      </LinkObject>
                    </p>
                  )}
                </div>
                {image && (
                  <div className="image mb-10">
                    <ProgressiveImage
                      {...image}
                      imgHeight={327}
                      imgWidth={862}
                      height={245}
                      width={560}
                    />
                  </div>
                )}
                <div className="description">
                  <PortableTextModule text={description} />
                </div>

                {!past && links && (
                  <div className="mt-7">
                    {links.map((link, index) => (
                      <Button
                        key={link._key}
                        index={index}
                        classes={`w-full block md:inline-block mx-auto md:mx-0 sm:w-full md:w-auto bg-blue`}
                      >
                        <LinkObject {...link} />
                      </Button>
                    ))}
                  </div>
                )}
              </div>
            )
          )}
        </div>
      </Container>
    </section>
  );
};

export { EventListing };
export default EventListing;
