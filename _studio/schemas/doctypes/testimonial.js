import { objectTitle } from '../commonFields';

export default {
  name: 'testimonial',
  title: 'Testimonial',
  type: 'document',
  fields: [
    { ...objectTitle },
    {
      name: 'quote',
      title: 'Quote',
      type: 'text',
      rows: 4,
    },
    {
      name: 'person',
      title: 'Person',
      type: 'reference',
      to: [{ type: 'person' }],
    },
  ],
  preview: {
    select: {
      title: 'title',
      image: 'person.headShot',
    },
    prepare({ title, image }) {
      return {
        title: `${title}`,
        media: image,
      };
    },
  },
};
