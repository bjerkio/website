export default {
  name: 'homepage',
  type: 'document',
  title: 'Homepage',
  __experimental_actions: [
    'create',
    'update',
    // 'delete',
    'publish',
  ],
  fields: [
    {
      title: 'Hero content',
      description: 'Content of the hero box (big green field)',
      name: 'heroContent',
      type: 'heroText',
    },
    {
      title: 'Call to Action boxes',
      description: 'Three boxes beneath top slider',
      name: 'ctaBoxes',
      type: 'array',
      of: [{ type: 'CTABox', title: 'Call to Action' }],
    },
  ],
  preview: {
    select: {},
    prepare() {
      return {
        title: 'Homepage Settings',
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
