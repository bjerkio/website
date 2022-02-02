import { Flex } from '@theme-ui/components';
import { Container } from 'theme-ui';
import Logo from '../logo';

export const Header: React.FC = () => (
  <Container variant="readable">
    <Flex sx={{ pt: 4 }}>
      <Logo sx={{ maxWidth: '100px' }} />
    </Flex>
  </Container>
);
