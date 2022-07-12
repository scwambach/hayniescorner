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
      customIconName: 'mainLogo',
      iconImageTitle: 'Main Logo Image',
      iconImageName: 'mainLogoImage',
      minimal: true,
    }),
    ...iconSelector({
      customIconTitle: 'Footer Logo',
      customIconName: 'footerLogo',
      iconImageTitle: 'Footer Logo Image',
      iconImageName: 'footerLogoImage',
      minimal: true,
    }),
    {
      name: 'mainEmail',
      title: 'Main Email',
      type: 'string',
    },
    {
      name: 'donationUrl',
      title: 'Donation Url',
      type: 'string',
    },
  ],
};
