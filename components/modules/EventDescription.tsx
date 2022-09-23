import { useState } from 'react';
import PortableTextModule from './PortableTextModule';

interface EventDescriptionProps {
  copy: any;
}

const EventDescription = ({ copy }: EventDescriptionProps) => {
  const [open, setOpen] = useState<boolean>(false);
  return (
    <>
      <div className={`description ${open ? 'open' : 'closed'}`}>
        <PortableTextModule text={copy} />
      </div>
      <button
        className="mt-5 mb-10 bold underline text-xl uppercase font-semibold"
        onClick={() => {
          setOpen(!open);
        }}
      >
        {`See ${open ? 'Less' : 'More'}`}
      </button>
    </>
  );
};

export { EventDescription };
export default EventDescription;
