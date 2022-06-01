import { link } from '.';

export const links = (props = {}) => {
  return {
    title: 'Links',
    name: 'links',
    type: 'array',
    fieldset: props.fieldset,
    description: props.description,
    validation: (Rule) => Rule.max(props.max || 2),
    of: [{ ...link }],
  };
};
