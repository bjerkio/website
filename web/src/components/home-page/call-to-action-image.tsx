import Img from 'gatsby-image';
import React, { useState } from 'react';
import { Box, Link } from 'theme-ui';

export interface CallToActionImageProps {
  linkTo: string;
  linkText: string;
  image: any;
}

const CallToActionImage: React.FC<{ data: CallToActionImageProps }> = ({
  data
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
          '.ctaImage': {
              opacity: '.7',
              transition: '.5s'
          }
        },
        '.link': {
          color: 'text',
          textDecoration: 'none',
        },
        '.ctaImage': {
            transition: '.4s'
        }
      }}
    >
      <Link className="link" href={data.linkTo}>
        <Box sx={{ mt: 4 }}>
            <Img
                className='ctaImage'
                fluid={data.image.asset.fluid}
                durationFadeIn={0}
                fadeIn={false}
                draggable={false}
            />
        </Box>
        <Box mt={1}>
          <span className="linkText">
            {data.linkText}
          </span>
        </Box>
      </Link>
    </Box>
  );
};

export default CallToActionImage;
