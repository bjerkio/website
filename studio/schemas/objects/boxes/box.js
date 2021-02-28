export default {
  name: 'box',
  description: 'Simple box with title, description and image',
  title: 'Box',
  type: 'object',
  fields: [
    {
      name: 'image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'title',
      type: 'localeString',
      title: 'Title',
    },
    {
      name: 'description',
      type: 'pageText',
      title: 'Description',
    },
  ],
};
