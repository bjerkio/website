import { useRouter } from "next/router";
import React, { useState } from "react";
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
} from "@chakra-ui/react";
// import { Booking } from '../../booking';
import { Logo } from "./logo";
import { Hamburger } from "./hamburger";
import NextLink from "next/link";
import { Booking } from "./booking";

export const Header: React.FC = () => {
  const { pathname } = useRouter();
  const isHome = pathname === "/";
  const color = isHome ? "green100" : "green20";
  const { colorMode, setColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const logoInput = colorMode === "light" ? <Logo /> : <Logo />; //<LogoDark />;
  const burgerInput = colorMode === "light" ? <Hamburger /> : <Hamburger />; //<HamburgerDark />;

  return (
    <Flex
      sx={{
        px: { base: 6, sm: 6, md: 8, lg: 8, xl: 8 },
        pt: { base: 6, sm: 6, md: 8, lg: 8, xl: 8 },
        backgroundColor: color,
      }}
    >
      <Flex
        sx={{
          flexDirection: "row",
          display: { base: "none", md: "flex" },
          justifyContent: "space-between",
          width: "100%",
        }}
      >
        <Flex sx={{ flexDirection: "row", gap: 6, alignItems: "center" }}>
          <Link as={NextLink} href={"/"}>
            {logoInput}
          </Link>
          <Link
            as={NextLink}
            href={"/about"}
            fontSize={{ md: "base" }}
            variant={{ md: "nav" }}
          >
            Om oss
          </Link>
          <Link
            as={NextLink}
            href={"/principles"}
            fontSize={{ md: "base" }}
            variant={{ md: "nav" }}
          >
            Våre prinsipper
          </Link>
        </Flex>
        <Flex
          sx={{
            flexDirection: "column",
          }}
        >
          <Booking label={"Book et møte"} variant={{ md: "primary" }} />
        </Flex>
      </Flex>
      <Flex
        sx={{
          alignContent: "space-between",
          flexDirection: "row",
          width: "100%",
          display: { base: "flex", md: "none" },
        }}
      >
        <Link as={NextLink} href={"/"}>
          {logoInput}
        </Link>

        <IconButton
          variant="link"
          aria-label="Hamburger"
          onClick={onOpen}
          ml="auto"
          p="0.5em"
          height="35px"
        >
          {burgerInput}
        </IconButton>
      </Flex>
      <Drawer placement={"top"} onClose={onClose} isOpen={isOpen} size="sm">
        <DrawerOverlay />
        <DrawerContent backgroundColor="dark100" alignItems={"center"}>
          <DrawerCloseButton color="green20" p={6} size="lg" m="0.5em" />
          <DrawerBody>
            <Flex
              sx={{
                width: "100%",
                height: "20em",
                zIndex: 2,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                fontSize: "lg",
              }}
            >
              <Flex
                sx={{
                  flexDirection: "column",
                  gap: 3,
                  width: "100%",
                  alignItems: "center",
                }}
              >
                <Link
                  as={NextLink}
                  href="/about"
                  sx={{ color: "green20", textDecoration: "none" }}
                >
                  Om oss
                </Link>
                <Link
                  as={NextLink}
                  href="/principles"
                  sx={{ color: "green20", textDecoration: "none" }}
                >
                  Våre prinsipper
                </Link>
                <Flex
                  sx={{
                    flexDirection: "column",
                    mt: 3,
                    fontSize: "md",
                  }}
                >
                  <Booking label={"Book et møte"} variant="secondary" />
                </Flex>
              </Flex>
            </Flex>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Flex>
  );
};
