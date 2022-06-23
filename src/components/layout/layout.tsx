import React from 'react';
import { Container, Flex } from 'theme-ui';
import { SEO } from '../seo';
import { Footer } from './footer/footer';
import { Header } from './header';

export const Layout: React.FC = ({ children }) => (
  <Flex
    sx={{
      flexDirection: 'column',
      gap: 2,
      pb: 0,
    }}
  >
    <SEO />
    <Header />
    <Container variant="full">{children}</Container>
    <Footer />
  </Flex>
);
