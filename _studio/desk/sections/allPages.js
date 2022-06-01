import S from '@sanity/desk-tool/structure-builder';
import AiOutlineHome from '@meronex/icons/ai/AiOutlineHome';
import FdPageCopy from '@meronex/icons/fd/FdPageCopy';
import BsPencilSquare from '@meronex/icons/bs/BsPencilSquare';
import MdEventNote from '@meronex/icons/md/MdEventNote';
import AiOutlineShopping from '@meronex/icons/ai/AiOutlineShopping';
import ImSpoonKnife from '@meronex/icons/im/ImSpoonKnife';
import { viewArray } from '../../deskStructure';

export const allPages = S.listItem()
  .title('Pages')
  .child(
    S.list()
      .title('Pages')
      .items([
        S.listItem()
          .title('Home Page')
          .child(
            S.document()
              .schemaType('homePage')
              .title('Home Page')
              .documentId('homePage')
              .views(viewArray)
          )
          .icon(AiOutlineHome),
      ])
  )
  .icon(FdPageCopy);
