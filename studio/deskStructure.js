import S from '@sanity/desk-tool/structure-builder'
import { MdAssignment, MdHome, MdErrorOutline, MdContactMail } from 'react-icons/md'

const hiddenDocTypes = listItem =>
  ![
    'homepage',
    'servicesPage',
    'aboutCompanyPage',
    'contactsPage'
  ].includes(listItem.getId())

export default () =>
  S.list()
    .title('Content')
    .items([
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
        .title('Services Page')
        .schemaType('service')
        .child(
          S.editor()
          .id('service')
          .schemaType('service')
          .documentId('service'))
        .icon(MdAssignment),
      S.listItem()
        .title('About Page')
        .schemaType('about')
        .child(
          S.editor()
          .id('about')
          .schemaType('about')
          .documentId('about'))
        .icon(MdErrorOutline),
      S.listItem()
        .title('Contacts Page')
        .schemaType('contact')
        .child(
          S.editor()
          .id('contact')
          .schemaType('contact')
          .documentId('contact'))
        .icon(MdContactMail),
      // This returns an array of all the document types
      // defined in schema.js. We filter out those that we have
      // defined the structure above
      ...S.documentTypeListItems().filter(hiddenDocTypes),
    ])
