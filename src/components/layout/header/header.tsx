import { useRouter } from 'next/router';
import React, { useState } from 'react';
import {
  Box,
  Container,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerOverlay,
  Flex,
  IconButton,
  Link,
  useColorMode,
  useDisclosure,
} from '@chakra-ui/react';
// import { Booking } from '../../booking';
import { Logo } from './logo';
import { Hamburger } from './hamburger';
import NextLink from 'next/link';
import { Booking } from './booking';

export const Header: React.FC = () => {
  const { pathname } = useRouter();
  const isHome = pathname === '/';
  const color = isHome ? 'green100' : 'green20';
  const { colorMode, setColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const logoInput = colorMode === 'light' ? <Logo /> : <Logo />; //<LogoDark />;
  const burgerInput = colorMode === 'light' ? <Hamburger /> : <Hamburger />; //<HamburgerDark />;

  return (

    <Flex
      sx={{
        p: { base: 5, md: 7 },
        backgroundColor: color,
      }}
    >
          <Container variant="full" backgroundColor={color}>
      <Flex
        sx={{
          flexDirection: 'row',
          display: { base: 'none', md: 'flex' },
          justifyContent: 'space-between',
          width: '100%',
        }}
      >
        <Flex sx={{ flexDirection: 'row', gap: 6, alignItems: 'center' }}>
          <Link 
          as={NextLink}
          href={'/'}>{logoInput}
          </Link>
          <Link
            as={NextLink}
            href={'/about'}
            fontSize='base'
            variant='nav'
          >
            Om oss
          </Link>
          <Link
            as={NextLink}
            href={'/principles'}
            fontSize='base'
            variant='nav'
          >
            Våre prinsipper
          </Link>
        </Flex>
        <Flex
          sx={{
            flexDirection: 'column',
          }}
        >
          <Booking label={'Book et møte'} variant='with_box'/>
        </Flex>
      </Flex>
      <Flex
        sx={{
          justifyContent: 'space-between',
          flexDirection: 'row',
          width: '100%',
          display: { base: 'flex', md: 'none' },
        }}
      >
        <Link
         as={NextLink}
         href={'/'}>{logoInput}
         </Link>

        <IconButton
          variant="primary"
          aria-label="Hamburger"
          onClick={onOpen}
          py={4}
          pl={4}
        >
          {burgerInput}
        </IconButton>
      </Flex>
      <Drawer placement={'top'} onClose={onClose} isOpen={isOpen} size="sm">
        <DrawerOverlay />
        <DrawerContent backgroundColor="dark100" alignItems={'center'}>
          <DrawerCloseButton color="green20" p={6} size="lg"/>
          <DrawerBody>
            <Flex
              sx={{
                width: '100%',
                height: '20em',
                zIndex: 2,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                fontSize: 'lg',
              }}
            >
              <Flex
                sx={{
                  flexDirection: 'column',
                  gap: 3,
                  width: '100%',
                  alignItems: 'center',
                }}
              >
                <Link
                  as={NextLink}
                  href="/about"
                  sx={{ color: 'green20', textDecoration: 'none' }}
                >
                  Om oss
                </Link>
                <Link
                  as={NextLink}
                  href="/principles"
                  sx={{ color: 'green20', textDecoration: 'none' }}
                >
                  Våre prinsipper
                </Link>
                <Flex
                  sx={{
                    flexDirection: 'column',
                    mt: 3,
                  }}
                >
                  <Booking label={'Book et møte'} variant="secondary"/>
                </Flex>
              </Flex>
            </Flex>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
      </Container>
    </Flex>
  );
};
