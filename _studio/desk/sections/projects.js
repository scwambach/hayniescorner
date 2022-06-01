import S from '@sanity/desk-tool/structure-builder';
import FdPageCopy from '@meronex/icons/fd/FdPageCopy';
import AiOutlineStar from '@meronex/icons/ai/AiOutlineStar';
import BiShow from '@meronex/icons/bi/BiShow';
import { viewArray } from '../../deskStructure';

export const projects = S.listItem()
  .title('Projects')
  .child(
    S.list()
      .title('Projects')
      .items([
        // ************** Projects
        S.listItem()
          .title('Projects')
          .child(S.documentTypeList('project').title('Projects'))
          .icon(BiShow),
        S.divider(),
        // ************** Categories
        S.listItem()
          .title('Categories')
          .child(S.documentTypeList('projectCategory').title('Categories'))
          .icon(AiOutlineStar),
      ])
  )
  .icon(BiShow);
