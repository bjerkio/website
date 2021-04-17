import React from 'react';
import { Box, BoxProps } from 'theme-ui';

export interface ProjectManagement_2Props extends BoxProps {
  width?: number;
  height?: number;
}

const ProjectManagement_2: React.FC<ProjectManagement_2Props> = ({
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
    <g data-name="Group 47">
      <g data-name="Group 36">
        <path
          data-name="Path 64"
          d="M75.708 115.544H.208v-15.111s20.535-3.778 39.41 0 36.09 15.111 36.09 15.111z"
          fill="#0fcfa2"
        />
        <path
          data-name="Path 214"
          d="M75.708 16.79H.208V1.679s20.535-3.778 39.41 0 36.09 15.111 36.09 15.111z"
          fill="#0fcfa2"
        />
        <path
          data-name="Path 65"
          d="M0 112.64v61.811h245.17V112.64zm95.62 51.44H15.972v-8.711h79.649zm133.578-16.179L15.972 139.19v-8.712h213.227zm0-16.179L15.972 114.299v-8.712h213.227z"
          fill="#232931"
        />
        <path
          data-name="Path 67"
          d="M0 13.908v61.811h245.17V13.908zm95.62 51.44H15.972v-8.714h79.649zm46.047-16.179h-125.7v-8.712h125.7zm87.531-16.179L15.972 15.564V6.852h213.227z"
          fill="#232931"
        />
        <path
          data-name="Path 70"
          d="M314.656 62.03h-34.847V27.183h23.646v.83h-22.816V61.2h33.187V44.606h.83z"
          fill="#3f3d56"
          stroke="#20252b"
        />
        <path
          data-name="Path 72"
          d="M314.656 160.762h-34.847v-34.847h23.646v.83h-22.816v33.187h33.187v-16.594h.83z"
          fill="#3f3d56"
          stroke="#20252b"
        />
        <path
          data-name="Path 216"
          d="m290.684 42.526 6.8 8.664 24.32-24.61"
          fill="none"
          stroke="#0fcfa2"
          strokeWidth={2}
        />
      </g>
    </g>
  </Box>
);

ProjectManagement_2.displayName = 'ProjectManagement_2';

export default ProjectManagement_2;
