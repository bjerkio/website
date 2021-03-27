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
      zIndex: -99,
      bg: 'dark',
      opacity: 0.5,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
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
    px: [4, 4, 6],
    pt: '10%',
    '.data-box': {
      my: '32%', 
      width: ['100%', '60%', '60%'],
    }
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
          sx={{
            position: 'absolute'
          }}
        />
      </Box>
    </Box>
    <Container className="data-container">
      <Box className='data-box'>{children}</Box>
    </Container>
  </Container>
);

export default IntroVideo;
