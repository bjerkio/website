// import original module declarations
import 'styled-components'
import theme from './theme'

// and extend them!
declare module 'styled-components' {
  export type Theme = typeof theme
  export interface DefaultTheme extends Theme {}
  // export interface DefaultTheme {
  //   // borderRadius: string

  //   colors: {
  //     primary: string
  //     secondary: string
  //     dark: string
  //     iron: string
  //     dry: string
  //   }
  // }
}
