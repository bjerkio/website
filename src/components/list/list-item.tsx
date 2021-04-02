/** @jsx jsx */
import React from 'react';
import { Box, jsx } from 'theme-ui';

export const ListItem: React.FC = ({ children, ...rest }) => (
  <Box {...rest}>{children}</Box>
);
