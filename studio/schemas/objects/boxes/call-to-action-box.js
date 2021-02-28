export default {
  name: 'CTABox',
  description: 'Call to Action box located on the homepage',
  title: 'CTA Box',
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
      name: 'bottomText',
      type: 'localeString',
      title: 'Bottom text',
    },
    {
      name: 'linkTo',
      type: 'url',
      title: 'Link',
    },
    {
      name: 'linkText',
      type: 'localeString',
      title: 'Link Text',
    },
  ],
};
