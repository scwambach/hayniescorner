/* eslint-disable no-else-return */
// /deskStructure.js
import React from 'react';
import S from '@sanity/desk-tool/structure-builder';
import EyeIcon from 'part:@sanity/base/eye-icon';
import EditIcon from 'part:@sanity/base/edit-icon';

import {
  allPages,
  dismissDocs,
  dismissMainDocs,
  events,
  globalSettings,
  resources,
} from './desk';

const remoteURL = 'https://scw-project-starter.vercel.app';
const localURL = 'http://localhost:3000';

const appUrl = window.location.hostname === 'localhost' ? localURL : remoteURL;

const PreviewModule = ({ url }) => (
  <div className="container" style={{ height: '100%' }}>
    <iframe
      title="Preview"
      src={url}
      frameBorder={0}
      style={{ width: '100%', height: '100%', overflow: 'hidden' }}
    />
  </div>
);

const WebPreview = ({ document }) => {
  const previewUrl = `${appUrl}/${
    document.displayed._id === 'homePage' ||
    document.displayed._id === 'drafts.homePage'
      ? ''
      : document.displayed?.slug?.current
  }?preview`;
  return <PreviewModule document={document} url={previewUrl} />;
};

export const viewArray = [
  S.view.form().icon(EditIcon),
  S.view.component(WebPreview).title('Web Preview').icon(EyeIcon),
];

export const getDefaultDocumentNode = ({ schemaType }) => {
  if (dismissDocs(schemaType)) {
    return S.document().views(viewArray);
  } else if (dismissDocs(schemaType) && dismissMainDocs(schemaType)) {
    return S.document().views([
      S.view.form().icon(EditIcon),
      S.view.component(BlockPreview).title('Web Preview').icon(EyeIcon),
    ]);
  }
};

export default () =>
  S.list().title('Base').items([allPages, events, resources, globalSettings]);
