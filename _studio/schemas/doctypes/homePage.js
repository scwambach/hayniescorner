import React from 'react';
import {
  fieldSets,
  pageDescription,
  mainImage,
  backgroundImage,
  iconSelector,
  blockContent,
  links,
  link,
} from '../commonFields';

export default {
  name: 'homePage',
  title: 'Home page',
  type: 'document',
  fieldsets: fieldSets,
  fields: [
    ...pageDescription,
    ...mainImage({
      fieldset: 'meta',
    }),
    ...mainImage({
      name: 'previewImage',
      title: 'Preview Image',
      description: 'The image that is shown when linked to internally',
      fieldset: 'meta',
    }),
    {
      fieldset: 'pageBody',
      name: 'heroBanner',
      title: 'Hero Banner',
      type: 'object',
      options: {
        collapsible: true,
        collapsed: true,
      },
      fields: [
        ...backgroundImage({ required: true }),
        ...iconSelector({ requireIcon: true, hideImage: true }),
      ],
    },
    {
      name: 'aboutFeatures',
      title: 'About Features',
      type: 'object',
      fieldset: 'pageBody',
      options: {
        collapsible: true,
        collapsed: true,
      },
      fields: [
        {
          name: 'features',
          title: 'Features',
          type: 'array',
          validation: (Rule) => Rule.required().min(1),
          of: [
            {
              name: 'featureObj',
              title: 'Feature',
              type: 'object',
              fields: [
                {
                  name: 'feature',
                  title: 'Feature',
                  type: 'reference',
                  validation: (Rule) => Rule.required(),
                  to: [{ type: 'feature' }],
                },
                { ...links({ name: 'extraLinks', title: 'Extra Links' }) },
              ],
              preview: {
                select: {
                  title: 'feature.title',
                  media: 'feature.image',
                },
                prepare({ title, media }) {
                  return {
                    title,
                    media,
                  };
                },
              },
            },
          ],
        },
      ],
    },
    {
      name: 'eventTypes',
      fieldset: 'pageBody',
      title: 'Event Types',
      type: 'object',
      options: {
        collapsible: true,
        collapsed: true,
      },
      fields: [
        {
          name: 'title',
          title: 'Heading',
          type: 'string',
          validation: (Rule) => Rule.required(),
        },
        ...backgroundImage({ required: true }),
        { ...blockContent() },
        { ...links() },
        {
          name: 'items',
          title: 'Items',
          type: 'array',
          validation: (Rule) => Rule.required().min(3),
          of: [
            {
              name: 'iconItem',
              title: 'Icon Item',
              type: 'reference',
              validation: (Rule) => Rule.required(),
              to: [{ type: 'iconItem' }],
            },
          ],
        },
      ],
    },
    {
      name: 'linkTiles',
      title: 'Link Tiles',
      fieldset: 'pageBody',
      type: 'object',
      options: {
        collapsible: true,
        collapsed: true,
      },
      fields: [
        {
          name: 'heading',
          title: 'Heading',
          type: 'string',
        },
        {
          name: 'tiles',
          title: 'Tiles',
          type: 'array',
          validation: (Rule) => Rule.required().min(2).max(3),
          of: [
            {
              name: 'tile',
              title: 'Tile',
              type: 'object',
              fields: [...iconSelector(), { ...link }],
              preview: {
                select: {
                  title: 'link.copy',
                  iconImage: 'iconImage',
                  customIcon: 'customIcon.customStyleCode',
                },
                prepare({ title, iconImage, customIcon }) {
                  return {
                    title: `${title}`,
                    media: customIcon ? (
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
            },
          ],
        },
      ],
    },
    {
      name: 'arts',
      fieldset: 'pageBody',
      title: 'Arts Banner',
      type: 'object',
      options: {
        collapsible: true,
        collapsed: true,
      },
      fields: [
        {
          name: 'title',
          title: 'Heading',
          type: 'string',
          validation: (Rule) => Rule.required(),
        },
        ...backgroundImage({ required: true }),
        { ...blockContent() },
        { ...links() },
      ],
    },
    {
      name: 'closerFeatures',
      title: 'Closer Features',
      type: 'object',
      fieldset: 'pageBody',
      options: {
        collapsible: true,
        collapsed: true,
      },
      fields: [
        {
          name: 'features',
          title: 'Features',
          type: 'array',
          validation: (Rule) => Rule.required().min(1),
          of: [
            {
              name: 'featureObj',
              title: 'Feature',
              type: 'object',
              fields: [
                {
                  name: 'feature',
                  title: 'Feature',
                  type: 'reference',
                  validation: (Rule) => Rule.required(),
                  to: [{ type: 'feature' }],
                },
                { ...links({ name: 'extraLinks', title: 'Extra Links' }) },
              ],
              preview: {
                select: {
                  title: 'feature.title',
                  media: 'feature.image',
                },
                prepare({ title, media }) {
                  return {
                    title,
                    media,
                  };
                },
              },
            },
          ],
        },
      ],
    },
  ],
};
