import { Box, Container, Flex, Image, Link, Text } from '@theme-ui/components';
import React from 'react';

export interface EmployeeListItemProps {
  photo?: string;
  name: string;
  position: string;
  email: string;
  phoneNumber: string;
}

export const EmployeeListItem: React.FC<{ data: EmployeeListItemProps }> = ({
  data: { photo, name, position, email, phoneNumber },
}) => (
  <Container mb={5}>
    <Box
      sx={{
        mr: [4, 4, 3],
      }}
    >
      <Image
        src={`../employees/${photo}`}
        sx={{ width: '100%', mb: [3, 3, 1] }}
      />
      <Text sx={{ fontWeight: 'bold', fontSize: [20, 20, 24] }}>{name}</Text>
      <Text sx={{ fontSize: [20, 20, 24] }}>{position}</Text>
      <Flex mt={2} sx={{ flexDirection: 'column', fontSize: [20, 20, 24] }}>
        <Link color="black">{email}</Link>
        <Link color="black">{phoneNumber}</Link>
      </Flex>
    </Box>
  </Container>
);
