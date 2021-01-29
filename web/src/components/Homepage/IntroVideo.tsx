import React, { Fragment } from 'react'
import { Box, Container } from 'theme-ui'

interface IntroVideo {
  videoUrl?: string;
  videoTitle?: string;
}

const IntroVideo: React.FC<{data: IntroVideo}> = ({ children, data }) => (
  <Fragment>
    <Box sx={{
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
    }}>
      <Container sx={{
        position: 'absolute',
        width: '100%',
        height: '800px'
      }}>
        <iframe 
          width="100%" 
          height="100%" 
          src={data.videoUrl + `?autoplay=1&modestbranding=1&loop=1&rel=0&controls=0&playlist=${/[^/]*$/.exec(data.videoUrl)}&mute=1`} 
          title={data.videoTitle}
          frameBorder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
          allowFullScreen
          css={{pointerEvents: 'none'}}
        />
      </Container>
    </Box>
    <Container
      sx={{
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
      }}
    >
      <Box sx={{ my: '32%', width: '60%', zIndex: 2 }}>{children}</Box>
    </Container>
  </Fragment>
)

export default IntroVideo
