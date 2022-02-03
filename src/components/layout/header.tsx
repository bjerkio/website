/** @jsxImportSource theme-ui */
import Link from 'next/link';
import { Container, Flex } from 'theme-ui';
import { Logo } from '../logo';

export const Header: React.FC = () => (
  <Container variant="readable">
    <Flex sx={{ pt: 4 }}>
      <Link href={'/'}>
        <Logo sx={{ maxWidth: '100px', cursor: 'pointer' }} />
      </Link>

      <Flex sx={{ gap: 3, mt: 'auto', ml: 'auto', alignItems: 'flex-end' }}>
        <Link href={'/contact'} sx={{ textDecoration: 'none' }}>
          Kontakt
        </Link>
      </Flex>
    </Flex>
  </Container>
);
