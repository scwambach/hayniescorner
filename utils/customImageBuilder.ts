import { breakpoints } from "@/styles";
export const customImageBuilder = ({
  imageUrlBuilder,
  imgHeight,
  imgWidth,
  isBackground,
  grayScale,
  mobileCrop,
  quality,
  thin,
  windowWidth,
}: {
  imageUrlBuilder: any;
  imgHeight?: number;
  imgWidth: number;
  isBackground?: boolean;
  grayScale?: boolean;
  mobileCrop?: boolean;
  quality?: number;
  thin?: boolean;
  windowWidth: number;
}) => {
  if (imgHeight && isBackground) {
    if (mobileCrop) {
      if (windowWidth < breakpoints.sm) {
        return imageUrlBuilder
          .width(Math.round(breakpoints.sm))
          .height(Math.round(breakpoints.sm * 1.5))
          .quality(quality)
          .format("webp")
          .saturation(grayScale ? -100 : undefined)
          .fit("clip");
      }

      if (windowWidth < breakpoints.md) {
        return imageUrlBuilder
          .width(Math.round(breakpoints.md))
          .height(Math.round(breakpoints.md * 1.1))
          .quality(quality)
          .format("webp")
          .saturation(grayScale ? -100 : undefined)
          .fit("clip");
      }

      if (windowWidth > 2000) {
        return imageUrlBuilder
          .width(imgWidth)
          .height(imgHeight)
          .quality(quality)
          .format("webp")
          .saturation(grayScale ? -100 : undefined)
          .fit("clip");
      }
    }
    return imageUrlBuilder
      .width(imgWidth)
      .height(imgHeight)
      .quality(quality)
      .format("webp")
      .fit("clip");
  }

  if (mobileCrop && isBackground) {
    if (thin) {
      if (windowWidth < breakpoints.sm) {
        return imageUrlBuilder
          .width(Math.round(breakpoints.sm))
          .height(Math.round(breakpoints.sm))
          .quality(quality)
          .format("webp")
          .saturation(grayScale ? -100 : undefined)
          .fit("clip");
      }

      if (windowWidth < breakpoints.md) {
        return imageUrlBuilder
          .width(Math.round(breakpoints.md))
          .height(200)
          .quality(quality)
          .format("webp")
          .saturation(grayScale ? -100 : undefined)
          .fit("clip");
      }

      if (windowWidth > 2000) {
        return imageUrlBuilder
          .width(imgWidth)
          .height(200)
          .quality(quality)
          .format("webp")
          .saturation(grayScale ? -100 : undefined)
          .fit("clip");
      }
    }

    if (windowWidth < breakpoints.sm) {
      return imageUrlBuilder
        .width(Math.round(breakpoints.sm))
        .height(Math.round(breakpoints.sm * 1.5))
        .quality(quality)
        .format("webp")
        .saturation(grayScale ? -100 : undefined)
        .fit("clip");
    }

    if (windowWidth < breakpoints.md) {
      return imageUrlBuilder
        .width(Math.round(breakpoints.md))
        .height(Math.round(breakpoints.md * 1.1))
        .quality(quality)
        .format("webp")
        .saturation(grayScale ? -100 : undefined)
        .fit("clip");
    }

    if (windowWidth > 2000) {
      return imageUrlBuilder
        .width(imgWidth + 600)
        .height(700)
        .quality(quality)
        .format("webp")
        .saturation(grayScale ? -100 : undefined)
        .fit("clip");
    }

    return imageUrlBuilder
      .width(imgWidth)
      .quality(quality)
      .format("webp")
      .saturation(grayScale ? -100 : undefined);
  }

  if (imgWidth && imgHeight) {
    return imageUrlBuilder
      .width(imgWidth)
      .height(imgHeight)
      .quality(quality)
      .format("webp")
      .saturation(grayScale ? -100 : undefined)
      .fit("clip");
  }

  if (windowWidth < breakpoints.sm && imgWidth > breakpoints.sm) {
    return imageUrlBuilder
      .width(Math.round(breakpoints.sm))
      .quality(quality)
      .format("webp")
      .saturation(grayScale ? -100 : undefined)
      .fit("clip");
  }

  if (windowWidth < breakpoints.md && imgWidth > breakpoints.md) {
    return imageUrlBuilder
      .width(Math.round(breakpoints.md))
      .quality(quality)
      .format("webp")
      .saturation(grayScale ? -100 : undefined)
      .fit("clip");
  }

  if (windowWidth < breakpoints.lg && imgWidth > breakpoints.lg) {
    return imageUrlBuilder
      .width(Math.round(breakpoints.lg))
      .quality(quality)
      .format("webp")
      .saturation(grayScale ? -100 : undefined)
      .fit("clip");
  }

  return imageUrlBuilder
    .width(imgWidth)
    .quality(quality)
    .format("webp")
    .saturation(grayScale ? -100 : undefined);
};
