import DefaultSource from 'part:sanity-plugin-media/asset-source';

export const mainImage = (props) => [
  {
    name: props.name || 'mainImage',
    title: props.title || 'Open Graph Image',
    type: 'image',
    description:
      props.description ||
      'The image that is shown when shared on social media platforms',
    fieldset: props.fieldset || null,
    validation: (Rule) => Rule.required(),
    options: {
      hotspot: true,
      sources: [DefaultSource],
    },
  },
];
