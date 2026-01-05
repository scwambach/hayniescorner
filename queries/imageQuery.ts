import { groq } from "next-sanity";

const imageQuery = `{
  "src": asset->url,
  "height": asset -> metadata.dimensions.height,
  "width": asset -> metadata.dimensions.width,
  "blurDataURL": asset-> metadata.lqip,
  "imageFor": {
    ...,
  }
}`;

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
