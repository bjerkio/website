import React from 'react';
const TitleStyle = (props) => (
  <div style={{ fontSize: '1.2em', width: '80%' }}>{props.children}</div>
);
export default {
  name: 'pageContent',
  title: 'Page Content',
  type: 'array',
  of: [
    {
      type: 'block',
      styles: [
        { title: 'Normal', value: 'normal' },
        { title: 'H1', value: 'h1' },
        { title: 'H2', value: 'h2' },
        { title: 'H3', value: 'h3' },
        { title: 'Quote', value: 'blockquote' },
        {
          title: 'ingress',
          value: 'ingress',
          blockEditor: {
            render: TitleStyle,
          },
        },
      ],
    },
    {
      type: 'image',
    },
  ],
};
