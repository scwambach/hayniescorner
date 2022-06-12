import {
  fieldSets,
  pageDescription,
  mainImage,
  backgroundImage,
} from '../commonFields';

export default {
  name: 'volunteerPage',
  title: 'Volunteer Page',
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
      validation: (Rule) => Rule.required(),
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
          validation: (Rule) => Rule.required(),
          type: 'string',
        },
      ],
    },
    {
      name: 'formHeading',
      validation: (Rule) => Rule.required(),
      title: 'Form Heading',
      fieldset: 'pageBody',
      type: 'string',
    },
  ],
};
