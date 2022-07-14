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
          className={`block-container text-white max-w-smd wlg:max-w-none px-14 mx-auto wlg:px-36 py-20 ${
            image ? 'wlg:flex wlg:items-center' : ''
          }`}
          style={{
            backgroundColor: blockColor,
          }}
        >
          {image && (
            <div
              className="image mx-auto relative pb-5 wlg:pb-0 wlg:w-1/3"
              data-aos="fade-up"
              data-aos-anchor={`#${slugify(heading)}`}
              data-aos-delay={`${delayNum + 50}`}
            >
              <div className="w-56 mx-auto brightness-200">
                <ProgressiveImage {...image} grayScale imgWidth={300} />
              </div>
            </div>
          )}
          <div className="copy wlg:w-2/3 text-center wlg:text-left wlg:pl-20 mx-auto">
            {heading && !image && (
              <h4
                className="font-black uppercase tracking-sectionHeading font"
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
                data-aos-delay={`${image ? delayNum + 100 : delayNum + 50}`}
                className={`message${
                  image
                    ? ' font-black uppercase tracking-featureHeading wlg:text-headingBlock'
                    : ''
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
