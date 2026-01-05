export const pubDate = {
  name: "publishedAt",
  title: "Published at",
  type: "date",
  options: {
    dateFormat: "LL",
    calendarTodayLabel: "Set to Today",
  },
  validation: (Rule: any) => Rule.required(),
};
