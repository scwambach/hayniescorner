import {
  backgroundImage,
  fieldSets,
  links,
  mainImage,
  pageDescription,
} from '../commonFields';

export default {
  name: 'artsPage',
  title: 'Arts Page',
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
      name: 'heroBanner',
      title: 'Banner',
      fieldset: 'pageBody',
      type: 'object',
      options: {
        collapsed: true,
        collapsible: true,
      },
      fields: [
        ...backgroundImage({ required: true }),
        {
          name: 'heading',
          title: 'Heading',
          type: 'string',
        },
      ],
    },
    {
      name: 'artFeatures',
      title: 'Features',
      type: 'object',
      fieldset: 'pageBody',
      options: {
        collapsible: true,
        collapsed: true,
      },
      fields: [
        {
          name: 'upperfeatures',
          title: 'Upper Features',
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
        {
          name: 'headingBlock',
          title: 'Heading Block',
          validation: (Rule) => Rule.required(),
          type: 'reference',
          to: [{ type: 'headingBlock' }],
        },
        {
          name: 'lowerfeatures',
          title: 'Lower Features',
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
