import { Box, Container, Flex, Link, Text } from '@chakra-ui/react';

export const Footer: React.FC = () => (
  <Box sx={{ minHeight: '5vh', background: 'dark100', mt: 'auto', p: '30px' }}>
    <Container variant="full">
      <Flex
        sx={{
          color: 'background',
          justifyContent: 'space-between',
          alignItems: 'center',
          fontSize: 'base',
        }}
      >
        <Flex>
          <Text color="green20">
            Kontakt oss på{' '}
            <Link href={'mailto:kontoret@bjerk.io'} variant={{base:"footerLink"}}>
              kontoret@bjerk.io
            </Link>
          </Text>
        </Flex>
        <Flex sx={{ color: 'green20' }}>© Bjerk 2022</Flex>
      </Flex>
    </Container>
  </Box>
);
