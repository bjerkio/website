import Img, { FluidObject } from 'gatsby-image';
import React from 'react';
import { Box, Container, Grid, Heading, Label } from 'theme-ui';

// TODO: Replace with automatically generated types when available from Sanity.
// TODO: replace image with gatsby-image when Sanity will be done

export interface AboutListItemProps {
  title: string;
  descriptionArray: string[];
  image?: FluidObject;
  textAlign: 'left' | 'right';
}

export const AboutListItem: React.FC<{ data: AboutListItemProps }> = ({
  data,
}) => (
  <Box>
    <Container sx={{ mt: 6 }}>
      <Grid
        gap={0}
        columns={
          data.textAlign === 'right' ? [1, 1, '4fr 7fr'] : [1, 1, '7fr 4fr']
        }
        px={5}
      >
        {data.textAlign === 'right' && <>
          <Box px={4} /*sx={{ gridRow: data.textAlign === 'right' ? 1 : 2 }}*/>
            <Img
              imgStyle={{objectFit: 'contain'}}
              fluid={data.image}
              durationFadeIn={0}
              fadeIn={false}
              draggable={false}
            />
          </Box>
          <Box>
            <Heading>{data.title}</Heading>
            {data.descriptionArray.map(descriptionLine => 
              <Label mt={3}>{descriptionLine}</Label>)}
          </Box>
        </>}
        {data.textAlign === 'left' && <>
          <Box>
            <Heading>{data.title}</Heading>
            {data.descriptionArray.map(descriptionLine => 
              <Label mt={3}>{descriptionLine}</Label>)}
          </Box>
          <Box px={4} /*sx={{ gridRow: data.textAlign === 'right' ? 1 : 2 }}*/>
            <Img
              imgStyle={{objectFit: 'contain'}}
              fluid={data.image}
              durationFadeIn={0}
              fadeIn={false}
              draggable={false}
            />
          </Box>
        </>}
      </Grid>
    </Container>
  </Box>
);
