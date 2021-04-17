import React from 'react';
import { Box, BoxProps } from 'theme-ui';

export interface Code_2Props extends BoxProps {
  width?: number;
  height?: number;
}

const Code_2: React.FC<Code_2Props> = ({
  width = 376.4,
  height = 149.7,
  ...props
}) => (
  <Box
    as="svg"
    // @ts-expect-error
    xmlns="http://www.w3.org/2000/svg"
    width={String(width)}
    height={String(height)}
    viewBox="0 0 376.4 149.7"
    {...props}
  >
    <g id="Group_55" transform="translate(-2475.559 -6150.352)">
      <g id="Group_51" transform="translate(2475.559 6150.352)">
        <path
          className="st0"
          d="M25.7 10.9h54.5v3.7H25.7zM97 10.9h54.5v3.7H97zM200.6 36h54.5v3.7h-54.5zM273.1 36h54.5v3.7h-54.5zM169.4 10.9h158.1v3.7H169.4zM25.7 36h158.1v3.7H25.7zM25.7 61.1h158.1v3.7H25.7zM217.3 61.1h110.2v3.7H217.3zM25.7 85.7h54.5v3.7H25.7zM97 85.7h54.5v3.7H97zM200.6 110.8h54.5v3.7h-54.5zM273.1 110.8h54.5v3.7h-54.5zM169.4 85.7h158.1v3.7H169.4zM25.7 110.8h158.1v3.7H25.7zM25.7 135.8h158.1v3.7H25.7zM217.3 135.8h110.2v3.7H217.3z"
        />
        <path
          id="Path_221"
          className="st1"
          d="M11.4 22.9 0 11.4 11.4 0l2.3 2.3-9.2 9.2 9.2 9.2-2.3 2.2z"
        />
        <path
          id="Path_222"
          className="st1"
          d="m364.9 149.7-2.3-2.3 9.2-9.2-9.2-9.2 2.3-2.3 11.4 11.4-11.4 11.6z"
        />
        <path
          id="Rectangle_72"
          transform="rotate(-73.136 351.06 137.938)"
          className="st0"
          d="M339.4 136.3h23.4v3.2h-23.4z"
        />
      </g>
    </g>
  </Box>
);

Code_2.displayName = 'Code_2';

export default Code_2;
