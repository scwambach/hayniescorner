import S from '@sanity/desk-tool/structure-builder';
import MdEventNote from '@meronex/icons/md/MdEventNote';

export const events = S.listItem()
  .title('Events')
  .schemaType('event')
  .child(S.documentTypeList('event'))
  .icon(MdEventNote);
