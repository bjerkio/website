export default {
  title: 'Social network',
  type: 'object',
  name: 'footerSocialNetwork',
  fields: [
    {
      title: 'Social network SVG icon',
      name: 'image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      title: 'Link URL',
      name: 'linkUrl',
      type: 'url',
    },
  ],
};
