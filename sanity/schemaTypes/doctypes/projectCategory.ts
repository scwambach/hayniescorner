import AiOutlineStar from "@meronex/icons/ai/AiOutlineStar";
import {
  fieldSets,
  mainImage,
  objectTitle,
  pageDescription,
  slug,
} from "../commonFields";

export const projectCategory = {
  name: "projectCategory",
  title: "Project Category",
  type: "document",
  fieldsets: fieldSets,
  icon: AiOutlineStar,
  fields: [
    { ...objectTitle },
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
  ],
  preview: {
    select: {
      title: "title",
      media: "previewImage",
    },
    prepare({ title, media }: any) {
      return {
        title: `${title}`,
        media,
      };
    },
  },
};
