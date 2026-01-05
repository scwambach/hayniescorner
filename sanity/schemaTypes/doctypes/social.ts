import * as Icons from "@meronex/icons/si";
import { socialList, url } from "../commonFields";

export const DynamicFaIcon = (name: keyof typeof Icons) => {
  const IconComponent = Icons[name];

  return IconComponent;
};

export const social = {
  name: "social",
  title: "Social",
  type: "document",
  fields: [{ ...socialList }, { ...url }],
  preview: {
    select: {
      title: "url",
      icon: "icon",
    },
    prepare(selection: any) {
      const { title, icon } = selection;
      return {
        title,
        media: DynamicFaIcon(icon),
      };
    },
  },
};
