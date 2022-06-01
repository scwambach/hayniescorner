import { iconSelector } from '../commonFields';

export default {
  name: 'globalSettings',
  title: 'Global Settings',
  type: 'document',
  fields: [
    {
      name: 'siteTitle',
      title: 'Site Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'siteDescription',
      title: 'Site Description',
      type: 'text',
      rows: 3,
      validation: (Rule) => Rule.required(),
    },
    ...iconSelector({
      customIconTitle: 'Main Logo',
      iconImageTitle: 'Main Logo Image',
      minimal: true,
    }),
    {
      name: 'mainEmail',
      title: 'Main Email',
      type: 'string',
    },
  ],
};
