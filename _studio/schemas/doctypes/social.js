import * as Icons from '@meronex/icons/si';
import { socialList, url } from '../commonFields';

export const DynamicFaIcon = (name) => {
  const IconComponent = Icons[name];

  return IconComponent;
};

export default {
  name: 'social',
  title: 'Social',
  type: 'document',
  fields: [{ ...socialList }, { ...url }],
  preview: {
    select: {
      title: 'url',
      icon: 'icon',
    },
    prepare(selection) {
      const { title, icon } = selection;
      return {
        title,
        media: DynamicFaIcon(icon),
      };
    },
  },
};
