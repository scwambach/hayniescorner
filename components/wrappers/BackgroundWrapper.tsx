import { useEffect, useState } from 'react';
import ReactPlayer from 'react-player';
import { ProgressiveImage, ImageProps } from '@components';
import { breakpoints } from '@styles';
import { InView } from 'react-intersection-observer';

interface BackgroundWrapperProps {
  alt?: string;
  backgroundClasses?: string;
  backgroundColor?: string;
  backgroundImage?: ImageProps;
  children?: any | any[];
  gradient?: boolean;
  grayScale?: boolean;
  hardLight?: boolean;
  priority?: boolean;
  thin?: boolean;
  video?: string;
}

const BackgroundWrapper = ({
  alt,
  backgroundColor,
  backgroundImage,
  children,
  gradient,
  grayScale,
  hardLight,
  priority,
  thin,
  video,
}: BackgroundWrapperProps) => {
  const [visible, setVisible] = useState(false);
  const [hasWindow, setHasWindow] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setHasWindow(true);
    }
  }, []);

  return (
    <div className="backgroundWrapper">
      <div className="mx-auto">
        <div
          className={`relative ${backgroundColor ? ` ${backgroundColor}` : ''}`}
        >
          {backgroundImage && (
            <div className="absolute inset-0">
              <ProgressiveImage
                mobileCrop
                thin={thin}
                isBackground
                priority={priority}
                alt={alt || 'Hero Banner Image'}
                imgWidth={breakpoints.xxl}
                grayScale={grayScale}
                {...backgroundImage}
              />
            </div>
          )}
          {video && hasWindow && (
            <InView>
              {({ inView, ref }) => {
                if (inView) {
                  setVisible(true);
                }
                return (
                  <div className="absolute overflow-hidden h-full top-0 left-0 w-full">
                    <div
                      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-video"
                      ref={ref}
                    >
                      {visible && (
                        <ReactPlayer
                          className="react-player"
                          url={video}
                          playing={inView}
                          muted
                          loop
                          width="100%"
                          height="100%"
                        />
                      )}
                    </div>
                  </div>
                );
              }}
            </InView>
          )}

          {backgroundColor && (video || backgroundImage) && (
            <>
              <div
                className={`absolute layer1 inset-0 ${backgroundColor} ${
                  hardLight ? 'mix-blend-color' : 'mix-blend-multiply'
                }`}
              />
              <div
                className={`absolute ${
                  gradient ? 'layer2 opacity-50 ' : 'opacity-60 '
                }inset-0  ${backgroundColor}`}
              />
            </>
          )}
          <div className="content relative mx-auto">{children}</div>
        </div>
      </div>
    </div>
  );
};

export { BackgroundWrapper };
export default BackgroundWrapper;
