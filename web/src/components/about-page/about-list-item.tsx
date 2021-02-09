import Img, { FluidObject } from 'gatsby-image';
import React from 'react';
import { Box, Container, Grid, Heading, Label } from 'theme-ui';

// TODO: Replace with automatically generated types when available from Sanity.
// TODO: replace image with gatsby-image when Sanity will be done

export interface AboutListItemProps {
  title: string;
  description: string;
  image?: FluidObject;
  textAlign: 'left' | 'right';
}

export const AboutListItem: React.FC<{ data: AboutListItemProps }> = ({
  data,
}) => (
  <Box>
    <Container sx={{ mt: 6 }}>
      <Grid
        gap={2}
        columns={
          data.textAlign === 'right' ? [1, 1, '1fr 2fr'] : [1, 1, '2fr 1fr']
        }
        px={5}
      >
        <Box>
          <Heading pb={3}>{data.title}</Heading>
          <Label>{data.description}</Label>
        </Box>
        <Box sx={{ gridRow: data.textAlign === 'right' ? 1 : 2 }}>
          <Img
            fluid={data.image}
            durationFadeIn={0}
            fadeIn={false}
            draggable={false}
          />
        </Box>
      </Grid>
    </Container>
  </Box>
);
