import { volunteerQuery } from "@/queries";
import { breakpoints, colors } from "@/styles";
import { slugify } from "@/utils";
import { client } from "@/utils/client";
import { VolunteerPageProps } from "@/utils/types";
import * as SVG from "@/components/svg";
import { Container } from "@/components/modules/Container";
import { PageBanner } from "@/components/blocks/PageBanner";
import VolunteerForm from "@/components/blocks/VolunteerForm";

export async function generateMetadata() {
  const data: VolunteerPageProps = await client.fetch(volunteerQuery);
  return {
    title: "Volunteer - Haynie's Corner Arts District",
    description: data.pageDescription,
    openGraph: {
      title: "Volunteer - Haynie's Corner Arts District",
      description: data.pageDescription,
      images:
        data.previewImage && data.previewImage.src
          ? [`${data.previewImage.src}?w=1200&h=630&fit=crop`]
          : [`${data.heroBanner.backgroundImage.src}?w=1200&h=630&fit=crop`],
    },
  };
}

export default async function VolunteerPage() {
  const data: VolunteerPageProps = await client.fetch(volunteerQuery);
  return (
    <>
      <PageBanner
        heading={data.heroBanner.heading}
        backgroundColor="bg-color7"
        backgroundImage={data.heroBanner.backgroundImage}
      />
      <section
        id={slugify(data.formHeading)}
        className="type py-16 md:pb-36 lg:pt-sectionPadding lg:pb-52 mega:pb-sectionPaddingBottom relative bg-color7"
      >
        <SVG.Cap bgColor={colors.color7} />

        <Container maxWidth={breakpoints.lg}>
          <h2
            className="fader text-white text-center font-black uppercase text-xl lg:text-featHeading tracking-featureHeading mb-7"
            data-aos="fade-up"
          >
            {data.formHeading}
          </h2>
          <VolunteerForm
            events={data.eventTypes}
            formId={slugify(data.formHeading)}
          />
        </Container>
      </section>
    </>
  );
}
