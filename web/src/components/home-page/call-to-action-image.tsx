import React from 'react';
import { Box, Link, ThemeUIStyleObject } from 'theme-ui';

export interface CallToActionImageProps {
  linkTo: string;
  linkText: string;
  image: string;
}

const styles: ThemeUIStyleObject = {
  mb: 5,
  overflow: 'hidden',
  ':hover': {
    cursor: 'pointer',
    '.linkText': {
      borderBottom: '2px solid',
    },
    '.img': {
      opacity: '.7',
      transition: '.5s',
    },
  },
  '.link': {
    color: 'text',
    textDecoration: 'none',
  },
  '.img-container': {
    mt: 4,
    height: ['37vh', '100%', '100%'],
    width: ['140vw', '100%', '100%'],
    backgroundPosition: 'center center',
    backgroundRepeat: 'no-repeat',
    marginLeft: ['-20vw', 0, 0],
    '.img': {
      width: '100%',
      height: '100%',
      transition: '.4s',
    },
  },
};

const CallToActionImage: React.FC<{ data: CallToActionImageProps }> = ({
  data: { linkText, linkTo, image },
}) => {
  return (
    <Box sx={styles}>
      <Link className="link" href={linkTo} sx={{ overflow: 'hidden' }}>
        <Box className="img-container" sx={{}}>
          <img src={image} className="img" />
        </Box>
        <Box sx={{ mt: 1, fontSize: '22px', fontWeight: '600', mx: [4, 4, 0] }}>
          <span className="linkText">{linkText}</span>
        </Box>
      </Link>
    </Box>
  );
};

export default CallToActionImage;
