export default {
  name: 'contactPage',
  type: 'document',
  title: 'Contact Page',
  fields: [
    {
      title: 'Contact info',
      name: 'mainBox',
      type: 'box',
      required: true,
    },
    {
      title: 'Boxes',
      description: 'Three boxes beneath title',
      name: 'boxes',
      type: 'array',
      of: [{ type: 'imageDescriptionBox', title: 'Contacts' }],
    },
  ],
  preview: {
    select: {},
    prepare() {
      return {
        title: 'Contact Page Settings',
      };
    },
    // prepare({title = 'No title', publishedAt, slug = {}, media}) {
    //   const dateSegment = format(publishedAt, 'YYYY/MM')
    //   const path = `/${dateSegment}/${slug.current}/`
    //   return {
    //     title,
    //     media,
    //     subtitle: publishedAt ? path : 'Missing publishing date'
    //   }
    // }
  },
};
