import { Box, Container, Flex, Link, Text } from 'theme-ui';

export const Footer: React.FC = () => (
  <Box sx={{ minHeight: '5vh', background: 'dark100', mt: 'auto', p: '30px' }}>
    <Container variant="full">
      <Flex
        sx={{
          color: 'background',
          justifyContent: 'space-between',
          alignItems: 'center',
          fontSize: [0, 4],
        }}
      >
        <Flex>
          <Text>
            Kontakt oss på{' '}
            <Link href={'mailto:kontoret@bjerk.io'} variant="primary">
              kontoret@bjerk.io
            </Link>
          </Text>
        </Flex>
        <Flex>© Bjerk 2022</Flex>
      </Flex>
    </Container>
  </Box>
);
