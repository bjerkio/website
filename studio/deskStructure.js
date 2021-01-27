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
        .schemaType('servicesPage')
        .child(
          S.editor()
          .id('servicesPage')
          .schemaType('servicesPage')
          .documentId('servicesPage'))
        .icon(MdAssignment),
      S.listItem()
        .title('About Page')
        .schemaType('aboutCompanyPage')
        .child(
          S.editor()
          .id('aboutCompanyPage')
          .schemaType('aboutCompanyPage')
          .documentId('aboutCompanyPage'))
        .icon(MdErrorOutline),
      S.listItem()
        .title('Contacts Page')
        .schemaType('contactsPage')
        .child(
          S.editor()
          .id('contactsPage')
          .schemaType('contactsPage')
          .documentId('contactsPage'))
        .icon(MdContactMail),
      // This returns an array of all the document types
      // defined in schema.js. We filter out those that we have
      // defined the structure above
      ...S.documentTypeListItems().filter(hiddenDocTypes),
    ])
