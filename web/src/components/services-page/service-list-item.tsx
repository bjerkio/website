import React from 'react';
import { Box, Container, Grid, Heading, Label } from 'theme-ui';
import Button from '../button';
import { ServiceTileImage } from './service-tile-image';

export interface ServiceListItemProps {
  name: 'programming' | 'strategy' | 'project-management';
  title: string;
  description: string;
  url: {
    navigationLink: string;
    linkText: string;
  };
  photo: string;
  icon: string;
  initials: string;
  position: string;
  textAlign: 'left' | 'right';
  dividedImage?: string;
}

export const ServiceListItem: React.FC<{ data: ServiceListItemProps }> = ({
  data: {
    name,
    title,
    description,
    url: { navigationLink, linkText },
    photo,
    icon,
    initials,
    position,
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
            <ServiceTileImage
              data={{
                name,
                photo,
                icon,
                initials,
                position,
              }}
            />
          </Box>
        </>
      )}
      {textAlign === 'right' && (
        <>
          <Box px={4} sx={{ marginRight: '100px' }}>
            <ServiceTileImage
              data={{
                name,
                photo,
                icon,
                initials,
                position,
              }}
            />
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
