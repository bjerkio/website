/** @jsx jsx */
import React from 'react';
import { Box, BoxProps, jsx } from 'theme-ui';

export interface ServicesStrategicProps extends BoxProps {
  width?: number;
  height?: number;
}

export const ServicesStrategic: React.FC<ServicesStrategicProps> = ({
  width = 342.5,
  height = 200.75,
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

    <g transform="translate(.5 1.001)">
      <path
        d="M461.888 292.915A67.974 67.974 0 0 0 434.4 281.56a69.816 69.816 0 0 0-30.338 1.424 68.042 68.042 0 0 0-14.162 5.606 82.322 82.322 0 0 0-12.595 8.575c-4 3.2-7.869 6.549-12.045 9.565a71.571 71.571 0 0 1-41.984 13.5q-1.891 0-3.78-.1a.488.488 0 1 1 0-.975 70.849 70.849 0 0 0 43.4-11.983c4.328-2.958 8.28-6.339 12.314-9.615a94.668 94.668 0 0 1 12.365-8.819 70.5 70.5 0 0 1 72.12 1.5c1 .636 1.98 1.3 2.942 1.985.546.388-.213 1.077-.749.692z"
        transform="translate(-131.898 -279.552)"
        style={{ strokeWidth: 2, stroke: '#0fcfa2', fill: 'primary' }}
      />
      <ellipse
        className="b"
        cx={11.071}
        cy={10.933}
        rx={11.071}
        ry={10.933}
        transform="translate(319.859 .38)"
      />
      <ellipse
        className="b"
        cx={11.071}
        cy={10.933}
        rx={11.071}
        ry={10.933}
        transform="translate(50.715 152.343)"
      />
      <path
        className="c"
        d="M3.79 100.992h180.64a3.772 3.772 0 0 0 3.791-3.744V4.423A3.772 3.772 0 0 0 184.43.68H3.79A3.772 3.772 0 0 0-.001 4.423v92.825a3.772 3.772 0 0 0 3.791 3.744zM184.43 2.177a2.263 2.263 0 0 1 2.275 2.246v92.825a2.263 2.263 0 0 1-2.275 2.246H3.79a2.263 2.263 0 0 1-2.274-2.246V4.423A2.263 2.263 0 0 1 3.79 2.177z"
      />
      <ellipse
        className="d"
        cx={15.441}
        cy={15.25}
        rx={15.441}
        ry={15.25}
        transform="translate(138.698 18.315)"
      />
      <path
        className="b"
        d="M118.478 23.398a2.542 2.542 0 1 1 0 5.083H21.212a2.542 2.542 0 1 1 0-5.083zM118.478 38.647a2.542 2.542 0 1 1 0 5.083H66.273a2.542 2.542 0 1 1 0-5.083zM165.982 63.025c1.958 0 3.551 1.14 3.551 2.542s-1.593 2.541-3.551 2.541H22.652c-1.957 0-3.551-1.14-3.551-2.541s1.594-2.542 3.551-2.542zM165.982 78.276c1.958 0 3.551 1.14 3.551 2.542s-1.593 2.541-3.551 2.541H22.652c-1.957 0-3.551-1.14-3.551-2.541s1.594-2.542 3.551-2.542z"
      />
      <path
        d="M775.724 493.3c-10.191-4.366-21.569-.56-31.174 3.465-4.947 2.072-9.841 4.284-14.961 5.921a86.146 86.146 0 0 1-13.191 3.087 94.37 94.37 0 0 1-27.1.164 95.5 95.5 0 0 1-26.149-7.51 88.522 88.522 0 0 1-22.632-14.613q-1.286-1.147-2.522-2.347c-.981-.949.525-2.437 1.506-1.488a85.934 85.934 0 0 0 22.079 15.392 93.319 93.319 0 0 0 25.65 8.138 91.7 91.7 0 0 0 27.03.461 85.978 85.978 0 0 0 13.24-2.84 141.174 141.174 0 0 0 14.607-5.6c9.7-4.112 20.468-8.139 31.121-5.3a26.287 26.287 0 0 1 3.574 1.26c1.251.532.168 2.346-1.078 1.81z"
        transform="translate(-576.776 -319.846)"
        style={{ strokeWidth: '.5px', stroke: '#0fcfa2', fill: 'primary' }}
      />
      <path
        className="d"
        d="M202.886 199.257h85.338l-20.08-34.356a4.127 4.127 0 0 0-7.1 0l-8.58 14.676-14.588-24.955a5.167 5.167 0 0 0-8.894 0z"
      />
      <path
        className="c"
        d="M202.806 199.248h90.975a3.773 3.773 0 0 0 3.791-3.744v-50.146a3.771 3.771 0 0 0-3.79-3.743h-90.976a3.771 3.771 0 0 0-3.791 3.743v50.147a3.772 3.772 0 0 0 3.791 3.743zm90.975-56.137a2.264 2.264 0 0 1 2.275 2.246v50.148a2.263 2.263 0 0 1-2.274 2.246h-90.976a2.264 2.264 0 0 1-2.278-2.246v-50.147a2.264 2.264 0 0 1 2.275-2.246z"
      />
    </g>
  </Box>
);

ServicesStrategic.displayName = 'ServicesStrategic';

export default ServicesStrategic;