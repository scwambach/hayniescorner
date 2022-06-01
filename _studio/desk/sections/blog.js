import S from '@sanity/desk-tool/structure-builder';
import AiOutlineStar from '@meronex/icons/ai/AiOutlineStar';
import BsPencil from '@meronex/icons/bs/BsPencil';
import BsPencilSquare from '@meronex/icons/bs/BsPencilSquare';

export const blog = S.listItem()
  .title('Blog Posts')
  .child(
    S.list()
      .title('Blog')
      .items([
        // ************** Posts
        S.listItem()
          .title('Posts')
          .child(S.documentTypeList('post').title('Posts'))
          .icon(BsPencil),
        S.divider(),
        // ************** Categories
        S.listItem()
          .title('Categories')
          .child(S.documentTypeList('blogCategory').title('Categories'))
          .icon(AiOutlineStar),
      ])
  )
  .icon(BsPencilSquare);
