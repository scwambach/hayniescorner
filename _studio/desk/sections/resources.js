import S from '@sanity/desk-tool/structure-builder';
import ZoChatBubbleDots from '@meronex/icons/zo/ZoChatBubbleDots';
import FaBullhorn from '@meronex/icons/fa/FaBullhorn';
import BsFillPeopleFill from '@meronex/icons/bs/BsFillPeopleFill';
import MdcFormSelect from '@meronex/icons/mdc/MdcFormSelect';
import MdEventNote from '@meronex/icons/md/MdEventNote';
import GrGroup from '@meronex/icons/gr/GrGroup';
import OiImage from '@meronex/icons/oi/OiImage';
import GrResources from '@meronex/icons/gr/GrResources';
import FaStar from '@meronex/icons/fa/FaStar';
import { FaRegStar } from '@meronex/icons/fa';

export const resources = S.listItem()
  .title('Resources')
  .child(
    S.list()
      .title('Resources')
      .items([
        // ************** People
        // S.listItem()
        //   .title('People')
        //   .child(S.documentTypeList('person').title('People'))
        //   .icon(BsFillPeopleFill),
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
        // ************** SVGs
        S.listItem()
          .title('SVG Library')
          .child(S.documentTypeList('svg').title('SVG Library'))
          .icon(OiImage),
      ])
  )
  .icon(GrResources);
