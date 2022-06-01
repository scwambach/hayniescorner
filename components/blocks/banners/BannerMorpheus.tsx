import { VideoModal, Heading, BannerProps } from '@components';
import { colors } from '@styles';
import { hasHeading } from '@utils';
import BackgroundWrapper from 'components/wrappers/BackgroundWrapper';
import { AiFillPlayCircle } from '@meronex/icons/ai';
import { useState } from 'react';

interface BannerMorpheusProps extends BannerProps {}

const BannerMorpheus = ({
  backgroundColor = 'bg-color2',
  backgroundImage,
  heading,
  level = 1,
  video,
  modalVideo,
  priority,
  subHeading,
}: BannerMorpheusProps) => {
  const [active, setActive] = useState(false);
  const headingProps = {
    heading,
    level,
    subHeading,
    containerClasses:
      'pt-20 sm:pt-10 px-10 md:pt-20 md:px-24 flex flex-col justify-center text-center',
    headingClasses:
      'mb-7 text-2xl md:text-4xl text-white leading-none font-display',
    subHeadingClasses:
      'mb-7 text-xl md:text-2xl leading-none font-display text-color2',
  };

  const backgroundProps = {
    alt: heading,
    backgroundImage,
    priority,
    video,
  };

  return (
    <section className="banner citra relative font-body">
      <BackgroundWrapper {...backgroundProps}>
        <div className="md:max-w-md m-0 sm:m-10 md:m-auto sm:py-32 abosolute">
          <div className="relative">
            <div
              className={`${
                backgroundColor || ''
              } absolute top-0 left-0 w-full h-full mix-blend-multiply`}
            />
            <div
              className={`${
                backgroundColor || ''
              } hidden sm:block absolute top-0 left-0 w-full h-full opacity-70`}
            />
            <div className="relative z-10">
              {hasHeading(headingProps) && <Heading {...headingProps} />}

              {modalVideo && (
                <a
                  className="cursor-pointer block pb-16 sm:pb-8 md:pb-14"
                  onClick={() => {
                    setActive(true);
                  }}
                >
                  <AiFillPlayCircle
                    className="block m-auto"
                    color={colors.white}
                    size={70}
                  />
                </a>
              )}
            </div>
          </div>
        </div>
      </BackgroundWrapper>
      {modalVideo && (
        <VideoModal video={modalVideo} active={active} setActive={setActive} />
      )}
    </section>
  );
};

export { BannerMorpheus };
export default BannerMorpheus;
