import {
  fieldSets,
  pageDescription,
  mainImage,
  backgroundImage,
  blockContent,
} from "../commonFields";

export const volunteerPage = {
  name: "volunteerPage",
  title: "Volunteer Page",
  type: "document",
  fieldsets: fieldSets,
  fields: [
    ...pageDescription,
    ...mainImage({
      fieldset: "meta",
    }),
    ...mainImage({
      name: "previewImage",
      title: "Preview Image",
      description: "The image that is shown when linked to internally",
      fieldset: "meta",
    }),
    {
      name: "heroBanner",
      title: "Banner",
      validation: (Rule: any) => Rule.required(),
      fieldset: "pageBody",
      type: "object",
      options: {
        collapsed: true,
        collapsible: true,
      },
      fields: [
        ...backgroundImage({ required: true }),
        {
          name: "heading",
          title: "Heading",
          validation: (Rule: any) => Rule.required(),
          type: "string",
        },
      ],
    },
    {
      name: "formHeading",
      validation: (Rule: any) => Rule.required(),
      title: "Form Heading",
      fieldset: "pageBody",
      type: "string",
    },
    {
      ...blockContent({
        name: "formMessage",
        title: "Form Message",
        fieldset: "pageBody",
      }),
    },
  ],
  preview: {
    prepare() {
      return {
        title: "Volunteer Page",
      };
    },
  },
};
