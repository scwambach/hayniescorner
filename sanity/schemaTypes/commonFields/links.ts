import { link } from ".";

export const links = (props: any = {}) => {
  return {
    title: props.title || "Links",
    name: props.name || "links",
    type: "array",
    fieldset: props.fieldset,
    description: props.description,
    of: [{ ...link }],
  };
};
