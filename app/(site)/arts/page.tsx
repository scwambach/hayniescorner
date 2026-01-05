import { HeadingBlock } from "@/components/blocks/HeadingBlock";
import { PageBanner } from "@/components/blocks/PageBanner";
import { River } from "@/components/blocks/River";
import { artsQuery } from "@/queries";
import { colors } from "@/styles";
import { client } from "@/utils/client";
import { ArtsPageProps } from "@/utils/types";

export async function generateMetadata() {
  const data: ArtsPageProps = await client.fetch(artsQuery);
  return {
    title: "Arts - Haynie's Corner Arts District",
    description: data.pageDescription,
    openGraph: {
      title: "Arts - Haynie's Corner Arts District",
      description: data.pageDescription,
      images:
        data.previewImage && data.previewImage.src
          ? [`${data.previewImage.src}?w=1200&h=630&fit=crop`]
          : [`${data.heroBanner.backgroundImage.src}?w=1200&h=630&fit=crop`],
    },
  };
}

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
