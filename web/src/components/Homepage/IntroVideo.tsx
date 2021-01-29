import React, { Fragment } from 'react'
import { Box, Container } from 'theme-ui'

interface IntroVideo {
  videoUrl?: string;
  videoTitle?: string;
}

const IntroVideo: React.FC<{data: IntroVideo}> = ({ children, data }) => (
  <Fragment>
    <Container sx={{
      position: 'absolute',
      width: '100%',
      height: '800px'
    }}>
      <iframe 
        width="100%" 
        height="100%" 
        src={data.videoUrl + `?autoplay=1&loop=1&rel=0&controls=0&playlist=${/[^/]*$/.exec(data.videoUrl)}`} 
        title={data.videoTitle}
        frameBorder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
        allowFullScreen
      />
    </Container>
    <Container
      sx={{
        bg: 'primary',
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
      <Box sx={{ my: '32%', width: '60%', zIndex: 3 }}>{children}</Box>
    </Container>
  </Fragment>
)

export default IntroVideo
