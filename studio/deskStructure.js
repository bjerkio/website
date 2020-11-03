import S from '@sanity/desk-tool/structure-builder'
import { MdSettings, MdHome, MdLayers } from 'react-icons/md'

const hiddenDocTypes = listItem =>
  !['homepage', 'siteSettings', 'page'].includes(listItem.getId())

export default () =>
  S.list()
    .title('Content')
    .items([
      S.listItem()
        .title('Settings')
        .child(
          S.editor()
            .id('siteSettings')
            .schemaType('siteSettings')
            .documentId('siteSettings')
        )
        .icon(MdSettings),
      S.listItem()
        .title('Homepage')
        .child(
          S.editor()
            .id('homepage')
            .schemaType('homepage')
            .documentId('homepage')
        )
        .icon(MdHome),
      S.listItem()
        .title('Pages')
        .schemaType('page')
        .child(S.documentTypeList('page').title('Page'))
        .icon(MdLayers),
      // This returns an array of all the document types
      // defined in schema.js. We filter out those that we have
      // defined the structure above
      ...S.documentTypeListItems().filter(hiddenDocTypes),
    ])
