import { Box, Container, Flex, Grid, Link, Text } from 'theme-ui';

export const Footer: React.FC = () => (
  <Box sx={{ minHeight: '5vh', background: '#0F2040', mt: 'auto' }}>
    <Container variant="full">
      <Flex
        sx={{ 
          color: 'background',
          justifyContent: 'space-between',
          alignItems: 'center',
          fontStyle: 'normal',
          fontWeight: 400,
          lineHeight: '23px',
          letterSpacing: -0.02,
          backgroundSize: 'cover',
        }}
      >
        <Flex>
          Kontakt oss på 
          <Link
            href={'mailto:kontoret@bjerk.io'}
            sx={{ color: '#2A3BCC', marginLeft: '5px' }}
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
