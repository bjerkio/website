import React from 'react';
import { Box, BoxProps } from 'theme-ui';

export interface SocialFacebookProps extends BoxProps {
  width?: number | string;
  height?: number | string;
}

export const CircleSound: React.FC<SocialFacebookProps> = ({
  width = 458,
  height = 255,
  ...props
}) => (
  <Box
    as="svg"
    // @ts-expect-error svg encoding
    xmlns="http://www.w3.org/2000/svg"
    width={String(width)}
    height={String(height)}
    viewBox="0 0 458 255"
    {...props}
  >
    <path
      fill="#2A3BCC"
      d="M199.4 255c71.1 0 128.8-57.1 128.8-127.5S270.5 0 199.4 0v255Z"
    />
    <path
      fill="#0F2040"
      fillRule="evenodd"
      d="M79.5 190.6a10.1 10.1 0 1 1 0-20.2 10.1 10.1 0 0 1 0 20.2Zm0 11.4a21.5 21.5 0 1 1 0-43 21.5 21.5 0 0 1 0 43Zm78.2-114.9a10.1 10.1 0 1 1 0-20.2 10.1 10.1 0 0 1 0 20.2Zm0 11.4a21.5 21.5 0 1 1 0-43 21.5 21.5 0 0 1 0 43Zm-21.4 4.5-32.8 33-32.9-33-32.8 33L9 107l-8 8 36.8 36.8L70.6 119l32.9 32.8 32.8-32.8 28.7 29 8-8-36.8-36.9ZM26.5 68.8H111V57.4H26.5v11.4Zm100.7 106.9 48 48 8-8-48-48-8 8Zm-9.5-158.2 30.9 17.9 5.7-9.8-31-17.9-5.6 9.8Zm-10.2 228.9 25.2-25.3-8-8-25.3 25.2 8 8Z"
      clipRule="evenodd"
    />
    <path
      fill="#2A3BCC"
      d="M457.7 0C386 0 328.2 57 328.2 127.5c0 70.4 58 127.5 129.5 127.5V0Z"
    />
  </Box>
);
