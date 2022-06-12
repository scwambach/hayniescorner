import { Container, Heading, ComponentProps } from '@components';
import { hasHeading } from '@utils';
import { breakpoints } from '@styles';

interface PageBannerProps extends ComponentProps {}

const PageBanner = (props: PageBannerProps) => {
  return (
    <div className="pagebanner relative font-body">
      <Container maxWidth={breakpoints.xxl}>
        <code>
          <pre
            style={{
              fontFamily: 'monospace',
              display: 'block',
              padding: '50px',
              color: '#88ffbf',
              backgroundColor: 'black',
              textAlign: 'left',
              whiteSpace: 'pre-wrap',
            }}
          >
            {JSON.stringify(props, null, '    ')}
          </pre>
        </code>
      </Container>
    </div>
  );
};

export { PageBanner };
export default PageBanner;
