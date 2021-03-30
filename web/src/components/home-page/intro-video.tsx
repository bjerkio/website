import React from 'react';
import ReactPlayer from 'react-player/lazy';
import { Box, Container, ThemeUICSSObject } from 'theme-ui';

interface IntroVideoProps {
  videoUrl?: string;
  videoTitle?: string;
}

const style: ThemeUICSSObject = {
  '.main-video-container': {
    width: '100%',
    height: '100%',
    '.video-container': {
      position: 'relative',
      height: '100vh',
      width: 'auto',
      textAlign: 'center',
      overflow: 'hidden',
      zIndex: -99,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },

    '.data-container': {
      left: 0,
      right: 0,
      position: 'absolute',
      top: 2,
      minHeight: '3rem',
      fontSize: 5,
      justifyContent: 'flex-start',
      alignContent: 'center',
      alignItems: 'center',
      height: '50rem',
      fontWeight: 'bold',
      display: 'flex',
      textAlign: 'start',
      verticalAlign: 'center',
      color: 'background',
      px: [4, 4, 6],
      paddingTop: '10%',
      maxWidth: '1920px',
    },
  },
};

const IntroVideo: React.FC<{ data: IntroVideoProps }> = ({
  children,
  data,
}) => (
  <Container sx={style}>
    <Box className="main-video-container">
      <Box className="video-container">
        <ReactPlayer
          url={data.videoUrl}
          width="auto"
          height="100vh"
          playing={true}
          loop={true}
          controls={false}
          volume={0}
        />
      </Box>
      <Container className="data-container">
        <Box sx={{ width: '60%', zIndex: 2 }}>{children}</Box>
      </Container>
    </Box>
  </Container>
);

export default IntroVideo;
