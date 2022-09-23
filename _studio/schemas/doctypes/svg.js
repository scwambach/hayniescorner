import React from 'react';

export default {
  name: 'svg',
  title: 'SVG',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'customStyleCode',
      title: 'SVG Code',
      type: 'code',
      options: {
        language: 'html',
      },
    },
  ],
  preview: {
    select: {
      title: 'title',
      media: 'customStyleCode',
    },
    prepare({ title, media }) {
      return {
        title: `${title}`,
        media: (
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
              dangerouslySetInnerHTML={{
                __html: media.code,
              }}
            />
          </>
        ),
      };
    },
  },
};
