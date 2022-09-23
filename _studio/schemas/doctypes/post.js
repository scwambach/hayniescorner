import dayjs from 'dayjs';

import {
  fieldSets,
  mainImage,
  objectTitle,
  pageDescription,
  slug,
  blockContent,
  pubDate,
} from '../commonFields';

export default {
  name: 'post',
  title: 'Post',
  type: 'document',
  fieldsets: fieldSets,
  fields: [
    { ...objectTitle },
    { ...pubDate },
    {
      name: 'author',
      title: 'Author',
      type: 'reference',
      to: [{ type: 'person' }],
    },
    { ...slug() },
    {
      name: 'categories',
      title: 'Categories',
      type: 'array',
      fieldset: 'meta',
      of: [
        {
          name: 'category',
          title: 'Category',
          type: 'reference',
          to: [{ type: 'blogCategory' }],
        },
      ],
    },
    {
      name: 'tags',
      title: 'Tags',
      type: 'tags',
      fieldset: 'meta',
    },
    ...pageDescription,
    ...mainImage({
      fieldset: 'meta',
    }),
    ...mainImage({
      name: 'previewImage',
      title: 'Preview Image',
      description: 'The image that is shown when linked to internally',
      fieldset: 'meta',
    }),
    { ...blockContent() },
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'category.title',
      media: 'previewImage',
      date: 'publishedAt',
    },
    prepare({ title, subtitle, media, date }) {
      return {
        title: `${title}`,
        subtitle: `${dayjs(date).format('MMM DD, YYYY')}${
          subtitle ? ` | Category: ${subtitle}` : ''
        }`,
        media,
      };
    },
  },
};
