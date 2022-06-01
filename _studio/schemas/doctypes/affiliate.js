import React from 'react';
import { iconSelector, objectTitle, url } from '../commonFields';

export default {
  name: 'affiliate',
  title: 'Affiliate',
  type: 'document',
  fields: [{ ...objectTitle }, ...iconSelector({ minimal: true }), { ...url }],
  preview: {
    select: {
      title: 'title',
      icon: 'icon',
      customIcon: 'customIcon.customStyleCode',
      iconImage: 'iconImage',
    },
    prepare({ title, customIcon, faToggle, icon, iconImage }) {
      return {
        title: `${title}`,
        media:
          customIcon && !faToggle ? (
            <>
              <style>
                {`
              .iconTypePreview {
                width: 35px;
                height: 35px;
                overflow: hidden;
              }
              .iconTypePreview svg {
              width: auto;
              height: 35px;
            }`}
              </style>
              <div
                className="iconTypePreview"
                style={{ width: '100%' }}
                dangerouslySetInnerHTML={{
                  __html: customIcon.code,
                }}
              />
            </>
          ) : (
            iconImage
          ),
      };
    },
  },
};
