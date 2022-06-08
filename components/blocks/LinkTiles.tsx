import {
  Container,
  ImageProps,
  LinkProps,
  ImageIcon,
  LinkObject,
} from '@components';

import { breakpoints } from '@styles';
import { Tile1, Tile2, Tile3 } from '@svgs/Tiles';
import { link } from 'fs';

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
      <Tile1 />
      <Tile2 />
      <Tile3 />
      <Container maxWidth={breakpoints.xl}>
        <h3 className="text-blue uppercase text-center tracking-sectionHeading font-black text-3xl md:text-sectionHeading">
          {heading}
        </h3>
        <div className="flex justify-between">
          {tiles.map(({ _key, link, customIcon, iconImage }) => (
            <LinkObject
              key={_key}
              classes="tile text-tileHeading text-white font-black tracking-sectionHeading uppercase relative"
              {...link}
            >
              <div className="icon flex justify-center">
                <ImageIcon customIcon={customIcon} iconImage={iconImage} />
              </div>
              {link.copy}
            </LinkObject>
          ))}
        </div>
      </Container>
    </section>
  );
};

export { LinkTiles };
export default LinkTiles;
