export default {
  name: 'lentPage',
  type: 'document',
  title: 'Lent Page',
  fields: [
    {
      title: 'Info',
      name: 'lentInfo',
      type: 'box',
    },
  ],
  preview: {
    select: {},
    prepare() {
      return {
        title: 'Lent Page Settings',
      };
    },
  },
};
