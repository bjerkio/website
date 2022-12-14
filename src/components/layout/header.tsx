
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { Box, Container,  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerOverlay, Flex, IconButton, Link, useColorMode, useDisclosure } from '@chakra-ui/react';
import { Booking } from '../booking';
import { Logo } from './header/logo';
import { Cross } from './header/cross';
import { Hamburger } from './header/hamburger';


export const Header: React.FC = () => {
  const { pathname } = useRouter();
  const isHome = pathname === '/';
  const color = isHome ? 'green100' : 'green20';
  const { colorMode, setColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const logoInput = colorMode === "light" ? <Logo /> : <Logo/>; //<LogoDark />;
  const burgerInput = colorMode === "light" ? <Hamburger /> : <Hamburger/> //<HamburgerDark />;

  return (
    <Flex       sx={{
      px: [6, 8],
      pt: [6, 8],
      backgroundColor: color,
    }}>
      <Flex sx={{ flexDirection:"row", display:['none', 'flex', 'flex'], alignItems: 'center', gap: 6 }}>
        {logoInput}
      <Link
            href={'/about'}
            sx={{
            }}
          >
            Om oss
          </Link>
          <Link
            href={'/principles'}
            sx={{
            }}
          >
            Våre prinsipper
          </Link>
          </Flex>
      <Flex
        sx={{
        alignContent:"space-between",
        flexDirection:"row",
        width:"100%",
        display:['flex', 'none','none']
        }}
      >
        <Link href={"/"}>{logoInput}</Link>

        <IconButton
          variant="link"
          aria-label="Hamburger"
          onClick={onOpen}
          ml="auto"
          p="0.5em"
          height="31px"
      
        >
          {burgerInput}
        </IconButton>
      </Flex>
      <Drawer placement={"top"} onClose={onClose} isOpen={isOpen} size="sm">
        <DrawerOverlay/>
        <DrawerContent backgroundColor="dark100" alignItems={"center"}>
          <DrawerCloseButton color="green20" p={6} size="lg" m="0.5em"/>
          <DrawerBody >
            <Flex
              sx={{
                width: "100%",
                height: "20em",
                zIndex: 2,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                fontSize: 5,
                m: 2
              }}
            >
              <Flex
                sx={{
                  flexDirection: "column",
                  gap: 2,
                  width: "100%",
                  alignItems: "center"
                }}
              >
                <Link
                  href="/about"
                  sx={{ color: "green20", textDecoration: "none" }}
                >
                  Om oss
                </Link>
                <Link
                  href="/principles"
                  sx={{ color: "green20", textDecoration: "none" }}
                >
                  Våre prinsipper
                </Link>
                <Flex
            sx={{
              flexDirection:"column",
              mt: 3
            }}
          >
            <Booking label={'Book et møte'}></Booking>
</Flex>
</Flex>
</Flex>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Flex>
  );
};


