import { useContext, useState } from 'react';
import { useNextSanityImage } from 'next-sanity-image';
import Image from 'next/image';
import { ImageProps, MainContext } from '@components';
import { breakpoints } from '@styles';
import { customImageBuilder, getClient } from '@utils';

interface ProgressiveImageProps extends ImageProps {
  alt?: string;
  classes?: string;
  grayScale?: boolean;
  imgHeight?: number;
  imgWidth?: number;
  isBackground?: boolean;
  mobileCrop?: boolean;
  priority?: boolean;
  quality?: number;
  thin?: boolean;
  title?: string;
}

const ProgressiveImage = ({
  alt = null,
  classes = '',
  height,
  imgHeight = null,
  imgWidth = breakpoints.xxl,
  isBackground = false,
  lqip,
  thin,
  mobileCrop,
  grayScale = false,
  priority = false,
  quality = 90,
  reference,
  title = null,
  url,
  width,
}: ProgressiveImageProps) => {
  const { windowWidth } = useContext(MainContext);
  const [loaded, setLoaded] = useState(false);

  const myCustomImageBuilder = (imageUrlBuilder) => {
    return customImageBuilder({
      imageUrlBuilder,
      imgHeight,
      imgWidth,
      isBackground,
      mobileCrop,
      quality,
      thin,
      windowWidth,
      grayScale,
    });
  };

  const imageProps: { src: string } = useNextSanityImage(
    getClient(),
    reference,
    {
      imageBuilder: myCustomImageBuilder,
    }
  );

  return (
    <Image
      alt={alt}
      title={title || alt}
      height={isBackground ? null : height}
      width={isBackground ? null : width}
      layout={isBackground ? 'fill' : 'intrinsic'}
      src={imageProps ? imageProps.src : url}
      blurDataURL={lqip}
      priority={priority}
      quality={quality}
      placeholder="blur"
      className={`progressiveImage ${
        isBackground
          ? 'max-h-full min-h-full transition-all ease-in-out max-w-full min-w-full object-cover object-center pointer-events-none '
          : ''
      }${loaded ? 'unblur ' : ''}${classes}`}
      onLoadingComplete={() => setLoaded(true)}
    />
  );
};

export { ProgressiveImage };
export default ProgressiveImage;
