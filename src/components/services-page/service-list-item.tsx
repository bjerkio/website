import React from 'react';
import { Box, Container, Grid, Heading, Image, Label } from 'theme-ui';
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
  dividingImage?: string;
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
    dividingImage,
  },
}) => (
  <Container id={name} sx={{ mt: [5, 5, 6], overflow: 'hidden' }}>
    <Image
      src={`../${icon}`}
      sx={{
        display: ['block', 'block', 'none'],
        width: '55%',
        marginLeft: '58%',
        mb: 3,
      }}
    />
    <Grid
      gap={0}
      columns={textAlign === 'right' ? [1, 1, '2fr 3fr'] : [1, 1, '3fr 2fr']}
      sx={{ pl: [2, 2, 6], px: [4, 4, 6] }}
    >
      {textAlign === 'left' && (
        <>
          <Box>
            <Heading
              sx={{
                pb: 3,
                fontWeight: 700,
                fontSize: 'clamp(30px, 2vw, 40px)',
              }}
            >
              {title}
            </Heading>
            <Label sx={{ fontSize: 'clamp(16px, 1.5vw, 24px)' }}>
              {description}
            </Label>
            <Box sx={{ mt: 5 }}>
              <Label
                sx={{
                  display: ['block', 'block', 'none'],
                  fontWeight: '700',
                  lineHeight: 1,
                }}
              >
                {initials}
              </Label>
              <Label
                sx={{
                  display: ['block', 'block', 'none'],
                  lineHeight: 1,
                }}
              >
                {position}
              </Label>
            </Box>
            <Button
              href={navigationLink}
              sx={{ color: 'black', fontSize: 1, mt: [4, 4, 0], px: [4, 4, 0] }}
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
            <Heading
              pb={3}
              sx={{ fontWeight: 600, fontSize: 'clamp(30px, 2vw, 40px)' }}
            >
              {title}
            </Heading>
            <Label sx={{ fontSize: 'clamp(16px, 1.5vw, 24px)' }}>
              {description}
            </Label>
            <Box sx={{ mt: 5 }}>
              <Label
                sx={{
                  display: ['block', 'block', 'none'],
                  fontWeight: '700',
                  lineHeight: 1,
                }}
              >
                {initials}
              </Label>
              <Label
                sx={{
                  display: ['block', 'block', 'none'],
                  lineHeight: 1,
                }}
              >
                {position}
              </Label>
            </Box>
            <Button
              href={navigationLink}
              sx={{ color: 'black', fontSize: 1, mt: [4, 4, 0], px: [4, 4, 0] }}
            >
              {linkText}
            </Button>
          </Box>
        </>
      )}
    </Grid>
    {dividingImage && (
      <Box sx={{ mt: 6 }}>
        <img src={`../${dividingImage}`} style={{ width: '100%' }} />
      </Box>
    )}
  </Container>
);
