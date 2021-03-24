import React from 'react';
import { Box, Container, Grid, Heading, Label } from 'theme-ui';

export interface AboutListItemProps {
  title: string;
  descriptionArray: string[];
  image?: any;
  textAlign: 'left' | 'right';
}

export const AboutListItem: React.FC<{ data: AboutListItemProps }> = ({
  data: { title, descriptionArray, image, textAlign },
}) => (
  <Box>
    <Container sx={{ mt: 6 }}>
      <Grid
        gap={0}
        columns={textAlign === 'right' ? [1, 1, '4fr 7fr'] : [1, 1, '7fr 4fr']}
        px={5}
      >
        {textAlign === 'right' && (
          <>
            <Box px={4}>
              <img src={`../${image}`} style={{ width: '90%' }} />
            </Box>
            <Box>
              <Heading>{title}</Heading>
              {descriptionArray.map((descriptionLine, index) => (
                <Label key={index} mt={3}>
                  {descriptionLine}
                </Label>
              ))}
            </Box>
          </>
        )}
        {textAlign === 'left' && (
          <>
            <Box>
              <Heading>{title}</Heading>
              {descriptionArray.map((descriptionLine, index) => (
                <Label key={index} mt={3}>
                  {descriptionLine}
                </Label>
              ))}
            </Box>
            <Box px={4}>
              <img src={`../${image}`} style={{ width: '90%' }} />
            </Box>
          </>
        )}
      </Grid>
    </Container>
  </Box>
);
