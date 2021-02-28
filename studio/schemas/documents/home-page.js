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
      title: 'Header text',
      name: 'headerText',
      type: 'pageText',
    },
    {
      title: 'Header button text',
      name: 'headerButtonText',
      type: 'localeString',
    },
    {
      title: 'Header button link',
      name: 'headerButtonLink',
      type: 'url',
    },
    {
      title: 'Header video url',
      name: 'headerVideoUrl',
      type: 'url',
    },
    {
      title: 'Top title',
      description: 'First title and description',
      name: 'homePageTopTitle',
      type: 'pageText',
    },
    {
      title: 'Call to Action boxes',
      description: 'Three boxes beneath top slider',
      name: 'ctaBoxes',
      type: 'array',
      of: [{ type: 'CTABox', title: 'Call to Action' }],
    },
    {
      title: 'Middle title',
      description: 'Second title (under CTA boxes)',
      name: 'homePageMiddleTitle',
      type: 'pageText',
    },
    {
      title: 'Call to Action images',
      description: 'Four images beneath second title',
      name: 'ctaImages',
      type: 'array',
      of: [{ type: 'CTAImage', title: 'Call to Action' }],
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
