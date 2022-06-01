import {
  fieldSets,
  pageDescription,
  mainImage,
  backgroundImage,
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
          of: [
            {
              name: 'featureObj',
              title: 'Feature',
              type: 'reference',
              to: [{ type: 'feature' }],
            },
          ],
        },
      ],
    },
  ],
};
