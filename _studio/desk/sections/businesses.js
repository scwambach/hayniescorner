import S from '@sanity/desk-tool/structure-builder';
import AiOutlineStar from '@meronex/icons/ai/AiOutlineStar';
import MdStoreMallDirectory from '@meronex/icons/md/MdStoreMallDirectory';

export const businesses = S.listItem()
  .title('Businesses')
  .child(
    S.list()
      .title('Businesses')
      .items([
        // ************** Businesses
        S.listItem()
          .title('Businesses')
          .child(S.documentTypeList('business').title('Businesses'))
          .icon(MdStoreMallDirectory),
        S.divider(),
        // ************** Types
        S.listItem()
          .title('Types')
          .child(S.documentTypeList('businessCategory').title('Types'))
          .icon(AiOutlineStar),
      ])
  )
  .icon(MdStoreMallDirectory);
