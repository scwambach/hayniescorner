import Link from 'next/link';
import { FaQuoteLeft } from '@meronex/icons/fa';
import BlockContent from '@sanity/block-content-to-react';
import { ProgressiveImage, Button, LinkObject } from '@components';
import { breakpoints } from '@styles';

interface PortableProps {
  text?: any[];
}

const BlockRenderer = (props) => {
  const { node, children } = props;
  const { style = 'normal' } = node;
  if (style === 'blockquote') {
    return (
      <blockquote>
        <FaQuoteLeft size={80} />
        {children}
      </blockquote>
    );
  }
  return BlockContent.defaultSerializers.types.block(props);
};

const PortableTextModule = ({ text }: PortableProps) => {
  const serializers = {
    types: {
      image: ({ node }) => (
        <ProgressiveImage
          {...node.asset}
          imageWidth={breakpoints.xxl}
          isBackground={false}
        />
      ),
      buttons: ({ node: { links } }) => (
        <div className="buttons md:flex">
          {links.map((link, index) => (
            <Button
              key={link._key}
              index={index}
              classes="w-full block md:inline-block mx-auto md:mx-0 sm:w-full md:w-auto"
            >
              <LinkObject {...link} />
            </Button>
          ))}
        </div>
      ),
      block: BlockRenderer,
    },

    marks: {
      link: ({ mark, children }) => {
        const { blank, href } = mark;
        return blank ? (
          <a href={href} target="_blank" rel="noopener noreferrer">
            {children}
          </a>
        ) : (
          <Link href={href}>
            <a>{children}</a>
          </Link>
        );
      },
    },
  };

  return (
    <div className="block">
      <BlockContent
        projectId={process.env.SANITY_ID}
        dataset={process.env.SANITY_DATASET}
        serializers={serializers}
        renderContainerOnSingleChild
        blocks={text}
      />
    </div>
  );
};

export { PortableTextModule };
export default PortableTextModule;
