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
      title: 'Slug',
      required: true,
      options: {
        source: 'title',
      },
    },
    {
      name: 'content',
      type: 'pageText',
    },
  ],
  preview: {
    select: {
      slug: 'slug',
      template: 'template',
      message: 'message',
    },
    prepare(selection) {
      const { slug, template, message } = selection;
      return {
        title: `${slug.current} [${template}]`,
        subtitle: message,
      };
    },
  },
};
