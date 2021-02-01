import React, { Fragment } from 'react';
import { Container } from 'theme-ui';

interface YouTubeVideoProps {
  width: string;
  height: string;
  videoUrl?: string;
  videoTitle?: string;
}

const YouTubeVideo: React.FC<{ data: YouTubeVideoProps }> = ({ data }) => (
  <Fragment>
    <Container
      sx={{
        position: 'absolute',
        width: data.width,
        height: data.height,
      }}
    >
      <iframe
        width="100%"
        height="100%"
        src={data.videoUrl}
        title={data.videoTitle}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        css={{ pointerEvents: 'none' }}
      />
    </Container>
  </Fragment>
);

export default YouTubeVideo;
