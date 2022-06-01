export const dismissMainDocs = (schemaType) =>
  schemaType !== 'post' && schemaType !== 'project';

export const dismissDocs = (schemaType) =>
  schemaType !== 'affiliate' &&
  schemaType !== 'contactInfo' &&
  schemaType !== 'event' &&
  schemaType !== 'feature' &&
  schemaType !== 'globalSettings' &&
  schemaType !== 'navMenu' &&
  schemaType !== 'person' &&
  schemaType !== 'social' &&
  schemaType !== 'svg' &&
  schemaType !== 'testimonial';
