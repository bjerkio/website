
export default {
  name: 'homepage',
  type: 'document',
  title: 'Homepage',
  __experimental_actions: [
    'create',
    'update',
    'publish',
  ],
  fields: [
    {
      title: 'Top content',
      description: 'Content of the intro box',
      name: 'introContent',
      type: 'richText'
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
      }
    },
  },
}
