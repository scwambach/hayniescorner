export const href = [
  {
    name: "anchor",
    title: "Anchor",
    type: "boolean",
    initialValue: false,
  },
  {
    name: "anchorName",
    title: "Anchor name",
    hidden: ({ parent }: any) => !parent.anchor,
    type: "string",
    description:
      'This is the ID of the element you are targeting. One way to find the elements ID is to right-click on the element and select "inspect element". The element in the new panel should have the code highlighted that represents the element. You should be able to find the ID there.',
  },
  {
    title: "Link",
    name: "url",
    type: "url",
    validation: (Rule: any) =>
      Rule.uri({
        allowRelative: true,
      }),
  },
  {
    title: "New Tab",
    hidden: ({ parent }: any) => parent.anchor,
    name: "newTab",
    type: "boolean",
    initialValue: false,
  },
];
