import { ReactNode } from 'react';
import { Flex } from '@chakra-ui/react';
import { SEO } from '../seo';
import { Footer } from './footer/footer';
import { Header } from './header';

type Props = {
  children?: ReactNode;
};

export const Layout = ({ children }: Props) => (
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
