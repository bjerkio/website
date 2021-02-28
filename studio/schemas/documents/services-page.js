export default {
  name: 'servicesPage',
  type: 'document',
  title: 'Services Page',
  fields: [
    {
      name: 'title',
      type: 'localeString',
      required: true,
    },
    {
      title: 'Boxes',
      description: 'Boxes beneath title',
      name: 'boxes',
      type: 'array',
      of: [{ type: 'boxWithLink', title: 'Box' }],
    },
    {
      name: 'firstImage',
      title: 'First image',
      description: 'First image between boxes',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'secondImage',
      title: 'Second image',
      description: 'Second image between boxes',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
  ],
  preview: {
    select: {},
    prepare() {
      return {
        title: 'Services Page Settings',
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
