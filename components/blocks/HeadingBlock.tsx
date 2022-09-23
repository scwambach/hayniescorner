import Container from '@components/modules/Container';
import PortableTextModule from '@components/modules/PortableTextModule';
import ProgressiveImage from '@components/modules/ProgressiveImage';
import { HeadingShape } from '@components/svg';
import { ImageProps } from '@components/types/ImageProps';
import { breakpoints, colors } from '@styles';
import { slugify } from '@utils';

interface HeadingBlockProps {
  bgColor?: string;
  blockColor?: string;
  delay?: number;
  image?: ImageProps;
  heading?: string;
  message?: any;
}

const HeadingBlock = ({
  delay = 0,
  image,
  heading,
  bgColor = colors.color6,
  blockColor = colors.orange,
  message,
}: HeadingBlockProps) => {
  const delayNum = delay * 100;
  return (
    <section
      className="headingblock relative py-10 lg:py-5 "
      id={slugify(heading)}
      style={{
        backgroundColor: bgColor,
      }}
    >
      <HeadingShape />
      <Container maxWidth={breakpoints.wlg}>
        <div
          data-aos="fade-up"
          data-aos-delay={`${delayNum}`}
          className={`fader block-container text-white content-box rounded-2xl max-w-smd wlg:max-w-none px-5 smd:px-14 mx-auto wlg:px-36 py-20 ${
            image.url ? 'wlg:flex wlg:items-center' : ''
          }`}
          style={{
            backgroundColor: blockColor,
          }}
        >
          {image.url && (
            <div
              className="fader image mx-auto relative pb-5 wlg:pb-0 wlg:w-1/3"
              data-aos="fade-up"
              data-aos-anchor={`#${slugify(heading)}`}
              data-aos-delay={`${delayNum + 50}`}
            >
              <div className="w-56 mx-auto brightness-200">
                <ProgressiveImage {...image} grayScale imgWidth={300} />
              </div>
            </div>
          )}
          <div
            className={`fader copy text-center mx-auto${
              image.url ? ' wlg:text-left wlg:w-2/3 wlg:pl-20' : ''
            }`}
          >
            {heading && !image.url && (
              <h4
                className="fader font-black uppercase tracking-featureHeading text-iconHeading wlg:text-featHeading mb-5"
                data-aos="fade-up"
                data-aos-anchor={`#${slugify(heading)}`}
                data-aos-delay={`${delayNum + 50}`}
              >
                {heading}
              </h4>
            )}
            {message && (
              <div
                data-aos="fade-up"
                data-aos-anchor={`#${slugify(heading)}`}
                data-aos-delay={`${image.url ? delayNum + 100 : delayNum + 50}`}
                className={`fader message uppercase${
                  image.url
                    ? ' font-black tracking-featureHeading wlg:text-headingBlock'
                    : ' font-semibold tracking-wider'
                }`}
              >
                <PortableTextModule text={message} />
              </div>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
};

export { HeadingBlock };
export default HeadingBlock;
