import {
  ComponentProps,
  Container,
  Heading,
  PortableTextModule,
} from '@components';
import { hasHeading } from '@utils';
import { breakpoints } from '@styles';
import { HiOutlineChevronDown, HiOutlineChevronUp } from '@meronex/icons/hi';
import { useRef, useState } from 'react';

interface AccordionProps extends ComponentProps {
  items: {
    _key;
    copy: any[] | any;
    title: string;
  }[];
}

const Accordion = ({
  heading,
  subHeading,
  message,
  containerClasses = 'py-24 transition-all ease-in-out flex flex-col justify-center text-center max-w-lg m-auto',
  items,
}: AccordionProps) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const headingProps = {
    containerClasses,
    heading,
    headingClasses:
      'mb-7 text-3xl md:text-4xl lg:text-5xl leading-none font-display',
    level: 2,
    message,
    messageClasses: 'text-base md:text-2xl',
    subHeading,
    subHeadingClasses:
      'mb-7 text-2xl md:text-3xl lg:text-4xl leading-none font-display',
  };
  return (
    <div className="accordion relative font-body">
      <Container maxWidth={breakpoints.lg}>
        {hasHeading(headingProps) && <Heading {...headingProps} />}
        {items.map((item, index) => {
          const isActive = activeIndex === index;
          const contentEl = useRef<HTMLDivElement>(null);
          return (
            <div
              key={item._key}
              className={`item border ${
                isActive ? 'bg-color1' : 'bg-color2'
              } rounded-md p-5${index > 0 ? ' mt-5' : ''}`}
            >
              <div
                className="text-xl cursor-pointer flex justify-between items-center"
                onClick={() => {
                  if (isActive) {
                    setActiveIndex(null);
                  } else {
                    setActiveIndex(index);
                  }
                }}
              >
                <span>{item.title}</span>
                {isActive ? <HiOutlineChevronUp /> : <HiOutlineChevronDown />}
              </div>

              <div
                ref={contentEl}
                className={`transition-all ease-in-out overflow-hidden text-base duration-300 buttons-white-copy${
                  isActive ? ' mt-5' : ''
                }`}
                style={
                  isActive
                    ? { height: contentEl.current?.scrollHeight }
                    : { height: '0px' }
                }
              >
                <PortableTextModule text={item.copy} />
              </div>
            </div>
          );
        })}
      </Container>
    </div>
  );
};

export { Accordion };
export default Accordion;
