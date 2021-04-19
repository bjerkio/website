import React from 'react';
import { Box, BoxProps } from 'theme-ui';

export interface MapProps extends BoxProps {
  width?: number;
  height?: number;
}

export const Map: React.FC<MapProps> = ({
  width = 396.338,
  height = 328.121,
  ...props
}) => (
  <Box
    as="svg"
    // @ts-expect-error
    xmlns="http://www.w3.org/2000/svg"
    width={String(width)}
    height={String(height)}
    viewBox="0 0 396.338 328.121"
    {...props}
  >
    <g transform="translate(.254)">
      <ellipse
        data-name="Ellipse 9"
        cx={8.574}
        cy={20.814}
        rx={8.574}
        ry={20.814}
        transform="rotate(-45 536.481 -275.406)"
        fill="#4ecca3"
        opacity={0.1}
      />
      <ellipse
        data-name="Ellipse 10"
        cx={4.602}
        cy={6.026}
        rx={4.602}
        ry={6.026}
        transform="translate(369.522 296.647)"
        fill="#232931"
      />
      <ellipse
        data-name="Ellipse 11"
        cx={4.602}
        cy={6.026}
        rx={4.602}
        ry={6.026}
        transform="translate(369.522 289.283)"
        fill="#232931"
      />
      <ellipse
        data-name="Ellipse 12"
        cx={4.602}
        cy={6.026}
        rx={4.602}
        ry={6.026}
        transform="translate(369.522 281.919)"
        fill="#232931"
      />
      <ellipse
        data-name="Ellipse 13"
        cx={4.602}
        cy={6.026}
        rx={4.602}
        ry={6.026}
        transform="translate(369.522 274.555)"
        fill="#232931"
      />
      <ellipse
        data-name="Ellipse 14"
        cx={4.602}
        cy={6.026}
        rx={4.602}
        ry={6.026}
        transform="translate(369.522 267.191)"
        fill="#232931"
      />
      <ellipse
        data-name="Ellipse 15"
        cx={4.602}
        cy={6.026}
        rx={4.602}
        ry={6.026}
        transform="translate(369.522 259.826)"
        fill="#3f3d56"
      />
      <ellipse
        data-name="Ellipse 16"
        cx={4.602}
        cy={6.026}
        rx={4.602}
        ry={6.026}
        transform="translate(369.522 252.462)"
        fill="#3f3d56"
      />
      <path
        data-name="Path 225"
        d="M391.353 208.092a21.931 21.931 0 0 0 1.716-2.522l-12.095-1.986 13.081.094a22.106 22.106 0 0 0 .429-17.469l-17.546 9.106 16.174-11.9a22.05 22.05 0 1 0-36.417 24.677 21.945 21.945 0 0 0-2.513 4.019l15.7 8.149-16.727-5.618a22.067 22.067 0 0 0 3.556 20.7 22.045 22.045 0 1 0 34.655 0 22.05 22.05 0 0 0 0-27.261z"
        fill="#4ecca3"
      />
      <path
        data-name="Path 226"
        d="M351.981 221.723a21.942 21.942 0 0 0 4.718 13.63 22.045 22.045 0 1 0 34.655 0c2.954-3.748-39.373-16.107-39.373-13.63z"
        opacity={0.1}
      />
      <path
        data-name="Path 227"
        d="M363.119 0v308.807l-104.652-14.583-127.215 25.953-1.025.21-101.22-27.879V24.018L134.087 0l114.945 24.018 4.37-.922z"
        fill="#232931"
      />
      <path
        data-name="Path 228"
        d="M345.534 16.864v276.3l-93.633-13.047-113.825 23.221-.918.184-90.566-24.94V38.352l94.023-21.488 102.841 21.488 3.912-.823z"
        fill="#fff"
      />
      <path
        data-name="Path 229"
        d="m258.467 294.224-127.215 25.953L134.092 0l114.94 24.018 4.37-.922z"
        fill="#eee"
        opacity={0.595}
      />
      <g
        data-name="Group 64"
        fill="none"
        stroke="#eee"
        strokeMiterlimit={10}
        strokeWidth={3}
      >
        <path
          data-name="Path 230"
          d="m242.939 59.188.049 89.854h35.193v-36.885h60.274l7.079-9.624"
        />
        <path
          data-name="Path 231"
          d="M46.997 87.71H177.86l8.09-3.86h3.236v86.637h56.633l2.427 7.72v39.03h43.688v48.251"
        />
        <path data-name="Line 1" d="M206.471 265.488v-95.001" />
        <path data-name="Line 2" d="M345.534 240.037H206.471" />
        <path data-name="Line 3" d="M310.705 59.188v206.3" />
        <path data-name="Line 4" d="M46.592 221.8h298.942" />
        <path data-name="Line 5" d="M82.975 265.488v-206.3" />
        <path data-name="Line 6" d="M152.464 59.188v206.3" />
        <path data-name="Line 7" d="m46.997 111.299 231.184.858" />
        <path data-name="Line 8" d="M114.281 59.561v205.927" />
        <path data-name="Path 232" d="M46.592 159.044h105.872l54.008 62.756" />
        <path data-name="Line 9" d="M218.17 59.188v111.299" />
        <path data-name="Line 10" d="M206.471 190.422h139.063" />
      </g>
      <path
        data-name="Path 233"
        d="M251.177 189.573h-43.319v-18.872l40.96-.214 2.573 7.291z"
        fill="#4ecca3"
      />
      <path
        data-name="Path 234"
        d="M229.732 91.784a23.709 23.709 0 0 0-23.709 23.709c0 13.094 23.709 55.637 23.709 55.637s23.709-42.525 23.709-55.637a23.71 23.71 0 0 0-23.709-23.709zm0 33.823a10.431 10.431 0 1 1 10.431-10.431 10.431 10.431 0 0 1-10.431 10.431z"
        fill="#4ecca3"
      />
      <path
        data-name="Path 235"
        d="M229.732 91.784a23.709 23.709 0 0 0-23.709 23.709c0 13.094 23.709 55.637 23.709 55.637s23.709-42.525 23.709-55.637a23.71 23.71 0 0 0-23.709-23.709zm0 33.823a10.431 10.431 0 1 1 10.431-10.431 10.431 10.431 0 0 1-10.431 10.431z"
        opacity={0.1}
      />
      <path
        data-name="Path 236"
        d="M229.732 95.215a23.709 23.709 0 0 0-23.709 23.709c0 13.094 23.709 55.637 23.709 55.637s23.709-42.525 23.709-55.637a23.71 23.71 0 0 0-23.709-23.709zm0 33.823a10.431 10.431 0 1 1 10.431-10.431 10.431 10.431 0 0 1-10.431 10.431z"
        fill="#4ecca3"
      />
      <ellipse
        data-name="Ellipse 17"
        cx={14.347}
        cy={5.91}
        rx={14.347}
        ry={5.91}
        transform="rotate(-23.3 865.352 -336.933)"
        fill="#4ecca3"
        opacity={0.1}
      />
      <ellipse
        data-name="Ellipse 18"
        cx={3.174}
        cy={4.152}
        rx={3.174}
        ry={4.152}
        transform="translate(216.015 308.073)"
        fill="#393e46"
      />
      <ellipse
        data-name="Ellipse 19"
        cx={3.174}
        cy={4.152}
        rx={3.174}
        ry={4.152}
        transform="translate(216.015 302.995)"
        fill="#393e46"
      />
      <ellipse
        data-name="Ellipse 20"
        cx={3.174}
        cy={4.152}
        rx={3.174}
        ry={4.152}
        transform="translate(216.015 297.921)"
        fill="#393e46"
      />
      <ellipse
        data-name="Ellipse 21"
        cx={3.174}
        cy={4.152}
        rx={3.174}
        ry={4.152}
        transform="translate(216.015 292.847)"
        fill="#393e46"
      />
      <ellipse
        data-name="Ellipse 22"
        cx={3.174}
        cy={4.152}
        rx={3.174}
        ry={4.152}
        transform="translate(216.015 287.769)"
        fill="#393e46"
      />
      <ellipse
        data-name="Ellipse 23"
        cx={3.174}
        cy={4.152}
        rx={3.174}
        ry={4.152}
        transform="translate(216.015 282.695)"
        fill="#3f3d56"
      />
      <ellipse
        data-name="Ellipse 24"
        cx={3.174}
        cy={4.152}
        rx={3.174}
        ry={4.152}
        transform="translate(216.015 277.621)"
        fill="#3f3d56"
      />
      <path
        data-name="Path 237"
        d="M207.313 247.037a15.491 15.491 0 0 1-1.184-1.716l8.338-1.372-9.007.069a15.243 15.243 0 0 1-.292-12.039l12.095 6.253-11.151-8.2a15.2 15.2 0 1 1 25.095 17.006 15.247 15.247 0 0 1 1.716 2.771l-10.812 5.623 11.537-3.86a15.2 15.2 0 0 1-2.449 14.269 15.2 15.2 0 1 1-23.885 0 15.2 15.2 0 0 1 0-18.79z"
        fill="#4ecca3"
      />
      <path
        data-name="Path 238"
        d="M234.445 256.417a15.132 15.132 0 0 1-3.251 9.4 15.2 15.2 0 1 1-23.885 0c-2.033-2.576 27.136-11.09 27.136-9.4z"
        opacity={0.1}
      />
      <ellipse
        data-name="Ellipse 25"
        cx={8.574}
        cy={20.814}
        rx={8.574}
        ry={20.814}
        transform="rotate(-45 349.027 144.931)"
        fill="#4ecca3"
        opacity={0.1}
      />
      <ellipse
        data-name="Ellipse 26"
        cx={4.602}
        cy={6.026}
        rx={4.602}
        ry={6.026}
        transform="translate(17.397 287.212)"
        fill="#232931"
      />
      <ellipse
        data-name="Ellipse 27"
        cx={4.602}
        cy={6.026}
        rx={4.602}
        ry={6.026}
        transform="translate(17.397 279.847)"
        fill="#232931"
      />
      <ellipse
        data-name="Ellipse 28"
        cx={4.602}
        cy={6.026}
        rx={4.602}
        ry={6.026}
        transform="translate(17.397 272.483)"
        fill="#232931"
      />
      <ellipse
        data-name="Ellipse 29"
        cx={4.602}
        cy={6.026}
        rx={4.602}
        ry={6.026}
        transform="translate(17.397 265.119)"
        fill="#232931"
      />
      <ellipse
        data-name="Ellipse 30"
        cx={4.602}
        cy={6.026}
        rx={4.602}
        ry={6.026}
        transform="translate(17.397 257.755)"
        fill="#232931"
      />
      <ellipse
        data-name="Ellipse 31"
        cx={4.602}
        cy={6.026}
        rx={4.602}
        ry={6.026}
        transform="translate(17.397 250.391)"
        fill="#3f3d56"
      />
      <ellipse
        data-name="Ellipse 32"
        cx={4.602}
        cy={6.026}
        rx={4.602}
        ry={6.026}
        transform="translate(17.397 243.026)"
        fill="#3f3d56"
      />
      <path
        data-name="Path 239"
        d="M39.228 198.656a21.928 21.928 0 0 0 1.716-2.522l-12.095-1.986 13.081.094a22.105 22.105 0 0 0 .429-17.469l-17.546 9.105 16.174-11.9A22.05 22.05 0 1 0 4.57 198.656a21.94 21.94 0 0 0-2.513 4.019l15.7 8.149-16.727-5.618a22.067 22.067 0 0 0 3.556 20.7 22.045 22.045 0 1 0 34.655 0 22.05 22.05 0 0 0 0-27.261z"
        fill="#4ecca3"
      />
      <path
        data-name="Path 240"
        d="M-.145 212.287a21.943 21.943 0 0 0 4.718 13.63 22.045 22.045 0 1 0 34.655 0c2.954-3.748-39.373-16.107-39.373-13.63z"
        opacity={0.1}
      />
    </g>
  </Box>
);

Map.displayName = 'Map';

export default Map;
