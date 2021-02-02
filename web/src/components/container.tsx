import { Box, BoxProps } from '@theme-ui/components';
import React from 'react';

export const Container: React.FC<BoxProps> = (props) => (
  <Box
    {...props}
    sx={{
      maxWidth: '1440px',
      mx: 'auto',
      px: 6,
      pt: '110px',
      ['@media screen and (max-width: 960px)']: {
        px: '64px',
      },
      ...props.sx,
    }}
  />
);
