import supportedLanguages from '../../config/supported-languages';

export default {
  title: 'Localized string',
  name: 'localeString',
  type: 'object',
  // fieldsets: [{
  //     title: 'Translations',
  //     name: 'translations',
  //     options: { collapsible: true }
  // }],
  fields: supportedLanguages.map((lang) => ({
    title: lang.title,
    name: lang.id,
    type: 'string',
    // fieldset: lang.isDefault ? null : 'translations'
  })),
};
