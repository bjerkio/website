import { Flex } from '@theme-ui/components';
import Logo from '../logo';

export const Header: React.FC = () => (
  <Flex>
    <Logo sx={{ maxWidth: '100px' }} />
  </Flex>
);
