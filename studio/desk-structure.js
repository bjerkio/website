import S from '@sanity/desk-tool/structure-builder';
import { MdBuild, MdHome, MdLayers, MdSettings } from 'react-icons/md';

const hiddenDocTypes = (listItem) =>
  ![
    'homepage',
    'siteSettings',
    'page',
    'aboutPage',
    'contactPage',
    'footer',
    'indivPage',
    'lentPage',
    'osloJazzPage',
    'servicesPage',
    'tabetaltPage',
  ].includes(listItem.getId());

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
            .documentId('siteSettings'),
        )
        .icon(MdSettings),
      S.listItem()
        .title('Homepage')
        .child(
          S.editor()
            .id('homepage')
            .schemaType('homepage')
            .documentId('homepage'),
        )
        .icon(MdHome),
      S.listItem()
        .title('Services Page')
        .child(
          S.editor()
            .id('servicesPage')
            .schemaType('servicesPage')
            .documentId('servicesPage'),
        )
        .icon(MdBuild),
      S.divider(),
      S.listItem()
        .title('About Page')
        .child(
          S.editor()
            .id('aboutPage')
            .schemaType('aboutPage')
            .documentId('aboutPage'),
        )
        .icon(MdBuild),
      S.divider(),
      S.listItem()
        .title('Contact Page')
        .child(
          S.editor()
            .id('contactPage')
            .schemaType('contactPage')
            .documentId('contactPage'),
        )
        .icon(MdBuild),
      S.divider(),
      S.listItem()
        .title('Indiv Page')
        .child(
          S.editor()
            .id('indivPage')
            .schemaType('indivPage')
            .documentId('indivPage'),
        )
        .icon(MdBuild),
      S.divider(),
      S.listItem()
        .title('Lent Page')
        .child(
          S.editor()
            .id('lentPage')
            .schemaType('lentPage')
            .documentId('lentPage'),
        )
        .icon(MdBuild),
      S.divider(),
      S.listItem()
        .title('Oslo Jazz Page')
        .child(
          S.editor()
            .id('osloJazzPage')
            .schemaType('osloJazzPage')
            .documentId('osloJazzPage'),
        )
        .icon(MdBuild),
      S.divider(),
      S.listItem()
        .title('Tabetalt Page')
        .child(
          S.editor()
            .id('tabetaltPage')
            .schemaType('tabetaltPage')
            .documentId('tabetaltPage'),
        )
        .icon(MdBuild),
      S.divider(),
      S.listItem()
        .title('Footer')
        .child(
          S.editor().id('footer').schemaType('footer').documentId('footer'),
        )
        .icon(MdBuild),
      S.divider(),
      S.listItem()
        .title('Pages')
        .schemaType('page')
        .child(S.documentTypeList('page').title('Page'))
        .icon(MdLayers),
      // This returns an array of all the document types
      // defined in schema.js. We filter out those that we have
      // defined the structure above
      ...S.documentTypeListItems().filter(hiddenDocTypes),
    ]);
