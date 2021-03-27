import React from 'react';
import ReactPlayer from 'react-player/lazy';
import { Box, Container, ThemeUICSSObject } from 'theme-ui';

interface IntroVideoProps {
  videoUrl?: string;
  videoTitle?: string;
}

const style: ThemeUICSSObject = {
  '.main-video-container': {
    position: 'absolute',
    width: '100%',
    height: '100%',
    '.video-container': {
      position: 'relative',
      height: '100vh',
      width: 'auto',
      textAlign: 'center',
      overflow: 'hidden',
      '&::after': {
        opacity: 0.5,
      },
    },
  },
  '.data-container': {
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
    px: [5, 5, 6],
    paddingTop: '10%',
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
          style={{
            position: 'absolute',
            inset: '-100%',
            margin: 'auto',
          }}
        />
      </Box>
    </Box>
    <Container className="data-container">
      <Box sx={{ my: '32%', width: '60%', zIndex: 2 }}>{children}</Box>
    </Container>
  </Container>
);

export default IntroVideo;
