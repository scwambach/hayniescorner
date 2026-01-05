import { Board } from "@/components/blocks/Board";
import { ContactForm } from "@/components/blocks/ContactForm";
import { HeadingBlock } from "@/components/blocks/HeadingBlock";
import { PageBanner } from "@/components/blocks/PageBanner";
import { River } from "@/components/blocks/River";
import { hcadaQuery } from "@/queries";
import { colors } from "@/styles";
import { client } from "@/utils/client";
import { HcadaPageProps } from "@/utils/types";

export default async function HcadaPage() {
  const data: HcadaPageProps = await client.fetch(hcadaQuery);
  return (
    <>
      <PageBanner {...data.heroBanner} backgroundColor="bg-seaFoam" />
      <div className="mb-10">
        <River
          {...data.upperFeatures}
          cap
          bgColor={colors.black}
          shadowColor={colors.seaFoam}
        />
        <HeadingBlock
          {...data.boardSection.headingBlock}
          bgColor={colors.black}
          blockColor={colors.seaFoam}
        />
        <Board {...data.boardSection} />
        <River
          {...data.lowerFeatures}
          reverse
          bgColor={colors.black}
          shadowColor={colors.seaFoam}
        />
      </div>
      <ContactForm
        formId="contactForm"
        bgColor={colors.seaFoam}
        heading={data.formHeading}
        buttonColor="bg-black"
      />
    </>
  );
}
