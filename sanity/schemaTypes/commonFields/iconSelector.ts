export const iconSelector = (props: any = {}) => {
  return [
    {
      name: props.customIconName || "customIcon",
      title: props.customIconTitle || "Custom Icon",
      fieldset: props.fieldset,
      hidden: props.hideIcon,
      validation: props.requireIcon ? (Rule: any) => Rule.required() : null,
      type: "reference",
      to: [{ type: "svg" }],
    },
    {
      name: props.iconImageName || "iconImage",
      title: props.iconImageTitle || "Icon image",
      fieldset: props.fieldset,
      hidden: props.hideImage,
      validation: props.requireImage ? (Rule: any) => Rule.required() : null,
      type: "image",
    },
  ];
};
