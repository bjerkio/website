export default {
  name: 'boxWithLink',
  description: 'Box with title, description, image and button link',
  title: 'Box with button link',
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
