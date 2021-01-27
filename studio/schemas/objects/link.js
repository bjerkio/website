export default {
    name: 'link',
    title: 'Link',
    type: 'object',
    fields: [
        {
          name: 'navigationLink',
          type: 'url',
          title: 'Link',
        },
        {
          name: 'linkText',
          type: 'string',
          title: 'Link Text',
        },
    ],
    validation: Rule => Rule.uri({
        scheme: ['http', 'https']
    })
  }
  