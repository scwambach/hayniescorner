import { link } from '.';

export const links = (props = {}) => {
  return {
    title: props.title || 'Links',
    name: props.name || 'links',
    type: 'array',
    fieldset: props.fieldset,
    description: props.description,
    of: [{ ...link }],
  };
};
