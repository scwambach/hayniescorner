import { noOrphans } from '@utils';
import { PortableTextModule } from '@components';
import ReactFitText from 'react-fittext';

interface HeadingProps {
  containerClasses?: string;
  heading?: string;
  headingClasses?: string;
  headingContainerClasses?: string;
  level?: number;
  message?: any | any[];
  messageClasses?: string;
  subHeading?: string;
  subHeadingClasses?: string;
  headCompressor?: number;
  headMinFontSize?: number;
  headMaxFontSize?: number;
  subCompressor?: number;
  subMinFontSize?: number;
  subMaxFontSize?: number;
  mesCompressor?: number;
  mesMinFontSize?: number;
  mesMaxFontSize?: number;
}

const TopHeading = ({
  heading,
  subHeading,
  headingClasses,
  subHeadingClasses,
  headCompressor,
  headMinFontSize,
  headMaxFontSize,
  subCompressor,
  subMinFontSize,
  subMaxFontSize,
}) => {
  return (
    <>
      {heading && (
        <ReactFitText
          compressor={headCompressor}
          minFontSize={headMinFontSize}
          maxFontSize={headMaxFontSize}
        >
          <span className={`block ${headingClasses || ''}`}>
            {noOrphans(heading)}
          </span>
        </ReactFitText>
      )}
      {subHeading && (
        <ReactFitText
          compressor={subCompressor}
          minFontSize={subMinFontSize}
          maxFontSize={subMaxFontSize}
        >
          <span className={`block ${subHeadingClasses || ''}`}>
            {noOrphans(subHeading)}
          </span>
        </ReactFitText>
      )}
    </>
  );
};

const Heading = ({
  containerClasses,
  heading,
  headingClasses,
  headingContainerClasses,
  level,
  message,
  messageClasses,
  subHeading,
  subHeadingClasses,
  headCompressor = 1.5,
  headMinFontSize = 25,
  headMaxFontSize = 80,
  subCompressor = 2,
  subMinFontSize = 18,
  subMaxFontSize = 70,
  mesCompressor = 4,
  mesMinFontSize = 16,
  mesMaxFontSize = 32,
}: HeadingProps) => {
  const headingProps = {
    heading,
    headingClasses,
    subHeading,
    subHeadingClasses,
    headCompressor,
    headMinFontSize,
    headMaxFontSize,
    subCompressor,
    subMinFontSize,
    subMaxFontSize,
  };

  return (
    <div className={`contentContainer heading ${containerClasses || ''}`}>
      {level === 1 ? (
        <h1 className={headingContainerClasses || ''}>
          <TopHeading {...headingProps} />
        </h1>
      ) : level === 2 ? (
        <h2 className={headingContainerClasses || ''}>
          <TopHeading {...headingProps} />
        </h2>
      ) : level === 3 ? (
        <h3 className={headingContainerClasses || ''}>
          <TopHeading {...headingProps} />
        </h3>
      ) : level === 4 ? (
        <h4 className={headingContainerClasses || ''}>
          <TopHeading {...headingProps} />
        </h4>
      ) : (
        <h5 className={headingContainerClasses || ''}>
          <TopHeading {...headingProps} />
        </h5>
      )}
      {message && (
        <div className={`${messageClasses || ''}`}>
          <ReactFitText
            compressor={mesCompressor}
            minFontSize={mesMinFontSize}
            maxFontSize={mesMaxFontSize}
          >
            <PortableTextModule text={message} />
          </ReactFitText>
        </div>
      )}
    </div>
  );
};

export { Heading };
export default Heading;
