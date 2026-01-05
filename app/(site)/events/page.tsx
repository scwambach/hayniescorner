import { EventListing } from "@/components/blocks/EventListing";
import { PageBanner } from "@/components/blocks/PageBanner";
import { eventsQuery } from "@/queries";
import { client } from "@/utils/client";
import { EventPageProps } from "@/utils/types";

export async function generateMetadata() {
  const today = new Date().toISOString();
  const todayDate = today.split("T")[0];

  const data: EventPageProps = await client.fetch(eventsQuery, {
    todayDate,
  });
  return {
    title: "Events - Haynie's Corner Arts District",
    description: data.pageDescription,
    openGraph: {
      title: "Events - Haynie's Corner Arts District",
      description: data.pageDescription,
      images:
        data.previewImage && data.previewImage.src
          ? [`${data.previewImage.src}?w=1200&h=630&fit=crop`]
          : [`${data.heroBanner.backgroundImage.src}?w=1200&h=630&fit=crop`],
    },
  };
}

export default async function EventsPage() {
  const today = new Date().toISOString();
  const todayDate = today.split("T")[0];

  const data: EventPageProps = await client.fetch(eventsQuery, {
    todayDate,
  });
  return (
    <>
      <PageBanner {...data.heroBanner} backgroundColor="bg-brightOrange" />
      <EventListing events={data.events} />
    </>
  );
}
