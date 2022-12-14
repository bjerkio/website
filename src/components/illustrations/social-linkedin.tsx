import React from 'react';
import { Box } from '@chakra-ui/react';

export interface SocialLinkedinProps {
  width?: number | string;
  height?: number | string;
}

export const SocialLinkedin: React.FC<SocialLinkedinProps> = ({
  width = 81.78,
  height = 81.78,
  ...props
}) => (
  <Box
    as="svg"
    xmlns="http://www.w3.org/2000/svg"
    width={String(width)}
    height={String(height)}
    viewBox="0 0 81.78 81.78"
    {...props}
  >
    <path
      data-name="Path 27"
      d="M40.88 0A40.84 40.84 0 1 0 41 0zM24.25 16.63a4.78 4.78 0 0 1 4.64 4.63 4.53 4.53 0 0 1-4.64 4.36A4.77 4.77 0 0 1 19.62 21 4.37 4.37 0 0 1 24 16.62zm4.36 42.53h-9V28.62h9zm36.53 0h-9V42.53c0-3.28-1.09-6.82-4.91-6.82a7 7 0 0 0-7.09 6.82v16.35h-9.26V28.62h9.27v4.09a13.74 13.74 0 0 1 11.18-5.19c4.36 0 10.09 2.19 10.09 14.18v17.46z"
      style={{ fill: 'currentColor' }}
    />
  </Box>
);

SocialLinkedin.displayName = 'SocialLinkedin';
