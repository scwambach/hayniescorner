import { backgroundImage, headingFields } from '../commonFields';

export default {
  name: 'heroBanner',
  title: 'Hero Banner',
  type: 'object',
  fieldsets: [
    {
      name: 'settings',
      title: 'Settings',
      options: {
        collapsible: true,
        collapsed: true,
      },
    },
  ],
  options: {
    collapsible: true,
    collapsed: true,
  },
  fields: [
    ...backgroundImage({ required: true }),
    ...headingFields({ required: true }),
  ],
};
