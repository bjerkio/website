import { Link } from 'next-theme-ui';
import { useRouter } from 'next/router';
import { Container, Flex } from 'theme-ui';
import { Logo } from '../logo';

export const Header: React.FC = () => {
  const { pathname } = useRouter();
  return (
    <Container variant="readable">
      <Flex sx={{ pt: 2 }}>
        <Link href={'/'}>
          <Logo
            sx={{
              maxWidth: '100px',
              cursor: 'pointer',
              height: '40px',
              color: 'text',
            }}
          />
        </Link>
        <Flex sx={{ gap: 3, mt: 'auto', ml: 'auto', alignItems: 'flex-end' }}>
          {/** Navigation links go here */}
          <Link
            href={'/about'}
            sx={{
              textDecoration: 'none',
              color: pathname.includes('about') ? 'green80' : 'text',
              cursor: 'pointer',
              fontWeight: 'bold',
            }}
          >
            Om oss
          </Link>
        </Flex>
      </Flex>
    </Container>
  );
};
