import { Box, Container, Flex, Link, Text } from '@chakra-ui/react';
import NextLink from 'next/link'
import React from 'react';

export const Footer: React.FC = () => (
  <Box 
    minHeight= {7}
    background= 'dark100'
    mt= 'auto'
    p= {{base: 5, md: 7}}
    >
    <Container variant="full">
      <Flex
        sx={{
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: 4
        }}
      >
        <Flex>
          <Text textStyle="footerText">
            Kontakt oss på{' '}
            <Link
              as={NextLink}
              href={'mailto:kontoret@bjerk.io'}
              variant='footerLink'
            >
              kontoret@bjerk.io
            </Link>
          </Text>
        </Flex>
        <Flex>
          <Text textStyle="footerText">
            © Bjerk 2022
          </Text>
        </Flex>
      </Flex>
    </Container>
  </Box>
);
