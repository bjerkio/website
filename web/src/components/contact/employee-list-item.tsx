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
  <Container mb={[3, 4, 5]}>
    <Box
      sx={{
        width: '25rem',
        height: '23rem',
        maxWidth: '370px',
        maxHeight: '346px',
        my: [2, 3, 4],
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
    <Flex mt={2} sx={{ flexDirection: 'column' }}>
      <Link color="black">{data.email}</Link>
      <Link color="black">{data.phoneNumber}</Link>
    </Flex>
  </Container>
);
