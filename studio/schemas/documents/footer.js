export default {
  name: 'footer',
  type: 'document',
  title: 'Footer',
  fields: [
    {
      title: 'Left text',
      name: 'leftFooterText',
      type: 'localeString',
    },
    {
      title: 'Contacts',
      name: 'footerContacts',
      type: 'footerContacts',
    },
    {
      title: 'Address',
      name: 'footerAddress',
      type: 'pageText',
    },
    {
      title: 'Right text',
      name: 'rightFooterText',
      type: 'pageText',
    },
    {
      title: 'Social URLs',
      name: 'footerSocialUrls',
      type: 'array',
      of: [{ title: 'Social network', type: 'footerSocialNetwork' }],
    },
  ],
  preview: {
    select: {},
    prepare() {
      return {
        title: 'Footer Settings',
      };
    },
  },
};
