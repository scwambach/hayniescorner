import React from 'react';
import {
  fieldSets,
  pageDescription,
  mainImage,
  backgroundImage,
  iconSelector,
  blockContent,
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
      type: 'object',
      options: {
        collapsible: true,
        collapsed: true,
      },
      fields: [...backgroundImage({ required: true }), ...iconSelector()],
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
          of: [
            {
              name: 'feature',
              title: 'Feature',
              type: 'object',
              fields: [
                {
                  name: 'featureObj',
                  title: 'Feature',
                  type: 'reference',
                  to: [{ type: 'feature' }],
                },
              ],
              preview: {
                select: {
                  title: 'featureObj.title',
                  media: 'featureObj.image',
                },
                prepare({ title, media }) {
                  return {
                    title,
                    subtitle: 'Feature',
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
        { name: 'title', title: 'Heading', type: 'string' },
        ...backgroundImage({ required: true }),
        { ...blockContent() },
        { ...link },
        {
          name: 'items',
          title: 'Items',
          type: 'array',
          of: [
            {
              name: 'item',
              title: 'Item',
              type: 'object',
              fields: [
                {
                  name: 'iconItem',
                  title: 'Icon Item',
                  type: 'reference',
                  to: [{ type: 'iconItem' }],
                },
              ],
              preview: {
                select: {
                  title: 'iconItem.title',
                  subtitle: 'iconItem.copy',
                  iconImage: 'iconItem.iconImage',
                  customIcon: 'iconItem.customIcon.customStyleCode',
                  media: 'iconItem.icon',
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
            },
          ],
        },
      ],
    },
  ],
};
