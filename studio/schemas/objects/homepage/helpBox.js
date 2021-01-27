export default {
    name: 'helpBox',
    description: 'Description of services',
    title: 'Help Content',
    type: 'object',
    fields: [
      {
        name: 'title',
        type: 'richText',
        title: 'Title',
      },
      {
        name: 'description',
        type: 'richText',
        title: 'Description',
      },
      {
        title: 'Call to Action boxes',
        description: 'Three boxes beneath top slider',
        name: 'ctaBoxes',
        type: 'array',
        of: [{ type: 'CTABox', title: 'Call to Action' }],
      },
    ],
  }
  