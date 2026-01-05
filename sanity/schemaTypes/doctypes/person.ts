// import * as Icons from '@meronex/icons/si';
// import { slug, socialList } from '../commonFields';
import { OiPerson } from "@meronex/icons/oi";

// const DynamicFaIcon = (name) => {
//   const IconComponent = Icons[name];

//   return IconComponent;
// };

export const person = {
  name: "person",
  title: "Person",
  type: "document",
  icon: OiPerson,
  fields: [
    {
      name: "title",
      title: "Name",
      type: "string",
      validation: (Rule: any) => Rule.required(),
    },
    // { ...slug({ fieldset: null }) },
    {
      name: "positionTitle",
      title: "Position Title",
      type: "string",
    },
    // {
    //   name: 'headShot',
    //   title: 'Headshot',
    //   type: 'image',
    //   validation: (Rule) => Rule.required(),
    //   options: {
    //     hotspot: true,
    //   },
    // },
    {
      name: "companies",
      title: "Companies",
      type: "array",
      of: [
        {
          name: "company",
          title: "Company",
          type: "reference",
          to: [{ type: "business" }],
        },
      ],
    },
    // {
    //   name: 'socials',
    //   title: 'Socials',
    //   type: 'array',
    //   of: [
    //     {
    //       name: 'social',
    //       title: 'Social',
    //       type: 'object',
    //       fields: [
    //         {
    //           title: 'Link',
    //           name: 'link',
    //           type: 'url',
    //         },
    //         { ...socialList },
    //       ],
    //       preview: {
    //         select: {
    //           title: 'link',
    //           icon: 'icon',
    //         },
    //         prepare(selection) {
    //           const { title, icon } = selection;
    //           return {
    //             title,
    //             media: DynamicFaIcon(icon),
    //           };
    //         },
    //       },
    //     },
    //   ],
    // },
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "positionTitle",
      // media: 'headShot',
    },
    prepare({ title, subtitle }: any) {
      return {
        title,
        subtitle,
        // media,
      };
    },
  },
};
