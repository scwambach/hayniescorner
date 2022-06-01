import * as Icons from '@meronex/icons/si';
import { slug, socialList } from '../commonFields';

const DynamicFaIcon = (name) => {
  const IconComponent = Icons[name];

  return IconComponent;
};

export default {
  name: 'person',
  title: 'Person',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    { ...slug({ fieldset: null }) },
    {
      name: 'positionTitle',
      title: 'Position Title',
      type: 'string',
    },
    {
      name: 'headShot',
      title: 'Headshot',
      type: 'image',
      validation: (Rule) => Rule.required(),
      options: {
        hotspot: true,
      },
    },
    {
      name: 'company',
      title: 'Company',
      type: 'reference',
      to: [{ type: 'business' }],
    },
    {
      name: 'socials',
      title: 'Socials',
      type: 'array',
      of: [
        {
          name: 'social',
          title: 'Social',
          type: 'object',
          fields: [
            {
              title: 'Link',
              name: 'link',
              type: 'url',
            },
            { ...socialList },
          ],
          preview: {
            select: {
              title: 'link',
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
        },
      ],
    },
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'positionTitle',
      company: 'company.title',
      media: 'headShot',
    },
    prepare({ title, subtitle, company, media }) {
      return {
        title: `${title}`,
        subtitle: `${company ? `${subtitle} @ ${company}` : subtitle}`,
        media,
      };
    },
  },
};
