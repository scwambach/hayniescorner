import { slugify } from ".";

export const slug = (props: any = {}) => {
  const {
    name = "slug",
    title = "Slug",
    source = "title",
    fieldset = "meta",
  } = props;
  return {
    name,
    title,
    type: "slug",
    fieldset,
    validation: (Rule: any) => Rule.required(),
    options: {
      source,
      maxLength: 96,
      slugify: (input: any) => slugify(input),
    },
  };
};
