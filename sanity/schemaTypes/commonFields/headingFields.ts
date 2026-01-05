import { blockContent } from ".";

export const headingFields = (props: any = {}) => {
  return [
    {
      name: "heading",
      title: "Heading",
      fieldset: props.fieldset,
      validation: props.required ? (Rule: any) => Rule.required() : null,
      type: "string",
    },
    {
      name: "subHeading",
      title: "Sub Heading",
      fieldset: props.fieldset,
      type: "string",
    },
    {
      ...blockContent({
        name: "message",
        title: "Message",
        fieldset: props.fieldset,
      }),
    },
  ];
};
