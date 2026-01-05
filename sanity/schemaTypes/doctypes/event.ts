import MdEvent from "@meronex/icons/md/MdEvent";
import { blockContent, links, objectTitle } from "../commonFields";

export const event = {
  name: "event",
  title: "Event",
  type: "document",
  icon: MdEvent,
  fieldsets: [
    {
      name: "meta",
    },
  ],
  fields: [
    { ...objectTitle },
    {
      name: "image",
      title: "Image",
      type: "image",
      description: "The image that is shown when linked to internally",
      fieldset: "meta",
      options: {
        hotspot: true,
      },
    },
    {
      title: "Date",
      name: "date",
      type: "date",
      validation: (Rule: any) => Rule.required(),
      options: {
        dateFormat: "LL",
        calendarTodayLabel: "Today",
      },
    },
    {
      title: "Time",
      name: "time",
      type: "string",
    },
    {
      name: "physicalLocation",
      title: "Does this event have a physical location?",
      type: "boolean",
    },
    {
      name: "location",
      title: "Location",
      type: "object",
      hidden: ({ parent }: any) => !parent.physicalLocation,
      fields: [
        {
          title: "Name",
          name: "name",
          type: "string",
        },
        {
          title: "Street",
          name: "street",
          type: "string",
        },
        {
          title: "City, State, and Zip",
          name: "cityStateZip",
          type: "string",
        },
      ],
    },
    {
      ...blockContent({
        name: "description",
        title: "Description",
      }),
    },
    { ...links({ description: "Provide any relavent links to the event" }) },
  ],

  preview: {
    select: {
      title: "title",
      subtitle: "date",
      media: "image",
    },
    prepare(selection: any) {
      return { ...selection };
    },
  },
};
