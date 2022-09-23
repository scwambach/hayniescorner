import S from '@sanity/desk-tool/structure-builder';
import OiImage from '@meronex/icons/oi/OiImage';
import GrResources from '@meronex/icons/gr/GrResources';
import FaStar from '@meronex/icons/fa/FaStar';
import { FaRegStar } from '@meronex/icons/fa';
import { AiOutlineBlock } from '@meronex/icons/ai';
import BsFillPeopleFill from '@meronex/icons/bs/BsFillPeopleFill';

export const resources = S.listItem()
  .title('Resources')
  .child(
    S.list()
      .title('Resources')
      .items([
        // ************** People
        S.listItem()
          .title('People')
          .child(S.documentTypeList('person').title('People'))
          .icon(BsFillPeopleFill),
        // ************** Tesimonials
        // S.listItem()
        //   .title('Tesimonials')
        //   .child(S.documentTypeList('testimonial').title('Tesimonials'))
        //   .icon(ZoChatBubbleDots),
        // ************** Features
        S.listItem()
          .title('Features')
          .schemaType('feature')
          .child(S.documentTypeList('feature'))
          .icon(FaStar),
        S.listItem()
          .title('Icon Items')
          .schemaType('iconItem')
          .child(S.documentTypeList('iconItem'))
          .icon(FaRegStar),
        S.listItem()
          .title('Heading Blocks')
          .schemaType('headingBlock')
          .child(S.documentTypeList('headingBlock'))
          .icon(AiOutlineBlock),
        // ************** SVGs
        S.listItem()
          .title('SVG Library')
          .child(S.documentTypeList('svg').title('SVG Library'))
          .icon(OiImage),
      ])
  )
  .icon(GrResources);
