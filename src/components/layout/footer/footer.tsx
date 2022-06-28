import { Box, Container, Flex, Link } from 'theme-ui';

export const Footer: React.FC = () => (
  <Box sx={{ minHeight: '5vh', background: 'dark100', mt: 'auto', p: '30px' }}>
    <Container variant="full">
      <Flex
        sx={{
          color: 'background',
          justifyContent: 'space-between',
          alignItems: 'center',
          fontSize: 4,
        }}
      >
        <Flex>
          Kontakt oss på
          <Link
            href={'mailto:kontoret@bjerk.io'}
            sx={{ color: 'blue100', marginLeft: '5px' }}
          >
            kontoret@bjerk.io
          </Link>
        </Flex>
        <Flex>© Bjerk 2022</Flex>
      </Flex>
    </Container>
  </Box>
);
