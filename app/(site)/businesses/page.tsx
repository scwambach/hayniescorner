import { BusinessListing } from "@/components/blocks/BusinessListing";
import { PageBanner } from "@/components/blocks/PageBanner";
import { businessesQuery } from "@/queries";
import { client } from "@/utils/client";
import { BusinessPageProps } from "@/utils/types";

export default async function BusinessPage() {
  const data: BusinessPageProps = await client.fetch(businessesQuery);
  return (
    <>
      <PageBanner {...data.heroBanner} backgroundColor="bg-darkOrange" />
      <BusinessListing sections={data.sections.businessTypes} />
    </>
  );
}
