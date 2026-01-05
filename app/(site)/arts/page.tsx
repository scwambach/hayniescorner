import { HeadingBlock } from "@/components/blocks/HeadingBlock";
import { PageBanner } from "@/components/blocks/PageBanner";
import { River } from "@/components/blocks/River";
import { artsQuery } from "@/queries";
import { colors } from "@/styles";
import { client } from "@/utils/client";
import { ArtsPageProps } from "@/utils/types";

export default async function Home() {
  const data: ArtsPageProps = await client.fetch(artsQuery);
  return (
    <>
      <PageBanner {...data.heroBanner} backgroundColor="bg-red" />
      <River
        features={data.artFeatures.upperfeatures}
        cap
        buttonColors={["bg-seaFoam", "bg-color7"]}
        bgColor={colors.red}
        shadowColor={colors.orange}
      />

      <HeadingBlock {...data.artFeatures.headingBlock} bgColor={colors.red} />

      <River
        features={data.artFeatures.lowerfeatures}
        reverse
        buttonColors={["bg-seaFoam", "bg-color7"]}
        bgColor={colors.red}
        shadowColor={colors.orange}
      />
    </>
  );
}
