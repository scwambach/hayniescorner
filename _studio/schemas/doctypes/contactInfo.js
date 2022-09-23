export default {
  name: 'contactInfo',
  title: 'Contact Info',
  type: 'document',
  fieldsets: [
    {
      name: 'electronic',
      title: 'Electronic',
      options: {
        collapsible: false,
        collapsed: true,
      },
    },
    {
      name: 'address',
      title: 'Address',
      options: {
        collapsible: false,
        collapsed: true,
      },
    },
  ],
  fields: [
    {
      name: 'mainPhone',
      title: 'Main Phone',
      fieldset: 'electronic',
      type: 'string',
    },
    {
      name: 'secondaryPhone',
      title: 'Secondary Phone',
      fieldset: 'electronic',
      type: 'string',
    },
    {
      name: 'mainEmail',
      title: 'Main Email',
      fieldset: 'electronic',
      type: 'string',
    },
    {
      name: 'secondaryEmail',
      title: 'Secondary Email',
      fieldset: 'electronic',
      type: 'string',
    },
    {
      name: 'address',
      title: 'Address Line 1',
      fieldset: 'address',
      type: 'string',
    },
    {
      name: 'address2',
      title: 'Address Line 2',
      fieldset: 'address',
      type: 'string',
    },
    {
      name: 'city',
      title: 'City',
      fieldset: 'address',
      type: 'string',
    },
    {
      name: 'state',
      title: 'State',
      fieldset: 'address',
      type: 'string',
    },
    {
      name: 'zip',
      title: 'Zip Code',
      fieldset: 'address',
      type: 'string',
    },
  ],
};
