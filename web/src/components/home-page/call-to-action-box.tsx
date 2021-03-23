import React, { useState } from 'react';
import { Box, Heading, Link } from 'theme-ui';

export interface CallToActionBoxProps {
  title: string;
  description: string;
  linkTo?: string;
  linkText?: string;
  image?: any;
  hoverImage?: any;
}

const CallToActionBox: React.FC<{ data: CallToActionBoxProps }> = ({
  children,
  data,
}) => {
  const [hover, setHover] = useState(false);

  return (
    <Box
      onMouseOver={() => setHover(true)}
      onMouseOut={() => setHover(false)}
      sx={{
        ':hover': {
          cursor: 'pointer',
          '.link': {
            borderBottom: '2px solid',
          },
        },
        '.link': {
          color: 'text',
          textDecoration: 'none',
        },
        '.img': {
          height: '50px',
        },
      }}
    >
      <Box sx={{ width: 100, height: 30, marginBottom: 40 }}>
        {data.image && data.hoverImage && (
          <img className="img" src={hover ? data.hoverImage : data.image} />
        )}
      </Box>
      <Heading sx={{ mb: 3 }}>{data.title}</Heading>
      <Box>{children}</Box>
      <Box mt={4}>
        {data.linkTo && (
          <Link className="link" href={data.linkTo}>
            {data.linkText}
          </Link>
        )}
      </Box>
    </Box>
  );
};

export default CallToActionBox;
