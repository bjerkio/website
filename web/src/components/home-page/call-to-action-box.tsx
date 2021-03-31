import { Link } from 'gatsby-plugin-react-i18next';
import React, { useState } from 'react';
import { Box, Heading, ThemeUIStyleObject } from 'theme-ui';

export interface CallToActionBoxProps {
  title: string;
  description: string;
  linkTo?: string;
  linkText?: string;
  image?: string;
  hoverImage?: string;
  imageStyle?: ThemeUIStyleObject;
}

const CallToActionBox: React.FC<{ data: CallToActionBoxProps }> = ({
  children,
  data: { title, linkTo, linkText, image, hoverImage, imageStyle },
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
          ...imageStyle,
        },
      }}
    >
      <Box sx={{ width: 100, height: 30, marginBottom: 40 }}>
        {image && hoverImage && (
          <img
            className="img"
            src={hover ? `../${hoverImage}` : `../${image}`}
          />
        )}
      </Box>
      <Heading
        sx={{ mb: 3, fontWeight: '700', fontSize: 'clamp(11px, 5vw, 30px)' }}
      >
        {title}
      </Heading>
      <Box sx={{ fontSize: 'clamp(8px, 4vw, 22px)' }}>{children}</Box>
      <Box mt={4}>
        {linkTo && (
          <Link
            className="link"
            to={linkTo}
            sx={{ fontSize: 'clamp(8px, 4vw, 20px)' }}
          >
            {linkText}
          </Link>
        )}
      </Box>
    </Box>
  );
};

export default CallToActionBox;
