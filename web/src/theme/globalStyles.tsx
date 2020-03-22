import { createGlobalStyle } from 'styled-components'
import './fonts/fonts.css'

export default createGlobalStyle`
  * {
    outline: none;
  }
  html, body {
    background-color: ${({ theme: { colors } }) => colors.dry};
    font-family: ${props => props.theme.fonts.body};
    font-size: 18px;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    margin: 0px;
    padding: 0px;
  }
  ::selection {
    background-color: ${props => props.theme.colors.primary};
  }
  a {
    color: inherit;
    text-decoration: none;
  }
`
