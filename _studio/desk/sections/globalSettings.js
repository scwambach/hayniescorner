import S from '@sanity/desk-tool/structure-builder';
import BsGear from '@meronex/icons/bs/BsGear';
import AiFillCompass from '@meronex/icons/ai/AiFillCompass';
import GrContactInfo from '@meronex/icons/gr/GrContactInfo';
import BiShareAlt from '@meronex/icons/bi/BiShareAlt';
import EnGlobe from '@meronex/icons/en/EnGlobe';

export const globalSettings = S.listItem()
  .title('Global Settings')
  .child(
    S.list()
      .title('Global Settings')
      .items([
        // ************** Site Settings
        S.listItem()
          .title('Site Settings')
          .child(
            S.document()
              .schemaType('globalSettings')
              .documentId('globalSettings')
          )
          .icon(BsGear),
        // ************** Navigation
        S.listItem()
          .title('Navigation')
          .child(S.documentTypeList('navMenu').title('Navigation'))
          .icon(AiFillCompass),
        // ************** Socials
        S.listItem()
          .title('Socials')
          .child(S.documentTypeList('social').title('Socials'))
          .icon(BiShareAlt),
      ])
  )
  .icon(EnGlobe);
