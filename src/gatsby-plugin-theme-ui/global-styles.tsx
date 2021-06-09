import { Global } from '@emotion/react';
import React from 'react';

export const GlobalStyles: React.FC = () => (
  <Global
    styles={() => ({
      '*': {
        outline: 'none',
      },
      'html, body': {
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
