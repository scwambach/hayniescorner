import {
  VideoModal,
  Heading,
  ProgressiveImage,
  BannerProps,
} from '@components';
import { breakpoints, colors } from '@styles';
import { hasHeading, isEven } from '@utils';
import { AiFillPlayCircle } from '@meronex/icons/ai';
import { useState } from 'react';

interface BannerMercuryProps extends BannerProps {
  index?: number;
}

const BannerMercury = ({
  backgroundColor = 'bg-color1',
  backgroundImage,
  heading,
  level = 1,
  message,
  modalVideo,
  priority,
  index,
  subHeading,
}: BannerMercuryProps) => {
  const [active, setActive] = useState(false);

  const headingProps = {
    heading,
    level,
    message,
    subHeading,
    containerClasses: `pt-20 pb-12 lg:py-24 w-full md:w-1/2 px-12 lg:px-24 flex flex-col justify-center buttons-white-copy${
      typeof index === 'number' ? (isEven(index) ? ' md:items-end' : '') : ''
    }${backgroundColor ? ` ${backgroundColor}` : ''}`,
    headingClasses: 'mb-7 leading-none font-display',
    headingContainerClasses: 'flex flex-col-reverse lg:max-w-md lg:w-full',
    messageClasses: 'lg:max-w-md lg:w-full',
    subHeadingClasses: 'mb-7 uppercase leading-none',
    headCompressor: 1.4,
    subCompressor: 3,
  };

  return (
    <section className="banner citra relative font-body">
      <div
        className={`md:flex ${
          typeof index === 'number'
            ? isEven(index)
              ? 'flex-row-reverse'
              : 'flex-row'
            : ''
        }`}
      >
        <div className="citra-image pb-video md:pb-0 m-auto -mb-12 mt-12 md:mb-0 md:mt-0 shadow-lg md:shadow-none w-90 md:w-1/2 relative">
          <ProgressiveImage
            isBackground
            priority={priority}
            alt={heading}
            imgWidth={breakpoints.xxl}
            {...backgroundImage}
          />
          {modalVideo && (
            <a
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 cursor-pointer"
              onClick={() => {
                setActive(true);
              }}
            >
              <AiFillPlayCircle color={colors.white} size={100} />
            </a>
          )}
        </div>

        {hasHeading(headingProps) && <Heading {...headingProps} />}
      </div>

      {modalVideo && (
        <VideoModal video={modalVideo} active={active} setActive={setActive} />
      )}
    </section>
  );
};

export { BannerMercury };
export default BannerMercury;
