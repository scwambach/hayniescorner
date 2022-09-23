import { groq } from 'next-sanity';

const imageQuery = ({
  name,
  fieldName,
}: {
  name: string;
  fieldName?: string;
}) => {
  return groq`
  "${fieldName || name}": {
    defined( ${name} ) => { "reference": ${name} },
    defined( ${name}.asset->url ) => { "url": ${name}.asset->url },
    defined( ${name}.asset->metadata.lqip ) => { "lqip": ${name}.asset->metadata.lqip },
    defined( ${name}.crop ) => { "crop": ${name}.crop },
    defined( ${name}.hotspot ) => { "hotspot": ${name}.hotspot },
    defined( ${name}.asset->metadata.dimensions.height ) => { "height": ${name}.asset->metadata.dimensions.height },
    defined( ${name}.asset->metadata.dimensions.width ) => { "width": ${name}.asset->metadata.dimensions.width },
    defined( ${name}.asset->metadata.dimensions.aspectRatio ) => { "aspectRatio": ${name}.asset->metadata.dimensions.aspectRatio },
  }
  `;
};

export const assetQuery = () => {
  return groq`
  "asset": {
    "reference": asset,
    "url": asset->url,
    "lqip": asset->metadata.lqip,
    "crop": crop,
    "hotspot": hotspot,
    "height": asset->metadata.dimensions.height,
    "width": asset->metadata.dimensions.width,
    "aspectRatio": asset->metadata.dimensions.aspectRatio,
  }
  `;
};

export { imageQuery };
export default imageQuery;
