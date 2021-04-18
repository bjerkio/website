import { Global } from '@emotion/react';
import React from 'react';

export const GlobalStyles: React.FC = () => (
  <Global
    styles={(theme: any) => ({
      '*': {
        outline: 'none',
      },
      'html, body': {
        fontFamily: theme.fonts.body,
        // backgroundColor: theme.colors.dry,
        // fontSize: '18px',
        textRendering: 'optimizeLegibility',
        '-webkit-font-smoothing': 'antialiased',
        margin: '0px',
        padding: '0px',
      },
      '::selection': {
        bg: 'primary',
      },
      a: {
        color: 'inherit',
        textDecoration: 'none',
      },
    })}
  />
);
