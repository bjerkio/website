import { graphql } from 'gatsby';
import BackgroundImage from 'gatsby-background-image';
import { getImage } from 'gatsby-plugin-image';
import { convertToBgImage } from 'gbimage-bridge';
import React from 'react';
import { Box, Container, Flex } from 'theme-ui';
import { HeroFragment } from '../generated/graphql-types';
// import ReactPlayer from 'react-player/lazy';

interface IntroVideoProps {
  image?: HeroFragment;
  // videoUrl?: string;
  // videoTitle?: string;
}

export const query = graphql`
  fragment Hero on File {
    childImageSharp {
      gatsbyImageData(
        width: 2000
        placeholder: BLURRED
        formats: [AUTO, WEBP, AVIF]
      )
    }
  }
`;

const Hero: React.FC<IntroVideoProps> = ({ children, image }) => {
  const InnerHero: React.FC = () => (
    <Container variant="centered" sx={{ px: [3, 3, 3] }}>
      <Box sx={{ width: ['auto', 'auto', '60%'] }}>{children}</Box>
    </Container>
  );

  if (!image) {
    return (
      <Flex
        sx={{
          bg: 'iron',
          height: ['auto', '80vh'],
          py: 5,
          alignItems: 'center',
        }}
      >
        <InnerHero />
      </Flex>
    );
  }

  const img = getImage(image as any);
  const bgImage = convertToBgImage(img);
  return (
    <BackgroundImage {...bgImage}>
      <Flex sx={{ py: 5, alignItems: 'center', height: ['auto', '80vh'] }}>
        <InnerHero />
      </Flex>
    </BackgroundImage>
  );
};

export default Hero;
