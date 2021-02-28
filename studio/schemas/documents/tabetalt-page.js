export default {
  name: 'tabetaltPage',
  type: 'document',
  title: 'Tabetalt Page',
  fields: [
    {
      title: 'Info',
      name: 'tabetaltInfo',
      type: 'box',
    },
    {
      title: 'Bottom image',
      name: 'tabetaltBottomImage',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
  ],
  preview: {
    select: {},
    prepare() {
      return {
        title: 'Tabetalt Page Settings',
      };
    },
  },
};
