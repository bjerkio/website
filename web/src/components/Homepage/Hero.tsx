import React from 'react'
import styled from 'styled-components'
import { color, layout, typography, flexbox } from 'styled-system'
import { Box } from 'rebass/styled-components'

const Container = styled.div.attrs({
  bg: 'primary',
  minHeight: '3rem',
  fontSize: 6,
  justifyContent: 'center',
  alignContent: 'center',
  alignItems: 'center',
  height: '370px',
  fontWeight: 'bold',
  color: 'dark',
})`
  display: flex;
  text-align: center;
  vertical-align: center;
  ${color}
  ${layout}
  ${typography}
  ${flexbox}
  span {
    text-decoration: none !important;
    border-bottom: 4px dashed ${props => props.theme.colors.dry};
    background-color: ${props => props.theme.colors.lighter};
  }
`

const Hero: React.FC = ({ children }) => (
  <Container>
    <Box m={5}>{children}</Box>
  </Container>
)

export default Hero
