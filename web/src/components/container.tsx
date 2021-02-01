import { Box, BoxProps } from '@theme-ui/components';
import React from 'react';

export const Container: React.FC<BoxProps> = (props) => (
  <Box
    {...props}
    sx={{
      maxWidth: '1440px',
      mx: 'auto',
      px: '188px',
      pt: '110px',
      ...props.sx,
    }}
  />
);
