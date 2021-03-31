import { Box, BoxProps } from '@theme-ui/components';
import React from 'react';

export const Container: React.FC<BoxProps> = (props) => (
  <Box
    {...props}
    sx={{
      maxWidth: '1920px',
      mx: 'auto',
      px: [4, 4, 6],
      pt: [4, 5, 6],
      ...props.sx,
    }}
  />
);
