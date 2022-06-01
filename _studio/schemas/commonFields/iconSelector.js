export const iconSelector = (props = {}) => {
  return [
    {
      name: props.customIconName || 'customIcon',
      title: props.customIconTitle || 'Custom Icon',
      fieldset: props.fieldset,
      hidden: ({ parent }) => parent.fontAwesome || parent.iconImage,
      type: 'reference',
      to: [{ type: 'svg' }],
    },
    {
      name: props.iconImageName || 'iconImage',
      hidden: ({ parent }) =>
        (!parent.fontAwesome && parent.customIcon) ||
        (parent.fontAwesome && parent.icon),
      title: props.iconImageTitle || 'Icon image',
      fieldset: props.fieldset,
      type: 'image',
    },
  ];
};
