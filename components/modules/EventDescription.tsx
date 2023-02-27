import { useState } from 'react';
import PortableTextModule from './PortableTextModule';

interface EventDescriptionProps {
  copy: any;
}

const EventDescription = ({ copy }: EventDescriptionProps) => {
  const [open, setOpen] = useState<boolean>(false);
  return (
    <>
      {copy && (
        <div className="description">
          <PortableTextModule text={copy} />
        </div>
      )}
    </>
  );
};

export { EventDescription };
export default EventDescription;
