import { Flex } from 'theme-ui';
import { SEO } from '../seo';
import { Footer } from './footer/footer';
import { Header } from './header';

export const Layout: React.FC<React.PropsWithChildren> = ({ children }) => (
  <Flex
    sx={{
      flexDirection: 'column',
      gap: 0,
      pb: 0,
    }}
  >
    <SEO />
    <Header />
    <Flex
      sx={{
        alignItems: 'stretch',
      }}
    >
      {children}
    </Flex>

    <Footer />
  </Flex>
);
