import { blockContent } from '../commonFields';
import { AiOutlineBlock } from '@meronex/icons/ai';
import FaHeading from '@meronex/icons/fa/FaHeading';
export default {
  name: 'headingBlock',
  title: 'Heading Block',
  type: 'document',
  icon: AiOutlineBlock,
  fields: [
    {
      name: 'heading',
      title: 'Heading',
      type: 'string',
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      ...blockContent({
        name: 'message',
        title: 'Message',
      }),
    },
  ],
  preview: {
    select: {
      title: 'heading',
      media: 'image',
    },
    prepare({ title, media }) {
      return {
        title: title || 'Heading Block',
        media: media || FaHeading,
      };
    },
  },
};
