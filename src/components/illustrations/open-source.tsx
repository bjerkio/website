/** @jsx jsx */
import { Box, BoxProps } from '@theme-ui/components';
import React from 'react';
import { jsx } from 'theme-ui';

export interface OpenSourceProps extends BoxProps {
  height?: number;
  width?: number;
}

export const OpenSource = React.forwardRef<HTMLOrSVGElement, OpenSourceProps>(
  ({ width = 363, height = 265, ...props }, ref) => {
    return (
      <Box
        // @ts-expect-error
        ref={ref}
        as="svg"
        xmlns="http://www.w3.org/2000/svg"
        width={String(width)}
        height={String(height)}
        viewBox="0 0 363 265"
        {...props}
      >
        <g transform="translate(-79.2 -38.1)">
          <path
            sx={{ fill: 'text' }}
            d="M160.6 201.5a45 45 0 0115.6-8.2c16-4.5 32.4-.1 48.4 4.1 8.6 2.4 17.5 4.7 26.3 5.7a65 65 0 0038-6.3A44.9 44.9 0 00312 167a34.4 34.4 0 00.6-4.6c.1-1.9 2.1-12.2 22.6-17l.6.8c-16.5 3.8-21.8 12-22.2 16.1a47.4 47.4 0 01-.7 5 45.9 45.9 0 01-23.7 30.2 66 66 0 01-38.5 6.5c-8.9-1-17.8-3.4-26.5-5.7-16.5-4.4-32.1-8.6-47.8-4.1a44.9 44.9 0 00-15.6 78.3l-.6.8a45.7 45.7 0 01.3-72z"
          />
          <ellipse
            sx={{ fill: 'text' }}
            cx="136"
            cy="6.3"
            rx="136"
            ry="6.3"
            transform="translate(79.2 272)"
          />
          <ellipse
            sx={{ fill: 'text' }}
            cx="48.3"
            cy="6.3"
            rx="48.3"
            ry="6.3"
            transform="translate(161.7 291)"
          />
          <path
            sx={{ fill: 'text' }}
            d="M130 278.1l-.4-.2c-.2 0-11.6-4.4-17-14.4s-2.7-22-2.7-22l.1-.6.5.2c.2 0 11.6 4.5 17 14.4s2.7 22 2.7 22zm-16.5-15a34.2 34.2 0 0015.9 13.7c.4-2.5 1.8-12.4-2.8-20.8s-13.6-12.8-15.9-13.7a34.3 34.3 0 002.8 20.8z"
          />
          <path
            sx={{ fill: 'lightGreen' }}
            d="M116.7 260a35 35 0 0113.4 17.4s-12 2.1-21.6-3.7-13.4-17.3-13.4-17.3 12-2.2 21.6 3.6z"
          />
          <path
            sx={{ fill: 'text' }}
            d="M142.6 164.4h223.2c42.3 0 76.6-24 76.6-66.4 0-42.3-34.3-59.9-76.6-59.9h-70c-84.7 0-153.2 41.7-153.2 126.3z"
          />
          <path
            sx={{ fill: 'lightGreen' }}
            d="M353.3 154.2H167.6v-.5c0-33.2 12.9-60.6 37.4-79.1 22.6-17.2 53.8-26.2 90.2-26.2h58.1a79 79 0 0145.3 11.8 44.1 44.1 0 0118.8 38.4c0 16.8-6.5 31-18.8 41a71.4 71.4 0 01-45.3 14.6zm-184.8-1h184.8c37.8 0 63.1-22 63.1-54.6 0-31.3-23-49.3-63-49.3h-58.2c-61.1 0-126.4 27.3-126.7 103.9z"
          />
          <path
            sx={{ fill: 'lightGreen' }}
            d="M237.3 81h26.4v6.3h-26.4zM345.7 81h9.3v6.3h-9.3zM364.2 81h9.3v6.3h-9.3zM273 81h63v6.3h-63zM204.1 122h26.4v6.3h-26.4zM312.5 122h9.3v6.3h-9.3zM331 122h9.3v6.3H331zM239.7 122h63v6.3h-63zM313 95.2h26.4v6.3H313zM348.6 95.2H375v6.3h-26.4zM384.3 95.2h9.3v6.3h-9.3zM204.1 95.2h9.3v6.3h-9.3zM222.7 95.2h9.3v6.3h-9.3zM241.2 95.2h63v6.3h-63zM258.3 108.8h26.4v6.3h-26.4zM222.7 108.8H249v6.3h-26.4zM204.1 108.8h9.3v6.3h-9.3zM384.3 108.8h9.3v6.3h-9.3zM365.7 108.8h9.3v6.3h-9.3zM293.4 108.8h63v6.3h-63zM153.4 269h9.3v7.3h-9.3z"
          />
        </g>
      </Box>
    );
  },
);

OpenSource.displayName = 'OpenSource';

export default OpenSource;
