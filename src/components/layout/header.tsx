import { Link, NavLink } from 'next-theme-ui';
import { useRouter } from 'next/router';
import { Box, Container, Flex } from 'theme-ui';
import { Booking } from '../booking';
import { Logo } from '../logo';

export const Header: React.FC = () => {
  const { pathname } = useRouter();
  return (
    <Container variant="full">
      <Flex
        sx={{ pt: 2, justifyContent: 'start', alignItems: 'center' }}
      >
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
          sx={{
            textDecoration: 'none',
            color: pathname.includes('about') ? '#2A3BCC' : 'text',
            cursor: 'pointer',
            fontWeight: '400',
            marginLeft: '60px',
          }}
        >
          Om oss
        </NavLink>
        <NavLink
          href={'/principles'}
          sx={{
            textDecoration: 'none',
            color: pathname.includes('about') ? '#2A3BCC' : 'text',
            cursor: 'pointer',
            fontWeight: '400',
            marginLeft: '60px',
          }}
        >
          Våre prinsipper
        </NavLink>
        <Box
          sx={{
            marginLeft: '800px',
            background: '#90F494',
            boxShadow: '2px 4px 11px rgba(0, 0, 0, 0.1), inset 3px 4px 9px rgba(255, 255, 255, 0.15)',
            borderRadius: '30px',
          }}
        >
            <Booking label={'Book et møte →'} />
        </Box>
      </Flex>
    </Container>
  );
};
