import React from 'react';
import { Box, Container, Grid, Heading, Image, Label } from 'theme-ui';

export interface AboutListItemProps {
  title: string;
  descriptionArray: string[];
  image?: string;
  textAlign: 'left' | 'right';
}

export const AboutListItem: React.FC<{ data: AboutListItemProps }> = ({
  data: { title, descriptionArray, image, textAlign },
}) => (
  <Box>
    <Container sx={{ mt: [5, 5, 6], overflow: 'hidden' }}>
      <Image
        src={`../${image}`}
        sx={{
          display: ['block', 'block', 'none'],
          width: '55%',
          marginLeft: textAlign === 'left' ? '58%' : '0',
          mb: 3,
        }}
      />
      <Grid
        gap={0}
        columns={textAlign === 'right' ? [1, 1, '4fr 7fr'] : [1, 1, '7fr 4fr']}
        px={[4, 4, 5]}
      >
        {textAlign === 'right' && (
          <>
            <Box px={4}>
              <Image
                src={`../${image}`}
                sx={{ width: '90%', display: ['none', 'none', 'block'] }}
              />
            </Box>
            <Box>
              <Heading
                sx={{ fontWeight: 700, fontSize: 'clamp(30px, 2vw, 40px)' }}
              >
                {title}
              </Heading>
              {descriptionArray.map((descriptionLine, index) => (
                <Label
                  key={index}
                  mt={3}
                  sx={{ fontSize: 'clamp(16px, 1.5vw, 24px)' }}
                >
                  {descriptionLine}
                </Label>
              ))}
            </Box>
          </>
        )}
        {textAlign === 'left' && (
          <>
            <Box>
              <Heading
                sx={{ fontWeight: 600, fontSize: 'clamp(30px, 2vw, 40px)' }}
              >
                {title}
              </Heading>
              {descriptionArray.map((descriptionLine, index) => (
                <Label
                  key={index}
                  mt={3}
                  sx={{ fontSize: 'clamp(16px, 1.5vw, 24px)' }}
                >
                  {descriptionLine}
                </Label>
              ))}
            </Box>
            <Box px={4}>
              <Image
                src={`../${image}`}
                sx={{ width: '90%', display: ['none', 'none', 'block'] }}
              />
            </Box>
          </>
        )}
      </Grid>
    </Container>
  </Box>
);
