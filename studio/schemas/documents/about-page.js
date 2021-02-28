export default {
  name: 'aboutPage',
  type: 'document',
  title: 'About Page',
  fields: [
    {
      name: 'title',
      type: 'localeString',
      required: true,
    },
    {
      title: 'Boxes',
      description: 'Three boxes beneath title',
      name: 'boxes',
      type: 'array',
      of: [{ type: 'box', title: 'Box' }],
    },
    {
      title: 'Middle image',
      description: 'Image under the boxes',
      name: 'image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      title: 'Bottom box',
      description: 'Bottom box with guys',
      name: 'bottomBox',
      type: 'boxWithoutTitle',
    },
  ],
  preview: {
    select: {},
    prepare() {
      return {
        title: 'About Page Settings',
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
