import { blockContent, links } from "../commonFields";

export const feature = {
  name: "feature",
  title: "Feature",
  type: "document",
  fields: [
    { name: "title", title: "Heading", type: "string" },
    {
      name: "image",
      title: "Image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    { ...blockContent() },
    { ...links() },
  ],
  preview: {
    select: {
      title: "title",
      media: "image",
    },
    prepare({ title, media }: any) {
      return {
        title,
        subtitle: "Feature",
        media,
      };
    },
  },
};
