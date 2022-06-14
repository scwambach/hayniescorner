import {
  Container,
  ImageProps,
  LinkProps,
  ImageIcon,
  LinkObject,
} from '@components';

import { breakpoints } from '@styles';
import * as Tile from '@svgs/Tiles';

interface LinkTilesProps {
  heading?: string;
  tiles: {
    _key?: string;
    customIcon?: string;
    iconImage?: ImageProps;
    link?: LinkProps;
  }[];
}

const LinkTiles = ({ heading, tiles }: LinkTilesProps) => {
  return (
    <section className="linkTiles relative py-16  lg:py-sectionPadding bg-black">
      <Tile.Tile1 />
      <Tile.Tile2 />
      <Tile.Tile3 />
      <Container maxWidth={breakpoints.sxl}>
        <h3 className="text-blue uppercase text-center tracking-sectionHeading font-black text-3xl md:text-sectionHeading mb-20">
          {heading}
        </h3>
        <div className="flex flex-col md:flex-row md:justify-between gap-10 sxl:gap-10">
          {tiles.map(({ _key, link, customIcon, iconImage }) => (
            <LinkObject
              key={_key}
              classes="tile  w-full rounded-2xl sxl:rounded-0 flex justify-center items-center relative p-2 py-10 sxl:py-sixty"
              {...link}
            >
              <div className="icon flex justify-center sxl:mt-6 mb-8">
                <ImageIcon customIcon={customIcon} iconImage={iconImage} />
              </div>
              <span className="block text-tileHeading leading-base text-white text-center uppercase font-black tracking-tile">
                {link.copy}
              </span>
            </LinkObject>
          ))}
        </div>
      </Container>
    </section>
  );
};

export { LinkTiles };
export default LinkTiles;
