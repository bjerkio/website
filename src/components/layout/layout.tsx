import { Container, Flex, Grid } from '@theme-ui/components';
import React from 'react';
import Logo from '../logo';
import SEO from '../seo';
import { Footer } from './footer';
import { Header } from './header';

export const Layout: React.FC = ({ children }) => (
  <Container variant="filled">
    <SEO />
    <Container variant="readable">
      <Flex
        sx={{
          flexDirection: 'column',
          minHeight: '100vh',
          gap: 7,
          p: 4,
          pb: 0,
        }}
      >
        <Header />
        <Flex sx={{ flexDirection: 'column', gap: 7 }}>{children}</Flex>

        <Footer />
      </Flex>
    </Container>
  </Container>
);
