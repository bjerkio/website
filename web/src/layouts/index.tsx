import * as React from 'react'
import { Box } from 'theme-ui'
import Header from './components/Header'
import GlobalStyles from '../theme/globalStyles'
import Footer from './components/Footer'

const Layout: React.FC = ({ children }: any) => {
  return (
    <>
      <GlobalStyles />
      <Header />
      <Box sx={{ pt: '110px' }}>{children}</Box>
      <Footer />
    </>
  )
}

export default Layout
