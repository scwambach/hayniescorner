import { BannerProps } from '@components';
import BackgroundWrapper from 'components/wrappers/BackgroundWrapper';

interface LogoBannerProps extends BannerProps {
  align: string;
  customIcon: any;
}

const LogoBanner = ({
  backgroundImage,
  backgroundColor = 'bg-gradBase',
  video,
  customIcon,
  priority,
}: LogoBannerProps) => {
  const backgroundProps = {
    backgroundColor,
    backgroundImage,
    priority,
    video,
  };

  const logo = customIcon ? customIcon.customStyleCode.code : null;

  return (
    <section className={`banner logo relative font-body`}>
      <BackgroundWrapper
        gradient
        {...backgroundProps}
        alt="Photo of Haynie's Corner"
      >
        {logo && (
          <div
            className="svg py-logoBanner m-auto"
            dangerouslySetInnerHTML={{
              __html: logo,
            }}
          />
        )}
      </BackgroundWrapper>
    </section>
  );
};

export { LogoBanner };
export default LogoBanner;
