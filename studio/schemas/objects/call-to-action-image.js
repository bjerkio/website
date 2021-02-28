export default {
  name: 'CTAImage',
  description: 'Call to Action image located on the homepage',
  title: 'CTA Image',
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
