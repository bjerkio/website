export default {
  name: 'columnLayout',
  title: 'Column Layout',
  type: 'object',
  fields: [
    {
      name: 'columns',
      type: 'array',
      of: [
        {
          type: 'contentEditor',
        },
      ],
    },
  ],
};
