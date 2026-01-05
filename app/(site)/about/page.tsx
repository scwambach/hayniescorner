import { HeadingBlock } from "@/components/blocks/HeadingBlock";
import { PageBanner } from "@/components/blocks/PageBanner";
import { River } from "@/components/blocks/River";
import { Button } from "@/components/modules/Button";
import { LinkObject } from "@/components/modules/LinkObject";
import { aboutQuery } from "@/queries";
import { colors } from "@/styles";
import { isEven } from "@/utils";
import { client } from "@/utils/client";
import { AboutPageProps } from "@/utils/types";

export default async function AboutPage() {
  const data: AboutPageProps = await client.fetch(aboutQuery);
  return (
    <>
      <PageBanner {...data.heroBanner} backgroundColor="bg-color6" />
      <River
        {...data.aboutFeatures}
        cap
        bgColor={colors.black}
        shadowColor={colors.color6}
      />
      <div className="bg-color6 pb-sectionPadding">
        <River
          {...data.hcadaSection}
          bgColor={colors.color6}
          shadowColor={colors.black}
        />
        <HeadingBlock
          {...data.hcadaSection.headingBlock}
          blockColor={colors.black}
        />
        {data.hcadaSection.links.map((link, index) => (
          <div key={link._key} className="mx-auto text-center pt-14">
            <Button
              key={link._key}
              index={index}
              className={`w-full text-white block md:inline-block mx-auto md:mx-0 sm:w-full md:w-auto ${
                isEven(index) ? "bg-color1" : "bg-orange"
              }`}
            >
              <LinkObject {...link} />
            </Button>
          </div>
        ))}
      </div>
      <River
        {...data.footerFeatures}
        reverse
        buttonColors={["bg-darkOrange", "bg-color6"]}
        bgColor={colors.black}
        shadowColor={colors.color6}
      />
    </>
  );
}
