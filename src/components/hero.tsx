import React from 'react';
// import ReactPlayer from 'react-player/lazy';
import { Box, Container, Flex } from 'theme-ui';

interface IntroVideoProps {
  bgImageUrl?: string;
  // videoUrl?: string;
  // videoTitle?: string;
}

const Hero: React.FC<IntroVideoProps> = ({ children, bgImageUrl }) => (
  <Container
    sx={{
      bg: 'iron',
      backgroundImage: bgImageUrl ? `url('${bgImageUrl}');` : undefined,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      backgroundPosition: '50% 50%',
    }}
  >
    <Flex
      sx={{
        height: '80vh',
        alignItems: 'center',
        maxWidth: '1920px',
        margin: '0 auto',
        px: [5, 5, 6],
      }}
    >
      <Container>
        <Box sx={{ my: '32%', width: '60%', zIndex: 2 }}>{children}</Box>
      </Container>
    </Flex>
  </Container>
);

export default Hero;
