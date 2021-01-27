export default {
    name: 'intro',
    description: 'Intro block on the top of the page',
    title: 'Intro',
    type: 'object',
    fields: [
      {
        name: 'title',
        type: 'richText',
        title: 'Title',
      },
      {
        name: 'navigationButtonLink',
        type: 'link',
        title: 'Navigation Button Link',
      },
      {
        name: 'backgroundVideo',
        type: 'link',
        title: 'Background Video Link',
      },
    ],
  }
  