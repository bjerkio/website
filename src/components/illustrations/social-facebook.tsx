import React from 'react';
import { Box, BoxProps } from 'theme-ui';

export interface SocialFacebookProps extends BoxProps {
  width?: number | string;
  height?: number | string;
  color?: string;
}

export const SocialFacebook: React.FC<SocialFacebookProps> = ({
  width = 79.07,
  height = 79.07,
  color = '#eee',
  ...props
}) => (
  <Box
    as="svg"
    // @ts-expect-error
    xmlns="http://www.w3.org/2000/svg"
    width={String(width)}
    height={String(height)}
    viewBox="0 0 79.07 79.07"
    {...props}
  >
    <path
      data-name="Path 26"
      d="M39.54 0a39.54 39.54 0 1 0 39.53 39.54A39.54 39.54 0 0 0 39.54 0zM51.8 24.26h-6.27a2.89 2.89 0 0 0-2.75 3V30.24h9l-1.37 9H42.8v24.27h-9.27V39.25h-6.27v-9h6V25.9c.27-5.19 1.91-10.36 10.9-10.63h7.64z"
      style={{ fill: color }}
    />
  </Box>
);

SocialFacebook.displayName = 'SocialFacebook';

export default SocialFacebook;
