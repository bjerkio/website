/** @jsx jsx */
import React from 'react';
import {jsx, Box} from 'theme-ui';

const ListItem: React.FC = ({children, ...rest}) => (
  <Box {...rest}>
    {children}
  </Box>
);

export default ListItem;
