import React from 'react';
// import ReactPlayer from 'react-player/lazy';
import { Box, Container, Flex } from 'theme-ui';

interface IntroVideoProps {
  bgImageUrl?: string;
  // videoUrl?: string;
  // videoTitle?: string;
}

const Hero: React.FC<IntroVideoProps> = ({ children, bgImageUrl }) => (
  <Flex
    sx={{
      bg: 'iron',
      backgroundImage: bgImageUrl ? `url('${bgImageUrl}');` : undefined,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      backgroundPosition: '50% 50%',
      height: ['auto', '80vh'],
      py: 5,
      alignItems: 'center',
    }}
  >
    <Container sx={{ maxWidth: '1520px', margin: '0 auto', px: [3, 3, 3] }}>
      <Box sx={{ width: ['auto', 'auto', '60%'] }}>{children}</Box>
    </Container>
  </Flex>
);

export default Hero;
