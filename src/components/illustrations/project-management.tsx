/** @jsx jsx */
import React from 'react';
import { Box, BoxProps, jsx } from 'theme-ui';

export interface ProjectManagementProps extends BoxProps {
  width?: number;
  height?: number;
}

export const ProjectManagement: React.FC<ProjectManagementProps> = ({
  width = 107.71,
  height = 57.99,
  ...props
}) => (
  <Box
    as="svg"
    // @ts-expect-error
    xmlns="http://www.w3.org/2000/svg"
    width={String(width)}
    height={String(height)}
    viewBox="0 0 107.71 57.99"
    {...props}
  >
    <defs />

    <g id="Group_47" data-name="Group 47">
      <g id="Group_36" data-name="Group 36">
        <path
          id="Path_64"
          data-name="Path 64"
          className="cls-1"
          d="M25.17 38.42H.07v-5a40 40 0 0 1 13.1 0 39 39 0 0 1 12 5z"
          transform="translate(0 -.02)"
        />
        <path
          id="Path_214"
          data-name="Path 214"
          className="cls-1"
          d="M25.17 5.58H.07v-5a40 40 0 0 1 13.1 0 39 39 0 0 1 12 5z"
          transform="translate(0 -.02)"
        />
        <path
          id="Path_65"
          data-name="Path 65"
          className="cls-1"
          d="M0 37.45V58h81.52V37.45zm31.79 17.1H5.31v-2.9h26.48zm44.42-5.38H5.31v-2.9h70.9zm0-5.38H5.31v-2.9h70.9z"
          transform="translate(0 -.02)"
        />
        <path
          id="Path_67"
          data-name="Path 67"
          className="cls-1"
          d="M0 4.62v20.56h81.52V4.62zm31.79 17.1H5.31v-2.9h26.48zm15.31-5.37H5.31v-2.9H47.1zM76.2 11H5.3V8.07h70.9z"
          transform="translate(0 -.02)"
        />
        <path
          id="Path_70"
          data-name="Path 70"
          className="cls-2"
          d="M104.62 20.62H93V9h7.86v.27h-7.55v11h11v-5.44h.27z"
          transform="translate(0 -.02)"
        />
        <path
          id="Path_72"
          data-name="Path 72"
          className="cls-2"
          d="M104.62 53.45H93V41.87h7.86v.27h-7.55v11h11v-5.48h.27z"
          transform="translate(0 -.02)"
        />
        <path
          id="Path_216"
          data-name="Path 216"
          d="M96.65 14.14 98.91 17 107 8.84"
          transform="translate(0 -.02)"
          style={{ fill: 'none', stroke: '#232931', strokeWidth: 2 }}
        />
      </g>
    </g>
  </Box>
);

ProjectManagement.displayName = 'ProjectManagement';

export default ProjectManagement;
