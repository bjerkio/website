import React from 'react';
import { Box, BoxProps } from 'theme-ui';

export interface SocialGithubProps extends BoxProps {
  width?: number | string;
  height?: number | string;
}

export const SocialGithub: React.FC<SocialGithubProps> = ({
  width = 79.07,
  height = 79.07,
  ...props
}) => (
  <Box
    as="svg"
    // @ts-expect-error svg encoding
    xmlns="http://www.w3.org/2000/svg"
    width={String(width)}
    height={String(height)}
    viewBox="0 0 79.07 79.07"
    {...props}
  >
    <path
      d="M39.54 0a39.54 39.54 0 1 0 39.53 39.54A39.54 39.54 0 0 0 39.54 0zm7.93 66.94c-1.37.28-1.85-.57-1.85-1.28v-7.42a6.57 6.57 0 0 0-1.8-5c6-.66 12.23-2.95 12.23-13.36a10.59 10.59 0 0 0-2.76-7.28 10 10 0 0 0-.26-7.17s-2.25-.73-7.33 2.77a25 25 0 0 0-13.4 0c-5.09-3.52-7.3-2.79-7.3-2.79a9.74 9.74 0 0 0-.24 7.18A10.57 10.57 0 0 0 22 39.86c0 10.39 6.25 12.72 12.2 13.4a5.84 5.84 0 0 0-1.69 3.62l-.12.07a5.68 5.68 0 0 1-7.69-2.32 5.64 5.64 0 0 0-4.11-2.8s-2.61 0-.19 1.65a7.13 7.13 0 0 1 3 4s1.58 5.27 9 3.63v4.61c0 .61-.49 1.56-1.83 1.31a27.16 27.16 0 0 1 8.48-52.83 27.11 27.11 0 0 1 8.4 52.78z"
      style={{ fill: '#eee' }}
    />
  </Box>
);

SocialGithub.displayName = 'SocialGithub';
