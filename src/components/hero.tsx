import BackgroundImage from 'gatsby-background-image';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { convertToBgImage } from 'gbimage-bridge';
import React from 'react';
// import ReactPlayer from 'react-player/lazy';
import { Box, Container, Flex } from 'theme-ui';

interface IntroVideoProps {
  image?: any;
  // videoUrl?: string;
  // videoTitle?: string;
}

const Hero: React.FC<IntroVideoProps> = ({ children, image }) => {
  const img = getImage(image);
  const bgImage = convertToBgImage(img);
  return (
    <BackgroundImage {...bgImage}>
      <Flex
        sx={{
          // bg: 'iron',
          // backgroundImage: bgImageUrl ? `url('${bgImageUrl}');` : undefined,
          // backgroundRepeat: 'no-repeat',
          // backgroundSize: 'cover',
          // backgroundPosition: '50% 50%',
          height: ['auto', '80vh'],
          py: 5,
          alignItems: 'center',
        }}
      >
        <GatsbyImage image={image} alt={'the hero box background'} />
        <Container sx={{ maxWidth: '1520px', margin: '0 auto', px: [3, 3, 3] }}>
          <Box sx={{ width: ['auto', 'auto', '60%'] }}>{children}</Box>
        </Container>
      </Flex>
    </BackgroundImage>
  );
    }

export default Hero;
