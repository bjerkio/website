import React from 'react'
import { Box, Container } from 'theme-ui'

const Hero: React.FC = ({ children }) => (
  <Container
    sx={{
      bg: 'primary',
      minHeight: '3rem',
      fontSize: 5,
      justifyContent: 'center',
      alignContent: 'center',
      alignItems: 'center',
      height: '370px',
      fontWeight: 'bold',
      display: 'flex',
      textAlign: 'center',
      verticalAlign: 'center',
    }}
  >
    <Box sx={{ m: 5 }}>{children}</Box>
  </Container>
)

export default Hero
