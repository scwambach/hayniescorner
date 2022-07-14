import {
  backgroundImage,
  fieldSets,
  links,
  mainImage,
  pageDescription,
} from '../commonFields';

export default {
  name: 'hcadaPage',
  title: 'Hcada page',
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
      name: 'upperfeatures',
      fieldset: 'pageBody',
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
      fieldset: 'pageBody',
      type: 'reference',
      to: [{ type: 'headingBlock' }],
    },
    {
      name: 'boardHeading',
      title: 'Board Heading',
      fieldset: 'pageBody',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'boardMembers',
      title: 'Board Members',
      fieldset: 'pageBody',
      type: 'array',
      of: [
        {
          name: 'member',
          title: 'Member',
          type: 'reference',
          to: [{ type: 'person' }],
        },
      ],
    },
    {
      name: 'lowerfeatures',
      title: 'Lower Features',
      fieldset: 'pageBody',
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
      name: 'formHeading',
      title: 'Form Heading',
      type: 'string',
      fieldset: 'pageBody',
    },
  ],
};
