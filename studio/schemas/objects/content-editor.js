export default {
  name: 'contentEditor',
  title: 'Content Editor',
  type: 'object',
  fields: [
    {
      name: 'content',
      type: 'array',
      of: [
        {
          type: 'block',
        },
        {
          type: 'image',
        },
      ],
    },
  ],
};
