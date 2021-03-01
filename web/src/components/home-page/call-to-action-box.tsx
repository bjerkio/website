import Img from 'gatsby-image';
import { Link } from 'gatsby-plugin-intl';
import React, { useState } from 'react';
import { Box, Heading } from 'theme-ui';

export interface CallToActionBoxProps {
  title: string;
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
          '.linkText': {
            borderBottom: '2px solid',
          },
        },
        '.link': {
          color: 'text',
          textDecoration: 'none',
        },
      }}
      pr={5}
    >
      <Link className="link" to={data.linkTo}>
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
          <span className="linkText">{data.linkText}</span>
        </Box>
      </Link>
    </Box>
  );
};

export default CallToActionBox;
