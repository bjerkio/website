import React from 'react';
import { Text } from 'theme-ui';

export const Ingress: React.FC<typeof Text> = (props) => (
  <Text sx={{ fontSize: 4, pt: 4, pb: 3 }} {...props} />
);
