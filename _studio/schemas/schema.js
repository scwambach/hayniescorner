import createSchema from 'part:@sanity/base/schema-creator';
import schemaTypes from 'all:part:@sanity/base/schema-type';

import { heroBanner } from './components';
import { buttons } from './modules';

import {
  affiliate,
  blogCategory,
  contactInfo,
  event,
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
} from './doctypes';

export default createSchema({
  name: 'default',
  types: schemaTypes.concat([
    affiliate,
    blogCategory,
    buttons,
    contactInfo,
    event,
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
  ]),
});
