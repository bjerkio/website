/** @jsxImportSource theme-ui */
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Container, Flex, Text } from 'theme-ui';
import { Logo } from '../logo';

export const Header: React.FC = () => {
  const { pathname } = useRouter();

  return (
    <Container variant="readable">
      <Flex sx={{ pt: 4 }}>
        <Link href={'/'}>
          <Logo sx={{ maxWidth: '100px', cursor: 'pointer' }} />
        </Link>

        <Flex sx={{ gap: 3, mt: 'auto', ml: 'auto', alignItems: 'flex-end' }}>
          <Link
            href={'/contact'}
            sx={{
              textDecoration: 'none',
            }}
          >
            <Text
              sx={{
                color: pathname.includes('contact') ? 'green80' : 'text',
                cursor: 'pointer',
              }}
            >
              Kontakt
            </Text>
          </Link>
        </Flex>
      </Flex>
    </Container>
  );
};
