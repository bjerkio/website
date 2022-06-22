import { Box, Container, Flex, Grid, Link, Text } from 'theme-ui';

export const Footer: React.FC = () => (
  <Box sx={{ minHeight: '5vh', background: '#0F2040', mt: 'auto' }}>
    <Container variant="full">
      <Flex
        sx={{ color: 'background', justifyContent: 'space-between', alignItems: 'center' }}
      >
        <Flex>
          Kontakt oss på 
          <Link
            href={'mailto:kontoret@bjerk.io'}
            sx={{ textDecoration: 'none', color: '#2A3BCC', marginLeft: '5px' }}
          >
            kontoret@bjerk.io
          </Link>
        </Flex>
        <Flex>
          © Bjerk 2022
        </Flex>

      </Flex>
    </Container>
  </Box>
);
