export const mainImage = (props: any) => [
  {
    name: props.name || "mainImage",
    title: props.title || "Open Graph Image",
    type: "image",
    description:
      props.description ||
      "The image that is shown when shared on social media platforms",
    fieldset: props.fieldset || null,
    validation: (Rule: any) => Rule.required(),
    options: {
      hotspot: true,
    },
  },
];
