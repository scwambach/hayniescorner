import { slugify } from '.';

export const slug = (props = {}) => {
  const {
    name = 'slug',
    title = 'Slug',
    source = 'title',
    fieldset = 'meta',
  } = props;
  return {
    name,
    title,
    type: 'slug',
    fieldset,
    validation: (Rule) => Rule.required(),
    options: {
      source,
      maxLength: 96,
      slugify: (input) => slugify(input),
    },
  };
};
