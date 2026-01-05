import dayjs from "dayjs";
import {
  blockContent,
  fieldSets,
  mainImage,
  objectTitle,
  pageDescription,
  pubDate,
  slug,
} from "../commonFields";

export const project = {
  name: "project",
  title: "Project",
  type: "document",
  fieldsets: [
    ...fieldSets,
    {
      name: "projectInfo",
      title: "Project Info",
      options: {
        collapsible: true,
        collapsed: false,
      },
    },
  ],
  fields: [
    { ...objectTitle },
    { ...pubDate },
    { ...slug() },
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
      name: "client",
      title: "Client",
      type: "object",
      fieldset: "projectInfo",
      fields: [
        {
          name: "name",
          title: "Name",
          type: "string",
        },
        {
          name: "url",
          title: "Url",
          type: "url",
        },
      ],
    },
    {
      name: "team",
      title: "Team",
      type: "array",
      fieldset: "projectInfo",
      of: [
        {
          name: "member",
          title: "Member",
          type: "reference",
          to: [{ type: "person" }],
        },
      ],
    },
    {
      name: "imageGallery",
      title: "Image Gallery",
      type: "array",
      fieldset: "pageBody",
      options: {
        layout: "grid",
      },
      of: [
        {
          name: "image",
          title: "Image",
          type: "image",
          options: {
            hotspot: true,
          },
        },
      ],
    },
    {
      ...blockContent({
        name: "description",
        title: "Description",
        fieldset: "pageBody",
      }),
    },
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "category.title",
      media: "previewImage",
      date: "publishedAt",
    },
    prepare({ title, subtitle, media, date }: any) {
      return {
        title: `${title}`,
        subtitle: `${dayjs(date).format("MMM DD, YYYY")}${
          subtitle ? ` | Category: ${subtitle}` : ""
        }`,
        media,
      };
    },
  },
};
