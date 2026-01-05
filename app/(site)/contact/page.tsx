import { contactQuery } from "@/queries";
import { client } from "@/utils/client";
import { ContactPageProps } from "@/utils/types";
import { PageBanner } from "@/components/blocks/PageBanner";
import ContactInfo from "@/components/blocks/ContactInfo";

export async function generateMetadata() {
  const data: ContactPageProps = await client.fetch(contactQuery);
  return {
    title: "Contact Us - Haynie's Corner Arts District",
    description: data.pageDescription,
    openGraph: {
      title: "Contact Us - Haynie's Corner Arts District",
      description: data.pageDescription,
      images:
        data.previewImage && data.previewImage.src
          ? [`${data.previewImage.src}?w=1200&h=630&fit=crop`]
          : [`${data.heroBanner.backgroundImage.src}?w=1200&h=630&fit=crop`],
    },
  };
}

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
