import React from 'react';
import { Box, BoxProps } from 'theme-ui';

export interface CodeProps extends BoxProps {
  width?: number;
  height?: number;
}

const Code: React.FC<CodeProps> = ({
  width = 120.4,
  height = 47.9,
  ...props
}) => (
  <Box
    as="svg"
    // @ts-expect-error
    xmlns="http://www.w3.org/2000/svg"
    width={String(width)}
    height={String(height)}
    viewBox="0 0 120.4 47.9"
    {...props}
  >
    <path
      className="st0"
      d="M7.3 2.9h17v1.8h-17zM31 2.9h17v1.8H31zM64.6 11.2h17V13h-17zM89.2 11.2h17V13h-17zM58.3 2.9h47.9v1.8H58.3zM7.3 11.2h47.9V13H7.3zM7.3 19.2h57.9V21H7.3zM72.6 19.2h33.6V21H72.6zM7.3 27.1h17v1.8h-17zM31 27.1h17v1.8H31zM64.6 35.2h17V37h-17zM89.2 35.2h17V37h-17zM54.3 27.1h51.9v1.8H54.3zM7.3 35.2h47.9V37H7.3zM7.3 43.4h47.9v1.8H7.3zM72.6 43.4h33.6v1.8H72.6zM3.4 0 0 3.4l3.4 3.4.7-.6-2.7-2.8L4.1.7zM117 41.1l-.7.7 2.8 2.7-2.8 2.7.7.7 3.4-3.4z"
    />

    <path
      transform="rotate(-73.14 112.873 44.396)"
      className="st0"
      d="M109.4 43.9h7v1h-7z"
    />
  </Box>
);

Code.displayName = 'Code';

export default Code;