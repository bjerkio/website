
export default {
  name: 'page',
  type: 'document',
  title: 'Page',
  fields: [
    {
      name: 'title',
      type: 'string',
      required: true,
    },
    {
      name: 'slug',
      type: 'slug',
      required: true,
      options: {
        source: (doc, options) => options.parent.title,
      },
    },
    {
      name: 'content',
      type: 'pageContent',
    },
  ],
}
