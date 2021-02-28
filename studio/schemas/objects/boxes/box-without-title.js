export default {
  name: 'boxWithoutTitle',
  description: 'Box with description, image and button link',
  title: 'Box without title',
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
    {
      name: 'linkTo',
      type: 'url',
      title: 'Link',
    },
    {
      name: 'buttonText',
      type: 'localeString',
      title: 'Button Text',
    },
  ],
};
