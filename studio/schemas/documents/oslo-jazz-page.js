export default {
  name: 'osloJazzPage',
  type: 'document',
  title: 'Oslo Jazz Page',
  fields: [
    {
      title: 'Info',
      name: 'osloJazzInfo',
      type: 'box',
    },
  ],
  preview: {
    select: {},
    prepare() {
      return {
        title: 'Oslo Jazz Page Settings',
      };
    },
  },
};
