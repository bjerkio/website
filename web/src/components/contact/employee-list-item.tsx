import { Box, Container, Flex, Link, Text } from '@theme-ui/components';
import React from 'react';

export interface EmployeeListItemProps {
  photo?: any;
  name: string;
  position: string;
  email: string;
  phoneNumber: string;
}

export const EmployeeListItem: React.FC<{ data: EmployeeListItemProps }> = ({
  data: { photo, name, position, email, phoneNumber },
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
      <img src={`../${photo}`} style={{ width: '100%' }} />
    </Box>
    <Text sx={{ fontWeight: 'bold' }}>{name}</Text>
    <Text>{position}</Text>
    <Flex mt={2} sx={{ flexDirection: 'column' }}>
      <Link color="black">{email}</Link>
      <Link color="black">{phoneNumber}</Link>
    </Flex>
  </Container>
);
