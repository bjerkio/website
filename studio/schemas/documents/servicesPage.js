
export default {
    name: 'servicesPage',
    type: 'document',
    title: 'Services page',
    __experimental_actions: [
      'create',
      'update',
      'publish',
    ],
    fields: [
      {
        title: 'Title',
        description: 'Title of the services page',
        name: 'title',
        type: 'richText'
      },
    ],
    preview: {
      select: {},
      prepare() {
        return {
          title: 'Services Settings',
        }
      },
    },
  }
  