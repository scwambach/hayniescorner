import AiOutlineStar from "@meronex/icons/ai/AiOutlineStar";
import { fieldSets, objectTitle, slug } from "../commonFields";

export const businessCategory = {
  name: "businessCategory",
  title: "Business Category",
  type: "document",
  fieldsets: fieldSets,
  icon: AiOutlineStar,
  fields: [{ ...objectTitle }, { ...slug({ fieldset: null }) }],
};
