import MdcGestureTapButton from '@meronex/icons/mdc/MdcGestureTapButton';
import { links } from '../commonFields';

export default {
  name: 'buttons',
  title: 'Buttons',
  type: 'object',
  fields: [{ ...links() }],
  options: {
    collapsible: true,
    collapsed: true,
  },
  preview: {
    select: {
      title: 'links',
    },
    prepare({ title }) {
      return {
        title: 'Buttons',
        subtitle: `${title[0].copy}${title[1] ? ` | ${title[1].copy}` : ''}`,
        media: MdcGestureTapButton,
      };
    },
  },
};
