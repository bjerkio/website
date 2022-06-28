import { Link, NavLink } from 'next-theme-ui';
import { useRouter } from 'next/router';
import { Box, Container, Flex, Image } from 'theme-ui';
import { Booking } from '../booking';
import { Logo } from '../logo';

export const Header: React.FC = () => {
  const { pathname } = useRouter();
  const isHome = pathname === '/';
  const color = isHome ? 'green100' : 'green20';
  return (
    <Box
      sx={{
        p:7,
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
            sx={{
              display: ['none', 'block']
            }}
          >
            Om oss
          </NavLink>
          <NavLink
            href={'/principles'}
            sx={{
              display: ['none', 'block']
            }}
          >
            Våre prinsipper
          </NavLink>
          <Box sx={{
            marginLeft: 'auto',
            display: ['block', 'none']
          }}>
            <Image src='/element6.svg'></Image>
          </Box>
          <Box
            sx={{
              marginLeft: 'auto',
              pr: '20px',
              display: ['none', 'block']
            }}
          >
            <Booking label={'Book et møte'}></Booking>
          </Box>
        </Flex>
      </Container>
    </Box>
  );
};
