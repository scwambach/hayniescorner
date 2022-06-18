import {
  Container,
  ImageProps,
  LinkProps,
  ImageIcon,
  LinkObject,
} from '@components';

import { breakpoints } from '@styles';
import * as SVG from '@svgs';

interface LinkTilesProps {
  heading?: string;
  delay?: number;
  tiles: {
    _key?: string;
    customIcon?: string;
    iconImage?: ImageProps;
    link?: LinkProps;
  }[];
}

const LinkTiles = ({ heading, tiles, delay = 0 }: LinkTilesProps) => {
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
          {tiles.map(({ _key, link, customIcon, iconImage }, index) => {
            const numberOrder = (delay || index) * 50;

            return (
              <div
                key={_key}
                className="tile w-full"
                data-aos="fade-up"
                data-aos-delay={`${numberOrder}`}
              >
                <LinkObject
                  classes="w-full rounded-2xl sxl:rounded-0 flex justify-center items-center relative p-2 py-10 sxl:py-sixty"
                  {...link}
                >
                  <div className="icon flex justify-center sxl:mt-6 mb-8">
                    <ImageIcon customIcon={customIcon} iconImage={iconImage} />
                  </div>
                  <span className="block text-tileHeading leading-base text-white text-center uppercase font-black tracking-tile">
                    {link.copy}
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

export { LinkTiles };
export default LinkTiles;
