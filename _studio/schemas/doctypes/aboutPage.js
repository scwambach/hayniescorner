import {
  fieldSets,
  pageDescription,
  mainImage,
  backgroundImage,
  links,
} from '../commonFields';

export default {
  name: 'aboutPage',
  title: 'About page',
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
  ],
};
