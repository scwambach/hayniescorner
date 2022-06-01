import { blockContent, links } from '../commonFields';
import DefaultSource from 'part:sanity-plugin-media/asset-source';

export default {
  name: 'feature',
  title: 'Feature',
  type: 'document',
  fields: [
    { name: 'title', title: 'Heading', type: 'string' },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
        sources: [DefaultSource],
      },
    },
    { ...blockContent() },
    { ...links() },
  ],
  preview: {
    select: {
      title: 'title',
      media: 'image',
    },
    prepare({ title, media }) {
      return {
        title,
        subtitle: 'Feature',
        media,
      };
    },
  },
};
