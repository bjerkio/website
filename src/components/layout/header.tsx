import { Link, NavLink } from 'next-theme-ui';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import {
  Box,
  Container,
  Flex,
  IconButton,
} from 'theme-ui';
import { Booking } from '../booking';
import { Logo } from '../logo';
import { Cross } from './header/cross';
import { Hamburger }  from './header/hamburger';


export const Header: React.FC = () => {
  const { pathname } = useRouter();
  const isHome = pathname === '/';
  const color = isHome ? 'green100' : 'green20';
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  return (
    <Box
      sx={{
        px: [5, 7],
        pt: [5, 7],
        pb: [0, 7],
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
            px: 5,
            pt: 5,
            pb: 0,
            gap: 5,
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
              sx={{
                width: '32px',
                height: '22px',
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
              justifyContent: 'center',
              alignItems: 'center',
              gap: 5,
              height: '70%',
            }}
          >
            <Flex sx={{flexDirection: 'column', alignItems: 'center', gap: 4}}>
              <Link sx={{ color: 'white', fontSize: 5 }} href="/about">
                Om oss
              </Link>
              <Link sx={{ color: 'white', fontSize: 5 }} href="/principles">
                Våre prinsipper
              </Link>
            </Flex>
            <Booking variant="secondary" label={'Book et møte'} />
          </Flex>
        </Flex>
      )}

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
              display: ['none', 'block'],
            }}
          >
            Om oss
          </NavLink>
          <NavLink
            href={'/principles'}
            sx={{
              display: ['none', 'block'],
            }}
          >
            Våre prinsipper
          </NavLink>
          <IconButton
            sx={{
              display: ['block', 'none'],
              ml: 'auto',
            }}
            onClick={() => setMenuIsOpen(!menuIsOpen)}
          >
            <Hamburger />
          </IconButton>

          <Box
            sx={{
              marginLeft: 'auto',
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
