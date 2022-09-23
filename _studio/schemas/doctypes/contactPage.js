import {
  fieldSets,
  pageDescription,
  mainImage,
  backgroundImage,
  links,
} from '../commonFields';

export default {
  name: 'contactPage',
  title: 'Contact Page',
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
    { ...links({ fieldset: 'pageBody' }) },
  ],
};
