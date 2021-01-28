export default {
    name: 'link',
    title: 'Link',
    type: 'object',
    fields: [
        {
          name: 'navigationLink',
          type: 'url',
          title: 'Link',
          validation: Rule => Rule.uri({
            scheme: ['http', 'https']
          })
        },
        {
          name: 'linkText',
          type: 'string',
          title: 'Link Text',
        },
    ]
  }
  