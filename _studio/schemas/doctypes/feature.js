import React from 'react';
import * as Icons from '@meronex/icons/fa';
import { blockContent, link } from '../commonFields';
import DefaultSource from 'part:sanity-plugin-media/asset-source';

export const DynamicFaIcon = (name) => {
  const IconComponent = Icons[name];

  return IconComponent;
};

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
    { ...link },
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
