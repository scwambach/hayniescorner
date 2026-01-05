import { EventListing } from "@/components/blocks/EventListing";
import { PageBanner } from "@/components/blocks/PageBanner";
import { eventsQuery } from "@/queries";
import { client } from "@/utils/client";
import { EventPageProps } from "@/utils/types";

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
