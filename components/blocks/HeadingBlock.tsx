import { HeadingShape } from '@components/svg';

interface HeadingBlockProps {}

const HeadingBlock = (props: HeadingBlockProps) => {
  return (
    <div className="headingblock">
      <HeadingShape />
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
    </div>
  );
};

export { HeadingBlock };
export default HeadingBlock;
