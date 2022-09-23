import {
  fieldSets,
  pageDescription,
  mainImage,
  backgroundImage,
} from '../commonFields';

export default {
  name: 'businessesPage',
  title: 'Businesses Page',
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
      validation: (Rule) => Rule.required(),
      type: 'object',
      options: {
        collapsed: true,
        collapsible: true,
      },
      fields: [
        ...backgroundImage({ required: true }),
        {
          name: 'heading',
          validation: (Rule) => Rule.required(),
          title: 'Heading',
          type: 'string',
        },
      ],
    },
    {
      name: 'sections',
      title: 'Sections',
      validation: (Rule) => Rule.required(),
      type: 'object',
      fieldset: 'pageBody',
      options: {
        collapsed: true,
        collapsible: true,
      },
      fields: [
        {
          name: 'businessTypes',
          validation: (Rule) => Rule.required().min(1),
          title: 'Business Types',
          type: 'array',
          of: [
            {
              name: 'businessType',
              title: 'Business Type',
              type: 'reference',
              to: [{ type: 'businessCategory' }],
            },
          ],
        },
      ],
    },
  ],
};
