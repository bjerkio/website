import React from 'react';
import { Box, Container, Grid, Heading, Label } from 'theme-ui';
import Button from '../button';

export interface ServiceListItemProps {
  name: string;
  title: string;
  description: string;
  url: {
    navigationLink: string;
    linkText: string;
  };
  image?: any;
  textAlign: 'left' | 'right';
  dividedImage?: any;
}

export const ServiceListItem: React.FC<{ data: ServiceListItemProps }> = ({
  data: {
    name,
    title,
    description,
    url: { navigationLink, linkText },
    image,
    textAlign,
    dividedImage,
  },
}) => (
  <Container id={name} sx={{ mt: 6 }}>
    <Grid
      gap={0}
      columns={textAlign === 'right' ? [1, 1, '2fr 3fr'] : [1, 1, '3fr 2fr']}
      px={6}
    >
      {textAlign === 'left' && (
        <>
          <Box>
            <Heading pb={3}>{title}</Heading>
            <Label>{description}</Label>
            <Button
              href={navigationLink}
              sx={{ color: 'black', fontSize: 1, mt: 4 }}
            >
              {linkText}
            </Button>
          </Box>
          <Box px={4}>
            <img src={`../${image}`} style={{ width: '90%' }} />
          </Box>
        </>
      )}
      {textAlign === 'right' && (
        <>
          <Box px={4}>
            <img src={`../${image}`} style={{ width: '90%' }} />
          </Box>
          <Box>
            <Heading pb={3}>{title}</Heading>
            <Label>{description}</Label>
            <Button
              href={navigationLink}
              sx={{ color: 'black', fontSize: 1, mt: 4 }}
            >
              {linkText}
            </Button>
          </Box>
        </>
      )}
    </Grid>
    {dividedImage && (
      <Box sx={{ mt: 6 }}>
        <img src={`../${dividedImage}`} style={{ width: '100%' }} />
      </Box>
    )}
  </Container>
);
