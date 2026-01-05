import { iconSelector, link } from "../commonFields";
import React from "react";

export const iconItem = {
  name: "iconItem",
  title: "Icon item",
  type: "document",
  fields: [
    ...iconSelector(),
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "subtitle",
      title: "Subtitle",
      type: "string",
    },
    { ...link },
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "copy",
      iconImage: "iconImage",
      customIcon: "customIcon.customStyleCode",
    },
    prepare({ title, subtitle, iconImage, customIcon }: any) {
      return {
        title: title || subtitle,
        subtitle: title ? subtitle : null,
        media: customIcon ? (
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
              style={{ width: "100%" }}
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
