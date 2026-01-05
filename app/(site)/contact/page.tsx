import { contactQuery } from "@/queries";
import { client } from "@/utils/client";
import { ContactPageProps } from "@/utils/types";
import { PageBanner } from "@/components/blocks/PageBanner";
import ContactInfo from "@/components/blocks/ContactInfo";

export default async function VolunteerPage() {
  const data: ContactPageProps = await client.fetch(contactQuery);
  return (
    <>
      <PageBanner
        heading={data.heroBanner.heading}
        backgroundColor="bg-color9"
        backgroundImage={data.heroBanner.backgroundImage}
      />
      <ContactInfo links={data.links} email={data.mainEmail} />
    </>
  );
}
