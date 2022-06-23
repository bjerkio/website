import { Global } from '@emotion/react';

export const GlobalStyles: React.FC = () => (
  <Global
    styles={(theme: any) => ({
      html: { fontSize: '18px' },
      body: { margin: 0, backgroundColor: theme.colors.background2 },
      '*': {
        boxSizing: 'border-box',
      },
    })}
  />
);
