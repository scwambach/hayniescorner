import { CustomImageProps } from "@/utils/types";
import { urlFor } from "@/utils/urlFor";

import Image from "next/image";

export const ImageObject = (props: CustomImageProps) => {
  type Crop = {
    top: number;
    bottom: number;
    left: number;
    right: number;
  };

  function getCroppedDimensions(
    width: number,
    height: number,
    crop?: Crop
  ): { width: number; height: number } {
    if (!crop) {
      return { width, height };
    }

    const croppedWidth = width * (1 - crop.left - crop.right);
    const croppedHeight = height * (1 - crop.top - crop.bottom);

    return {
      width: Math.round(croppedWidth),
      height: Math.round(croppedHeight),
    };
  }
  return (
    <Image
      src={
        props.imageWidth
          ? urlFor(props.imageFor).width(props.imageWidth).url()
          : urlFor(props.imageFor).url()
      }
      width={
        props.imageFor.crop
          ? getCroppedDimensions(
              props.width,
              props.height,
              props.imageFor?.crop
            ).width
          : props.width
      }
      height={
        props.imageFor.crop
          ? getCroppedDimensions(
              props.width,
              props.height,
              props.imageFor?.crop
            ).height
          : props.height
      }
      blurDataURL={props.blurDataURL}
      alt={props.alt || ""}
      placeholder="blur"
      className={props.className}
      unoptimized
    />
  );
};
