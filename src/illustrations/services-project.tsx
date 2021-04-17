import React from 'react';
import { Box, BoxProps } from 'theme-ui';

export interface ServicesProjectProps extends BoxProps {
  width?: number;
  height?: number;
}

const ServicesProject: React.FC<ServicesProjectProps> = ({
  width = 322.519,
  height = 174.451,
  ...props
}) => (
  <Box
    as="svg"
    // @ts-expect-error
    xmlns="http://www.w3.org/2000/svg"
    width={String(width)}
    height={String(height)}
    viewBox=""
    {...props}
  >
    <defs />

    <path
      className="a"
      d="M75.708 115.544H.208v-15.111s20.535-3.778 39.41 0 36.09 15.111 36.09 15.111zM75.708 16.79H.208V1.679s20.535-3.778 39.41 0 36.09 15.111 36.09 15.111z"
    />

    <path
      className="b"
      d="M0 112.64v61.811h245.17V112.64zm95.62 51.44H15.972v-8.711h79.649zm133.578-16.179L15.972 139.19v-8.712h213.227zm0-16.179L15.972 114.299v-8.712h213.227zM0 13.908v61.811h245.17V13.908zm95.62 51.44H15.972v-8.714h79.649zm46.047-16.179h-125.7v-8.712h125.7zm87.531-16.179L15.972 15.564V6.852h213.227z"
    />

    <path
      className="c"
      d="M314.656 62.03h-34.847V27.183h23.646v.83h-22.816V61.2h33.187V44.606h.83zM314.656 160.762h-34.847v-34.847h23.646v.83h-22.816v33.187h33.187v-16.594h.83z"
    />

    <path
      d="m392.328 157.732 6.8 8.664 24.32-24.61"
      transform="translate(-101.644 -115.206)"
      style={{ fill: 'none', stroke: '#0fcfa2', strokeWidth: 2 }}
    />
  </Box>
);

ServicesProject.displayName = 'ServicesProject';

export default ServicesProject;
