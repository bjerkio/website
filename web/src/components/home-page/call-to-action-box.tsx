import Img from 'gatsby-image';
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
          '.link': {
            borderBottom: '2px solid',
          },
        },
        '.link': {
          color: 'text',
          textDecoration: 'none',
        },
      }}
    >
      <Box sx={{ width: 100, height: 30, mb: 4 }}>
        {data.image && data.hoverImage && (
          <Img
            fluid={
              !hover ? data.image.asset.fluid : data.hoverImage.asset.fluid
            }
            durationFadeIn={0}
            fadeIn={false}
            draggable={false}
          />
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
