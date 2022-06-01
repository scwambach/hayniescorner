import { blockContent } from '../commonFields';

export const headingFields = (props = {}) => {
  return [
    {
      name: 'heading',
      title: 'Heading',
      fieldset: props.fieldset,
      validation: props.required ? (Rule) => Rule.required() : null,
      type: 'string',
    },
    {
      name: 'subHeading',
      title: 'Sub Heading',
      fieldset: props.fieldset,
      type: 'string',
    },
    {
      ...blockContent({
        name: 'message',
        title: 'Message',
        fieldset: props.fieldset,
      }),
    },
  ];
};
