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
            marginLeft: '800px'
          }}
        >
            <Booking label={'Book et møte →'} />
        </Box>
      </Flex>
    </Container>
  );
};
