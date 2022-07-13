import S from '@sanity/desk-tool/structure-builder';
import AiOutlineHome from '@meronex/icons/ai/AiOutlineHome';
import FdPageCopy from '@meronex/icons/fd/FdPageCopy';
import { viewArray } from '../../deskStructure';
import FaQuestion from '@meronex/icons/fa/FaQuestion';
import MdEventNote from '@meronex/icons/md/MdEventNote';
import MdStoreMallDirectory from '@meronex/icons/md/MdStoreMallDirectory';
import EnHand from '@meronex/icons/en/EnHand';
import AiOutlineMail from '@meronex/icons/ai/AiOutlineMail';
import FaPaintBrush from '@meronex/icons/fa/FaPaintBrush';

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
        S.listItem()
          .title('Arts Page')
          .child(
            S.document()
              .schemaType('artsPage')
              .title('Arts Page')
              .documentId('artsPage')
              .views(viewArray)
          )
          .icon(FaPaintBrush),
        S.listItem()
          .title('Businesses Page')
          .child(
            S.document()
              .schemaType('businessesPage')
              .title('Businesses Page')
              .documentId('businessesPage')
              .views(viewArray)
          )
          .icon(MdStoreMallDirectory),
        S.listItem()
          .title('Events Page')
          .child(
            S.document()
              .schemaType('eventsPage')
              .title('Events Page')
              .documentId('eventsPage')
              .views(viewArray)
          )
          .icon(MdEventNote),
        S.listItem()
          .title('About Page')
          .child(
            S.document()
              .schemaType('aboutPage')
              .title('About Page')
              .documentId('aboutPage')
              .views(viewArray)
          )
          .icon(FaQuestion),
        S.listItem()
          .title('Volunteer Page')
          .child(
            S.document()
              .schemaType('volunteerPage')
              .title('Volunteer Page')
              .documentId('volunteerPage')
              .views(viewArray)
          )
          .icon(EnHand),
        S.listItem()
          .title('Contact Page')
          .child(
            S.document()
              .schemaType('contactPage')
              .title('Contact Page')
              .documentId('contactPage')
              .views(viewArray)
          )
          .icon(AiOutlineMail),
      ])
  )
  .icon(FdPageCopy);
