import React, { Fragment } from 'react'
import { Box, Container, SystemStyleObject } from 'theme-ui'
import Video from '../Video'

interface IntroVideoProps {
  videoUrl?: string;
  videoTitle?: string;
}

const style: SystemStyleObject = {
  '.video-container': {
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    zIndex: -99,
    '&::after': {
      display: 'block',
      content: '',
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '800px',
      zIndex: 1
    }
  },
  '.data-container': {
    minHeight: '3rem',
    fontSize: 5,
    justifyContent: 'flex-start',
    alignContent: 'center',
    alignItems: 'center',
    height: '800px',
    fontWeight: 'bold',
    display: 'flex',
    textAlign: 'start',
    verticalAlign: 'center',
    color: 'background',
    px: '188px',
  }
}

const IntroVideoProps: React.FC<{data: IntroVideoProps}> = ({ children, data }) => (
  <Container sx={style}>
    <Box className='video-container'>
      <Video data={{
        width: '100%',
        height: '800px',
        videoUrl: data.videoUrl + `?autoplay=1&modestbranding=1&loop=1&rel=0&controls=0&playlist=${/[^/]*$/.exec(data.videoUrl)}&mute=1`,
        videoTitle: data.videoTitle
      }}/>
    </Box>
    <Container className='data-container'>
      <Box sx={{ my: '32%', width: '60%', zIndex: 2 }}>{children}</Box>
    </Container>
  </Container>
)

export default IntroVideoProps
