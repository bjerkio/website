/** @jsx */
import { Box, Container, Text } from '@theme-ui/components';
import Img, { FluidObject } from 'gatsby-image';
import React from 'react';

export interface ProjectListItemProps {
  image?: FluidObject;
  name: string;
}

export const ProjectListItem: React.FC<{ data: ProjectListItemProps }> = ({
  data,
}) => (
  <Container mb={[4, 5, 6]}>
    <Box
      sx={{
        width: '100%',
        height: 'auto',
        mt: [3, 4, 5],
        '&:hover': {
          opacity: '0.5',
        },
      }}
    >
      <Img fluid={data.image} draggable={false} />
    </Box>
    <Text>{data.name}</Text>
  </Container>
);
