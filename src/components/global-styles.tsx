import { Global } from '@emotion/react';

const GlobalStyles: React.FC = () => (
  <Global
    styles={(theme: any) => ({
      html: { fontSize: '18px' },
      body: { margin: 0, backgroundColor: theme.colors.background },
      '*': {
        boxSizing: 'border-box',
      },
    })}
  />
);

export default GlobalStyles;