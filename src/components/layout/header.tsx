import { Link, NavLink } from 'next-theme-ui';
import { useRouter } from 'next/router';
import { Container, Flex } from 'theme-ui';
import { Logo } from '../logo';

export const Header: React.FC = () => {
  const { pathname } = useRouter();
  return (
    <Container variant="readable">
      <Flex
        sx={{ pt: 2, justifyContent: 'space-between', alignItems: 'center' }}
      >
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
        <NavLink
          href={'/blog'}
          sx={{
            textDecoration: 'none',
            color: pathname.includes('blog') ? 'green80' : 'text',
            cursor: 'pointer',
            fontWeight: 'bold',
          }}
        >
          Blogg
        </NavLink>
        <NavLink
          href={'/about'}
          sx={{
            textDecoration: 'none',
            color: pathname.includes('about') ? 'green80' : 'text',
            cursor: 'pointer',
            fontWeight: 'bold',
          }}
        >
          Om oss
        </NavLink>
      </Flex>
    </Container>
  );
};
