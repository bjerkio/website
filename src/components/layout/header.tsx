import { Link, NavLink } from 'next-theme-ui';
import { useRouter } from 'next/router';
import { Box, Container, Flex } from 'theme-ui';
import { Booking } from '../booking';
import { Logo } from '../logo';

export const Header: React.FC = () => {
  const { pathname } = useRouter();
  const isHome = pathname === '/';
  const color = isHome ? 'green100' : 'green20';
  return (
    <Box
      sx={{
        pt: 7,
        pb: 3,
        backgroundColor: color,
      }}
    >
      <Container variant="header">
        <Flex sx={{ alignItems: 'center', gap: 5 }}>
          <Link href={'/'}>
            <Logo
              sx={{
                maxWidth: '100px',
                cursor: 'pointer',
                height: '40.87px',
                color: 'text',
              }}
            />
          </Link>
          <NavLink
            href={'/about'}
          >
            Om oss
          </NavLink>
          <NavLink
            href={'/principles'}
          >
            Våre prinsipper
          </NavLink>
          <Box
            sx={{
              marginLeft: 'auto',
            }}
          >
            <Booking label={'Book et møte'}></Booking>
          </Box>
        </Flex>
      </Container>
    </Box>
  );
};
