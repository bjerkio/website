import { Box, Container, Flex, Link, Text } from '@theme-ui/components';
import Img, { FluidObject } from 'gatsby-image';
import React from 'react';

export interface EmployeeListItemProps {
  photo?: FluidObject;
  name: string;
  position: string;
  email: string;
  phoneNumber: string;
}

export const EmployeeListItem: React.FC<{ data: EmployeeListItemProps }> = ({
  data,
}) => (
  <Container mb={[4, 5, 6]}>
    <Box
      sx={{
        width: '12rem',
        height: '12rem',
        maxWidth: '343px',
        maxHeight: '346px',
        my: [3, 4, 5],
      }}
    >
      <Img
        fluid={data.photo}
        durationFadeIn={0}
        fadeIn={false}
        draggable={false}
      />
    </Box>
    <Text sx={{ fontWeight: 'bold' }}>{data.name}</Text>
    <Text>{data.position}</Text>
    <Flex mt={4} sx={{ flexDirection: 'column' }}>
      <Link color="black">{data.email}</Link>
      <Link color="black">{data.phoneNumber}</Link>
    </Flex>
  </Container>
);
