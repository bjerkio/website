import React from 'react';
import { Box, BoxProps } from 'theme-ui';

export interface SourceCodeProps extends BoxProps {
  width?: number;
  height?: number;
}

export const SourceCode: React.FC<SourceCodeProps> = ({
  width = 363.158,
  height = 265.521,
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
    <g data-name="Group 72" transform="translate(-79.2 -38.124)">
      <path
        data-name="Path 269"
        d="M160.564 201.47a44.989 44.989 0 0 1 15.635-8.146c15.945-4.562 32.44-.146 48.392 4.124 8.612 2.305 17.517 4.69 26.3 5.671 14.073 1.574 27.19-.622 37.933-6.35 12.074-6.437 20.77-17.516 23.263-29.633a34.427 34.427 0 0 0 .628-4.648c.111-1.885 2.092-12.138 22.613-16.923l.6.769c-16.514 3.776-21.8 11.882-22.232 16.1a47.374 47.374 0 0 1-.653 4.9c-2.552 12.4-11.434 23.724-23.761 30.3-10.917 5.821-24.231 8.055-38.5 6.459-8.855-.99-17.8-3.384-26.443-5.7-16.552-4.431-32.185-8.616-47.871-4.129a44.9 44.9 0 0 0-15.539 78.35l-.607.766a45.652 45.652 0 0 1 .246-71.91z"
        fill="#232931"
      />
      <ellipse
        data-name="Ellipse 34"
        cx={135.974}
        cy={6.347}
        rx={135.974}
        ry={6.347}
        transform="translate(79.2 271.91)"
        fill="#232931"
      />
      <ellipse
        data-name="Ellipse 35"
        cx={48.335}
        cy={6.347}
        rx={48.335}
        ry={6.347}
        transform="translate(161.712 290.951)"
        fill="#232931"
      />
      <path
        data-name="Path 270"
        d="m130.083 278.121-.524-.2c-.115-.043-11.576-4.434-16.944-14.39s-2.739-21.944-2.713-22.063l.124-.546.523.2c.115.043 11.575 4.434 16.944 14.39s2.74 21.944 2.713 22.063zm-16.608-15.05c4.539 8.418 13.595 12.733 15.89 13.718.436-2.459 1.8-12.4-2.73-20.814s-13.594-12.73-15.89-13.718c-.437 2.464-1.804 12.41 2.73 20.819z"
        fill="#232931"
      />
      <path
        data-name="Path 271"
        d="M116.719 260.047c9.648 5.8 13.364 17.334 13.364 17.334s-11.927 2.118-21.575-3.686-13.364-17.334-13.364-17.334 11.927-2.119 21.575 3.686z"
        fill="#4ecca3"
      />
      <path
        data-name="Path 272"
        d="M142.58 164.419h223.214c42.285 0 76.563-24.1 76.563-66.386 0-42.285-34.279-59.909-76.563-59.909h-70.088c-84.569 0-153.126 41.725-153.126 126.295z"
        fill="#232931"
      />
      <path
        data-name="Path 273"
        d="M353.334 154.177H167.563v-.488c0-33.212 12.94-60.575 37.421-79.13 22.61-17.135 53.788-26.195 90.173-26.195h58.177c18.555 0 34.191 4.077 45.219 11.79 12.49 8.736 18.822 21.665 18.822 38.427 0 16.847-6.5 31.056-18.794 41.093-11.454 9.353-27.523 14.503-45.247 14.503zm-184.793-.976h184.793c37.721 0 63.064-21.949 63.064-54.616 0-31.294-22.986-49.241-63.064-49.241h-58.177C234.076 49.343 168.819 76.642 168.54 153.2z"
        fill="#4ecca3"
      />
      <path
        data-name="Rectangle 99"
        fill="#4ecca3"
        d="M237.298 81.01h26.365v6.347h-26.365z"
      />
      <path
        data-name="Rectangle 100"
        fill="#4ecca3"
        d="M345.687 81.01h9.276v6.347h-9.276z"
      />
      <path
        data-name="Rectangle 101"
        fill="#4ecca3"
        d="M364.24 81.01h9.276v6.347h-9.276z"
      />
      <path
        data-name="Rectangle 102"
        fill="#4ecca3"
        d="M272.939 81.01h62.982v6.347h-62.982z"
      />
      <path
        data-name="Rectangle 103"
        fill="#4ecca3"
        d="M204.098 122.022h26.365v6.347h-26.365z"
      />
      <path
        data-name="Rectangle 104"
        fill="#4ecca3"
        d="M312.487 122.022h9.276v6.347h-9.276z"
      />
      <path
        data-name="Rectangle 105"
        fill="#4ecca3"
        d="M331.04 122.022h9.276v6.347h-9.276z"
      />
      <path
        data-name="Rectangle 106"
        fill="#4ecca3"
        d="M239.739 122.022h62.982v6.347h-62.982z"
      />
      <path
        data-name="Rectangle 107"
        fill="#4ecca3"
        d="M312.975 95.169h26.365v6.347h-26.365z"
      />
      <path
        data-name="Rectangle 108"
        fill="#4ecca3"
        d="M348.616 95.169h26.365v6.347h-26.365z"
      />
      <path
        data-name="Rectangle 109"
        fill="#4ecca3"
        d="M384.257 95.169h9.276v6.347h-9.276z"
      />
      <path
        data-name="Rectangle 110"
        fill="#4ecca3"
        d="M204.098 95.169h9.276v6.347h-9.276z"
      />
      <path
        data-name="Rectangle 111"
        fill="#4ecca3"
        d="M222.651 95.169h9.276v6.347h-9.276z"
      />
      <path
        data-name="Rectangle 112"
        fill="#4ecca3"
        d="M241.204 95.169h62.982v6.347h-62.982z"
      />
      <path
        data-name="Rectangle 113"
        fill="#4ecca3"
        d="M258.292 108.839h26.365v6.347h-26.365z"
      />
      <path
        data-name="Rectangle 114"
        fill="#4ecca3"
        d="M222.651 108.839h26.365v6.347h-26.365z"
      />
      <path
        data-name="Rectangle 115"
        fill="#4ecca3"
        d="M204.098 108.839h9.276v6.347h-9.276z"
      />
      <path
        data-name="Rectangle 116"
        fill="#4ecca3"
        d="M384.257 108.839h9.276v6.347h-9.276z"
      />
      <path
        data-name="Rectangle 117"
        fill="#4ecca3"
        d="M365.704 108.839h9.276v6.347h-9.276z"
      />
      <path
        data-name="Rectangle 118"
        fill="#4ecca3"
        d="M293.445 108.839h62.982v6.347h-62.982z"
      />
      <path
        data-name="Rectangle 119"
        fill="#4ecca3"
        d="M153.412 268.981h9.276v7.324h-9.276z"
      />
    </g>
  </Box>
);

SourceCode.displayName = 'SourceCode';

export default SourceCode;
