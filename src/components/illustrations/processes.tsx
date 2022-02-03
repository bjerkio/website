import React from 'react';
import { Box, BoxProps } from 'theme-ui';

export interface ProcessesProps extends BoxProps {
  height?: number;
  width?: number;
}

export const Processes = React.forwardRef<HTMLOrSVGElement, ProcessesProps>(
  ({ width = 361, height = 331, ...props }, ref) => {
    return (
      <Box
        // @ts-expect-error svg error
        ref={ref}
        as="svg"
        xmlns="http://www.w3.org/2000/svg"
        width={String(width)}
        height={String(height)}
        viewBox="0 0 361 331"
        {...props}
      >
        <g transform="translate(-249.6 91.3)">
          <circle
            sx={{ fill: 'black60' }}
            cx="103.6"
            cy="103.6"
            r="103.6"
            transform="translate(337.3 33)"
          />
          <path
            d="M249.9 79h171.4v1H249.9zM249.9 109.8h336.7v1H249.9z"
            sx={{ fill: 'dark' }}
          />
          <path
            d="M483 220.1A104.2 104.2 0 11587 116 104.3 104.3 0 01483 220.1zM483 13a103 103 0 10103 103A103.2 103.2 0 00483 13z"
            sx={{ fill: 'dark' }}
          />
          <circle
            cx="13.7"
            cy="13.7"
            r="13.7"
            sx={{ fill: 'black80' }}
            transform="translate(459.6)"
          />
          <circle
            cx="8.9"
            cy="8.9"
            r="8.9"
            sx={{ fill: 'primary' }}
            transform="translate(370.3 99.7)"
          />
          <circle
            cx="20.2"
            cy="20.2"
            r="20.2"
            sx={{ fill: 'primary' }}
            transform="translate(570.2 88.5)"
          />
          <path
            d="M355-88.3h-61.4v1H355a11.4 11.4 0 010 22.8H262a11.4 11.4 0 010-22.7h3.5v-1.1h-3.5a12.5 12.5 0 000 25H355a12.5 12.5 0 000-25zM355-49.7h-61.4v1.1H355a11.4 11.4 0 010 22.8H262a11.4 11.4 0 010-22.8h3.5v-1h-3.5a12.5 12.5 0 000 25H355a12.5 12.5 0 000-25zM355-11h-61.4v1H355a11.4 11.4 0 010 22.8H262a11.4 11.4 0 010-22.7h3.5V-11h-3.5a12.5 12.5 0 000 25H355a12.5 12.5 0 000-25z"
            sx={{ fill: 'dark' }}
          />
          <path
            d="M272.5-91.3a3.3 3.3 0 000 6.7h14.6a3.3 3.3 0 00.2-6.7h-14.8z"
            sx={{ fill: 'primary' }}
          />
          <path
            d="M272.5-52a3.3 3.3 0 000 6.6h14.6a3.3 3.3 0 00.2-6.7h-14.8z"
            sx={{ fill: 'iron' }}
          />
          <path
            d="M272.5-14a3.3 3.3 0 000 6.7h14.6a3.3 3.3 0 00.2-6.7h-14.8z"
            sx={{ fill: 'primary' }}
          />
          <path
            sx={{ fill: 'dry' }}
            d="M266.7-79.2a3.3 3.3 0 000 6.7h83.6a3.3 3.3 0 000-6.7h-83.6zM266.7-40.5a3.3 3.3 0 000 6.6h83.6a3.3 3.3 0 000-6.6h-83.6zM266.7-1.9a3.3 3.3 0 000 6.7h83.5a3.3 3.3 0 00.2-6.7h-83.7z"
          />
        </g>
      </Box>
    );
  },
);

Processes.displayName = 'Processes';
