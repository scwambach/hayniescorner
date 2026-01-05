import { objectTitle } from "../commonFields";

export const testimonial = {
  name: "testimonial",
  title: "Testimonial",
  type: "document",
  fields: [
    { ...objectTitle },
    {
      name: "quote",
      title: "Quote",
      type: "text",
      rows: 4,
    },
    {
      name: "person",
      title: "Person",
      type: "reference",
      to: [{ type: "person" }],
    },
  ],
  preview: {
    select: {
      title: "title",
      image: "person.headShot",
    },
    prepare({ title, image }: any) {
      return {
        title: `${title}`,
        media: image,
      };
    },
  },
};
