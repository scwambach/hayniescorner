import MdEvent from '@meronex/icons/md/MdEvent';
import DefaultSource from 'part:sanity-plugin-media/asset-source';
import { blockContent, links, objectTitle } from '../commonFields';

export default {
  name: 'event',
  title: 'Event',
  type: 'document',
  icon: MdEvent,
  fieldsets: [
    {
      name: 'meta',
    },
  ],
  fields: [
    { ...objectTitle },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      description: 'The image that is shown when linked to internally',
      fieldset: 'meta',
      options: {
        hotspot: true,
        sources: [DefaultSource],
      },
    },
    {
      title: 'Date',
      name: 'date',
      type: 'date',
      validation: (Rule) => Rule.required(),
      options: {
        dateFormat: 'LL',
        calendarTodayLabel: 'Today',
      },
    },
    {
      title: 'Time',
      name: 'time',
      type: 'string',
    },
    {
      name: 'physicalLocation',
      title: 'Does this event have a physical location?',
      type: 'boolean',
    },
    {
      name: 'location',
      title: 'Location',
      type: 'object',
      hidden: ({ parent }) => !parent.physicalLocation,
      fields: [
        {
          title: 'Name',
          name: 'name',
          type: 'string',
        },
        {
          title: 'Street',
          name: 'street',
          type: 'string',
        },
        {
          title: 'City, State, and Zip',
          name: 'cityStateZip',
          type: 'string',
        },
      ],
    },
    {
      ...blockContent({
        name: 'description',
        title: 'Description',
      }),
    },
    { ...links({ description: 'Provide any relavent links to the event' }) },
  ],

  preview: {
    select: {
      title: 'title',
      subtitle: 'date',
      media: 'image',
    },
    prepare(selection) {
      return { ...selection };
    },
  },
};
