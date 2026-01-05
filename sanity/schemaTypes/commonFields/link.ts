import AiOutlineLink from "@meronex/icons/ai/AiOutlineLink";
import { href } from ".";

export const link = {
  title: "Link",
  name: "link",
  type: "object",
  options: {
    collapsible: true,
    collapsed: false,
  },
  icon: AiOutlineLink,
  fields: [
    {
      title: "Copy",
      name: "copy",
      type: "string",
    },
    ...href,
  ],
  preview: {
    select: {
      title: "copy",
      subtitle: "url",
    },
    prepare(selection: any) {
      const { title, subtitle } = selection;
      return {
        ...selection,
        title,
        subtitle: subtitle,
        media: AiOutlineLink,
      };
    },
  },
};
