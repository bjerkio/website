export default {
  name: 'indivPage',
  type: 'document',
  title: 'Indiv Page',
  fields: [
    {
      title: 'Info',
      name: 'indivInfo',
      type: 'box',
    },
  ],
  preview: {
    select: {},
    prepare() {
      return {
        title: 'Indiv Page Settings',
      };
    },
  },
};
