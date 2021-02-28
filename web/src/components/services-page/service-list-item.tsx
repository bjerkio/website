import Img, { FluidObject } from 'gatsby-image';
import React from 'react';
import { Box, Button, Container, Flex, Grid, Heading, Label } from 'theme-ui';
import { Link } from "gatsby-plugin-intl"

// TODO: Replace with automatically generated types when available from Sanity.
// TODO: fix image showing when Sanity will be done

export interface ServiceListItemProps {
  name: string;
  title: string;
  description: string;
  url: {
    navigationLink: string;
    linkText: string;
  };
  image?: FluidObject,
  textAlign: 'left' | 'right';
  dividedImage?: FluidObject;
}

export const ServiceListItem: React.FC<{ data: ServiceListItemProps }> = ({
  data,
}) => (
  <Container id={data.name} sx={{ mt: 6 }}>
    <Grid 
      gap={0} 
      columns={
        data.textAlign === 'right' ? [1, 1, '2fr 3fr'] : [1, 1, '3fr 2fr']
      } 
      px={5}
    >
      {data.textAlign === 'left' && <>
        <Box>
          <Heading pb={3}>{data.title}</Heading>
          <Label>{data.description}</Label>
          <Button sx={{ color: 'black', fontSize: 1, mt: 4 }}>
            <Link to={data.url.navigationLink}>{data.url.linkText}</Link>
          </Button>
        </Box>
        <Box px={4}>
          <Img
              fluid={data.image}
              durationFadeIn={0}
              fadeIn={false}
              draggable={false}
            />
        </Box>
        </>}
      {data.textAlign === 'right' && <>
        <Box px={4}>
          <Img
              fluid={data.image}
              durationFadeIn={0}
              fadeIn={false}
              draggable={false}
            />
        </Box>
        <Box>
          <Heading pb={3}>{data.title}</Heading>
          <Label>{data.description}</Label>
          <Button sx={{ color: 'black', fontSize: 1, mt: 4 }}>
            <Link to={data.url.navigationLink}>{data.url.linkText}</Link>
          </Button>
        </Box>
        </>}
    </Grid>
    {data.dividedImage && (
      <Box sx={{ width: '100%', height: 'auto', mt: 6 }}>
        <Img
          fluid={data.dividedImage}
          durationFadeIn={0}
          fadeIn={false}
          draggable={false}
        />
      </Box>
    )}
  </Container>
);
