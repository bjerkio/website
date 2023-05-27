import { Flex } from '@chakra-ui/react';
import React, { PropsWithChildren } from 'react';
import { SEO } from '../seo';
import { Footer } from './footer/footer';
import { Header } from './header/header';

export const Layout: React.FC<PropsWithChildren> = ({ children }) => (
  <Flex
    sx={{
      flexDirection: 'column',
      gap: 0,
      pb: 0,
    }}
  >
    <SEO />
    <Header />
    <Flex alignItems="stretch">{children}</Flex>
    <Footer />
  </Flex>
);
