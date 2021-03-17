import Img from 'gatsby-image';
import React from 'react';
import { Box, Link } from 'theme-ui';

export interface CallToActionImageProps {
  linkTo: string;
  linkText: string;
  image: any;
}

const CallToActionImage: React.FC<{ data: CallToActionImageProps }> = ({
  data,
}) => {
  return (
    <Box
      sx={{
        ':hover': {
          cursor: 'pointer',
          '.linkText': {
            borderBottom: '2px solid',
          },
          '.ctaImage': {
            opacity: '.7',
            transition: '.5s',
          },
        },
        '.link': {
          color: 'text',
          textDecoration: 'none',
        },
        '.ctaImage': {
          transition: '.4s',
        },
      }}
    >
      <Link className="link" to={data.linkTo}>
        <Box sx={{ mt: 4 }}>
          <Img
            className="ctaImage"
            fluid={data.image.asset.fluid}
            durationFadeIn={0}
            fadeIn={false}
            draggable={false}
          />
        </Box>
        <Box mt={1}>
          <span className="linkText">{data.linkText}</span>
        </Box>
      </Link>
    </Box>
  );
};

export default CallToActionImage;
