/** @jsx jsx */
import { graphql, navigate } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Box, Button, Grid, Heading, jsx } from 'theme-ui';

export interface SkillBoxProps {
  name: string;
  image: any;
  title: string;
  linkTo: string;
}

export const query = graphql`
  fragment SkillImage on File {
    childImageSharp {
      gatsbyImageData(
        width: 1256
        placeholder: DOMINANT_COLOR
        formats: [AUTO, WEBP, AVIF]
      )
    }
  }
`;

export const SkillBox: React.FC<SkillBoxProps> = ({
  name,
  title,
  linkTo,
  children,
  image: imageSource,
}) => {
  const image = getImage(imageSource);
  return (
    <Grid columns={['1fr', '5fr 6fr']}>
      <GatsbyImage
        sx={{ borderRadius: '0.3125rem' }}
        image={image}
        alt={title}
      />
      <Box sx={{ ml: [0, 4], my: [4, 5] }}>
        <Heading sx={{ fontSize: 6, fontWeight: 600, lineHeight: '3rem' }}>
          <FormattedMessage id={`skill-box-${name}`} defaultMessage={title} />
        </Heading>
        <Box sx={{ fontSize: 4 }}>{children}</Box>
        <Button onClick={() => navigate(linkTo)} sx={{ mt: 3 }}>
          Read more →
        </Button>
      </Box>
    </Grid>
  );
};