export default {
  name: 'CTABox',
  description: 'Call to Action box located on the homepage',
  title: 'CTA Box',
  type: 'object',
  fields: [
    {
      name: 'image',
      type: 'image',
      title: 'Image',
    },
    {
      name: 'hoverImage',
      type: 'image',
      title: 'Hover Image',
    },
    {
      name: 'title',
      type: 'string',
      title: 'Title',
    },
    {
      name: 'content',
      type: 'text',
      title: 'Content',
    },
    {
      name: 'linkTo',
      type: 'url',
      title: 'Link',
    },
    {
      name: 'linkText',
      type: 'string',
      title: 'Link Text',
    },
  ],
}
