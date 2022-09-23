import DefaultSource from 'part:sanity-plugin-media/asset-source';

export const backgroundImage = (props = {}) => {
  return [
    {
      name: props.name || 'backgroundImage',
      title: props.title || 'Background Image',
      type: 'image',
      fieldset: props.fieldset,
      description: props.description,
      validation: props.required ? (Rule) => Rule.required() : null,
      options: {
        hotspot: true,
        sources: [DefaultSource],
      },
    },
  ];
};
