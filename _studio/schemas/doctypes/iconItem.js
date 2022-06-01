import { iconSelector, link } from '../commonFields';
import React from 'react';

export default {
  name: 'iconItem',
  title: 'Icon item',
  type: 'document',
  fields: [
    ...iconSelector(),
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    { ...link },
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'copy',
      iconImage: 'iconImage',
      customIcon: 'customIcon.customStyleCode',
    },
    prepare({ title, subtitle, iconImage, customIcon }) {
      return {
        title: title || subtitle,
        subtitle: title ? subtitle : null,
        media: customIcon ? (
          <>
            <style>
              {`.iconTypePreview svg {
              width: 100%;
            }`}
            </style>
            <div
              className="iconTypePreview"
              style={{ width: '100%' }}
              dangerouslySetInnerHTML={{
                __html: customIcon.code,
              }}
            />
          </>
        ) : (
          iconImage
        ),
      };
    },
  },
};
