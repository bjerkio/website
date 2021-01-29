export default {
    name: 'aboutCompanyPage',
    type: 'document',
    title: 'About Company page',
    __experimental_actions: [
      'create',
      'update',
      'publish',
    ],
    fields: [
      {
        title: 'Title',
        description: 'Title of the about page',
        name: 'title',
        type: 'richText'
      },
    ],
    preview: {
      select: {},
      prepare() {
        return {
          title: 'About Company Settings',
        }
      },
    },
  }
  
