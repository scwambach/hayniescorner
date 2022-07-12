import { blockContent, links } from '../commonFields';
import { AiOutlineBlock } from '@meronex/icons/ai';

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
};
