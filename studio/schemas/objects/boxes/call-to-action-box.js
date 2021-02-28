export default {
  name: 'CTABox',
  description: 'Call to Action box located on the homepage',
  title: 'CTA Box',
  type: 'object',
  fields: [
    {
      title: 'Image',
      name: 'image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      title: 'Hover Image',
      name: 'hoverImage',
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
      name: 'bottomText',
      type: 'localeString',
      title: 'Bottom text',
    },
    {
      name: 'linkTo',
      type: 'url',
      title: 'Link',
    },
  ],
};
