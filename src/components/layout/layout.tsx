import React from 'react';
import { Box, Container, Flex } from 'theme-ui';
import { SEO } from '../seo';
import { Footer } from './footer/footer';
import { Header } from './header';

export const Layout: React.FC = ({ children }) => (
  <Box sx={{ minHeight: '100vh' }}>
    <Flex
      sx={{
        flexDirection: 'column',
        gap: 7,
        pb: 0,
      }}
    >
      <SEO />
      <Header />
      <Container variant="readable">
        <Flex sx={{ flexDirection: 'column', gap: 7 }}> {children}</Flex>{' '}
      </Container>
      <Footer />
    </Flex>
  </Box>
);
