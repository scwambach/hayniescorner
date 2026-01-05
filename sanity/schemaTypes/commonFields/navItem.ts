import AiOutlineLink from "@meronex/icons/ai/AiOutlineLink";
import { link } from ".";

export const navItem = {
  title: "Menu Item",
  name: "menuItem",
  type: "object",
  fields: [
    { ...link },
    {
      name: "subItems",
      title: "Sub Items",
      type: "array",
      of: [{ ...link }],
    },
    {
      name: "classes",
      title: "Classes",
      description: "Separate classes with a single space.",
      type: "string",
    },
  ],
  preview: {
    select: {
      title: "link.copy",
      subtitle: "link.url",
      subItems: "subItems",
      classes: "classes",
    },
    prepare(selection: any) {
      const { title, subtitle, subItems, classes } = selection;
      return {
        ...selection,
        title,
        subtitle: `${`${subtitle}${
          subItems && subItems.length > 0
            ? ` (${subItems.length} subitems)`
            : ""
        }`}${classes ? ` [${classes}]` : ""}`,
        media: AiOutlineLink,
      };
    },
  },
};
