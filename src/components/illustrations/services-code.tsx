import React from 'react';
import { Box, BoxProps } from 'theme-ui';

export interface ServicesCodeProps extends BoxProps {
  width?: number;
  height?: number;
}

export const ServicesCode: React.FC<ServicesCodeProps> = ({
  width = 376.369,
  height = 149.723,
  ...props
}) => (
  <Box
    as="svg"
    // @ts-expect-error
    xmlns="http://www.w3.org/2000/svg"
    width={String(width)}
    height={String(height)}
    viewBox="0 0 376.369 149.723"
    {...props}
  >
    <defs />

    <path
      className="a"
      d="M26.199 11.441h53.482v2.71H26.199zM97.509 11.441h53.484v2.71H97.509zM201.135 36.507h53.484v2.71h-53.484zM273.559 36.507h53.484v2.71h-53.484zM169.936 11.441h157.107v2.71H169.936zM26.199 36.507h157.107v2.71H26.199zM26.199 61.576h157.107v2.71H26.199zM217.848 61.576h109.197v2.71H217.848zM26.199 86.216h53.482v2.71H26.199zM97.509 86.216h53.484v2.71H97.509zM201.135 111.283h53.484v2.71h-53.484zM273.559 111.283h53.484v2.71h-53.484zM169.936 86.216h157.107v2.71H169.936zM26.199 111.283h157.107v2.71H26.199zM26.199 136.35h157.107v2.71H26.199zM217.848 136.35h109.197v2.71H217.848z"
    />

    <path
      className="b"
      d="M11.44 22.882 0 11.442 11.441 0l2.289 2.289-9.152 9.153 9.152 9.152zM364.928 149.722l-2.288-2.289 9.151-9.153-9.151-9.152 2.288-2.289 11.441 11.44z"
    />

    <path
      transform="rotate(-73.139 273.245 -158.95)"
      style={{ fill: '#232931' }}
      d="M0 0h23.36v3.237H0z"
    />
  </Box>
);

ServicesCode.displayName = 'ServicesCode';

export default ServicesCode;
