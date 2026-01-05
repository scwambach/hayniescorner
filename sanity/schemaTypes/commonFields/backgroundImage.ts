export const backgroundImage = (props: any = {}) => {
  return [
    {
      name: props.name || "backgroundImage",
      title: props.title || "Background Image",
      type: "image",
      fieldset: props.fieldset,
      description: props.description,
      validation: props.required ? (Rule: any) => Rule.required() : null,
      options: {
        hotspot: true,
      },
    },
  ];
};
