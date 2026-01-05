"use client";
import * as SVG from "@/components/svg";
import { LinkTilesProps } from "@/utils/types";
import { LinkObject } from "../modules/LinkObject";
import { Container } from "../modules/Container";
import { breakpoints } from "@/styles";

export const LinkTiles = ({ heading, tiles }: LinkTilesProps) => {
  return (
    <section className="linkTiles relative py-16  lg:py-sectionPadding bg-black">
      <SVG.Tile1 />
      <SVG.Tile2 />
      <SVG.Tile3 />
      <Container maxWidth={breakpoints.sxl}>
        <h3 className="text-blue uppercase text-center tracking-sectionHeading font-black text-3xl md:text-sectionHeading mb-20">
          {heading}
        </h3>
        <div className="flex flex-col md:flex-row md:justify-between gap-10 sxl:gap-10">
          {tiles.map(({ _key, link, customIcon }) => {
            return (
              <div key={_key} className="fader tile w-full">
                <LinkObject
                  classes="w-full rounded-2xl sxl:rounded-0 flex justify-center items-center relative p-2 py-10 sxl:py-sixty"
                  {...link}
                >
                  {customIcon && (
                    <div className="icon flex justify-center sxl:mt-6 mb-8">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: customIcon,
                        }}
                      />
                    </div>
                  )}
                  <span className="block text-tileHeading leading-base text-white text-center uppercase font-black tracking-tile">
                    {link?.copy}
                  </span>
                </LinkObject>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
};
