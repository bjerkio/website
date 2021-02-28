export default {
  name: 'imageDescriptionBox',
  description: 'Simple box with description and image',
  title: 'Box with image and description',
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
      name: 'description',
      type: 'pageText',
      title: 'Description',
    },
  ],
};
