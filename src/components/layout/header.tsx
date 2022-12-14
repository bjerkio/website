
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { Box, Container, Flex, IconButton, Link } from '@chakra-ui/react';
import { Booking } from '../booking';
import { Logo } from './header/logo';
import { Cross } from './header/cross';
import { Hamburger } from './header/hamburger';


export const Header: React.FC = () => {
  const { pathname } = useRouter();
  const isHome = pathname === '/';
  const color = isHome ? 'greentodark' : 'green20';
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  return (
    <Box
      sx={{
        px: [6, 8],
        pt: [6, 8],
        backgroundColor: color,
      }}
    >
      {menuIsOpen && (
        <Flex
          sx={{
            position: 'fixed',
            left: 0,
            top: 0,
            backgroundColor: 'dark100',
            width: '100%',
            height: '100vh',
            zIndex: 2,
            display: ['flex', 'none'],
            p: 6,
            gap: 6,
            flexDirection: 'column',
            alignItems: 'center',
            overflow: 'scroll',
          }}
        >
          <Flex
            sx={{ alignItems: 'center', height: 'fit-content', width: '100%' }}
          >
            <Box
              sx={{ width: '100px', height: '40.87px', visibility: 'hidden' }}
            />
            <IconButton
              aria-label='cross'
              sx={{
                width: '30px',
                height: '30px',
                backgroundColor: 'dark100',
                ml: 'auto',
              }}
              onClick={() => setMenuIsOpen(false)}
            >
              <Cross />
            </IconButton>
          </Flex>

          <Flex
            sx={{
              flexDirection: 'column',
              justifyContent: 'flex-start',
              alignItems: 'center',
              gap: 6,
              height: '70%',
              mt: 8,
            }}
          >
            <Flex
              sx={{ flexDirection: 'column', alignItems: 'center', gap: 3 }}
            >
              <Link variant="mobileNav" href="/about">
                Om oss
              </Link>
              <Link variant="mobileNav" href="/principles">
                Våre prinsipper
              </Link>
            </Flex>
            <Booking variant="secondary" label={'Book et møte'} />
          </Flex>
        </Flex>
      )}

      <Container variant="header">
        <Flex sx={{ alignItems: 'center', gap: 6 }}>
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
          <Link
            href={'/about'}
            sx={{
              display: ['none', 'block'],
            }}
          >
            Om oss
          </Link>
          <Link
            href={'/principles'}
            sx={{
              display: ['none', 'block'],
            }}
          >
            Våre prinsipper
          </Link>
          <IconButton
            aria-label='hamburger'
            sx={{
              
              display: ['block', 'none'],
              ml: 'auto',
              width: '30px',
              height: '30px',
            }}
            onClick={() => setMenuIsOpen(!menuIsOpen)}
          >
            <Hamburger />
          </IconButton>

          <Box
            sx={{
              ml: 'auto',
              pr: '20px',
              display: ['none', 'block'],
            }}
          >
            <Booking label={'Book et møte'}></Booking>
          </Box>

        </Flex>
      </Container>
    </Box>
  );
};
