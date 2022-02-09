import { Container, Flex } from 'theme-ui';
import { Logo } from '../logo';

export const Header: React.FC = () => (
  <Container variant="readable">
    <Flex sx={{ pt: 2 }}>
      <Logo sx={{ maxWidth: '100px' }} />
    </Flex>
  </Container>
);
