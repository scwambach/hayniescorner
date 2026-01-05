import { EventTypes } from "@/components/blocks/EventTypes";
import { HeroBanner } from "@/components/blocks/HeroBanner";
import { LeftBanner } from "@/components/blocks/LeftBanner";
import { LinkTiles } from "@/components/blocks/LinkTiles";
import { River } from "@/components/blocks/River";
import { homeQuery } from "@/queries";
import { colors } from "@/styles";
import { client } from "@/utils/client";
import { HomePageProps } from "@/utils/types";

export async function generateMetadata() {
  const data: HomePageProps = await client.fetch(homeQuery);
  return {
    title: "Haynie's Corner Arts District",
    description: data.pageDescription,
    openGraph: {
      title: "Haynie's Corner Arts District",
      description: data.pageDescription,
      images: data.mainImage
        ? [`${data.mainImage}?w=1200&h=630&fit=crop`]
        : [`${data.heroBanner.backgroundImage.src}?w=1200&h=630&fit=crop`],
    },
  };
}

export default async function Home() {
  const data: HomePageProps = await client.fetch(homeQuery);
  return (
    <>
      <HeroBanner
        backgroundImage={data.heroBanner.backgroundImage}
        customIcon={data.heroBanner.customIcon}
      />
      <River {...data.aboutFeatures} cap />
      <EventTypes {...data.eventTypes} />
      <LinkTiles {...data.linkTiles} />
      <LeftBanner {...data.arts} />
      <River
        {...data.closerFeatures}
        reverse
        bgColor={colors.blue}
        shadowColor={colors.color7}
      />
    </>
  );
}
