import React from 'react';
import DefaultSource from 'part:sanity-plugin-media/asset-source';
import { iconSelector, objectTitle, slug, url } from '../commonFields';

export default {
  name: 'business',
  title: 'Business',
  type: 'document',
  fields: [
    { ...objectTitle },
    { ...slug({ fieldset: null }) },
    {
      name: 'type',
      title: 'Type',
      type: 'reference',
      to: [{ type: 'businessCategory' }],
    },
    ...iconSelector({ minimal: true }),
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
        sources: [DefaultSource],
      },
    },
    { ...url },
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'type.title',
      customIcon: 'customIcon.customStyleCode',
      iconImage: 'iconImage',
      media: 'image',
    },
    prepare({ title, subtitle, customIcon, media, iconImage }) {
      return {
        title,
        subtitle,
        media: media ? (
          media
        ) : customIcon ? (
          <>
            <style>
              {`
              .iconTypePreview {
                width: 35px;
                height: 35px;
                overflow: hidden;
              }
              .iconTypePreview svg {
              width: auto;
              height: 35px;
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
