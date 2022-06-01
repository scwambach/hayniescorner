export const iconSelector = (props = {}) => {
  return [
    {
      name: props.customIconName || 'customIcon',
      title: props.customIconTitle || 'Custom Icon',
      fieldset: props.fieldset,
      type: 'reference',
      to: [{ type: 'svg' }],
    },
    {
      name: props.iconImageName || 'iconImage',
      title: props.iconImageTitle || 'Icon image',
      fieldset: props.fieldset,
      type: 'image',
    },
  ];
};
