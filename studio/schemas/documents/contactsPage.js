
export default {
    name: 'contactsPage',
    type: 'document',
    title: 'Constacts page',
    __experimental_actions: [
      'create',
      'update',
      'publish',
    ],
    fields: [
      {
        title: 'Title',
        description: 'Title of the contacts page',
        name: 'title',
        type: 'richText'
      },
    ],
    preview: {
      select: {},
      prepare() {
        return {
          title: 'Contacts Settings',
        }
      },
    },
  }
  