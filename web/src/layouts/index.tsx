import * as React from 'react'
import { ThemeProvider } from 'styled-components'
import theme from '../theme/theme'
import Header from './components/Header'
import GlobalStyles from '../theme/globalStyles'
import { Box, Text } from 'rebass/styled-components'
import Footer from './components/Footer'
import Logo from './components/Logo'
import Link from '../components/Link'
import DronningensLogo from './components/DronningensLogo'
import Container from '../components/Container'
const Layout: React.FC = ({ children }: any) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      {/* <Helmet
        title="Gatsby Default Starter"
        meta={[
          { name: 'description', content: 'Sample' },
          { name: 'keywords', content: 'sample, something' },
        ]}
      /> */}
      {/* <Container> */}
      <Header />
      <Box pt="110px">{children}</Box>
      {/* </Container> */}
      <Footer />
    </ThemeProvider>
  )
}

export default Layout
