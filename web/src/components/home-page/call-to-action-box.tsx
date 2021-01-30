import React from 'react';
import { Box, Heading } from 'theme-ui';
import { Link } from '../custom-link';

export interface CallToActionBoxProps {
  title: string;
  linkTo?: string;
  linkText?: string;
}

export const CallToActionBox: React.FC<CallToActionBoxProps> = ({
  children,
  title,
  linkTo,
  linkText = 'Les mer',
}) => {
  return (
    <Box p={5}>
      <Heading sx={{ mb: 3, fontWeight: 'normal' }}>{title}</Heading>
      <Box>{children}</Box>
      {linkTo && (
        <Link to={linkTo} mt={3}>
          {linkText}
        </Link>
      )}
    </Box>
  );
};
