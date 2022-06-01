import createSchema from 'part:@sanity/base/schema-creator';
import schemaTypes from 'all:part:@sanity/base/schema-type';

import { heroBanner } from './components';
import { buttons } from './modules';

import {
  aboutPage,
  blogCategory,
  business,
  businessCategory,
  businessesPage,
  contactInfo,
  contactPage,
  event,
  eventsPage,
  feature,
  globalSettings,
  homePage,
  iconItem,
  navMenu,
  person,
  post,
  project,
  projectCategory,
  social,
  svg,
  testimonial,
  volunteerPage,
} from './doctypes';

export default createSchema({
  name: 'default',
  types: schemaTypes.concat([
    aboutPage,
    blogCategory,
    business,
    businessCategory,
    businessesPage,
    buttons,
    contactInfo,
    contactPage,
    event,
    eventsPage,
    feature,
    globalSettings,
    heroBanner,
    homePage,
    iconItem,
    navMenu,
    person,
    post,
    project,
    projectCategory,
    social,
    svg,
    testimonial,
    volunteerPage,
  ]),
});
