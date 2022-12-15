import {
  extendTheme,
  StyleFunctionProps,
  type ThemeConfig,
} from '@chakra-ui/react';
import { Container } from './components/theme-extensions/container';
import { Link } from './components/theme-extensions/links';

const config: ThemeConfig = {
  initialColorMode: 'system',
  useSystemColorMode: true,
};

const theme = extendTheme({
  config,
  //[0, 1, 8, 16, 24, 32, 48, 64, 96, 115],
  space: {
    0: '0rem',
    1: '0.0625rem',
    2: '0.5rem',
    3: '1rem',
    4: '1.5rem',
    5: '2rem',
    6: '3rem',
    7: '4rem',
    8: '6rem',
    9: '7rem',
  },
  colors: {
    muted: '#95E0C8',
    green120: '#2E896C',
    foreground: '#ffffff',
    green100: '#90F494',
    blue100: '#2A3BCC',
    dark100: '#0F2040',
    green20: '#EDF9F1',
    blue40: '#8FA1FF',
  },
  fonts: {
    body: 'Sora',
    heading: 'Sora',
    mono: 'Sora',
  },
  /**
   * We should add a few notable sizes here,
   * such as readable width (which is a width that
   * is easily to read). Maybe even some max
   * widths.
   *
   * issue: https://github.com/bjerkio/brand/issues/6
   */
  sizes: {
    readable: 1200,
    full: 1500,
  },
  /**
   * `radii` should key should be available
   * from Figma.
   *
   * Read more: https://github.com/bjerkio/brand/issues/9
   */
  //[0, 4, 8, 100],
  radii: {
    0: '0em',
    1: '0.25em',
    2: '0.5em',
    3: '6em',
  },

  /**
   * These layouts are still being tested/played with
   * in the current design.
   *
   * Read more: https://github.com/bjerkio/brand/issues/8
   */

  /**
   * Default button stylings doesn't fit the current
   * design setup.
   *
   * Read more: https://github.com/bjerkio/brand/issues/10
   */

  //[13, 16, 20, 24, 32, 40, 48],
  fontSizes: {
    sm: 'clamp(0.8rem, 0.25vw + 0.74rem, 0.94rem)',
    base: 'clamp(1rem, 0.45vw + 0.89rem, 1.25rem)',
    md: 'clamp(1.25rem, 0.76vw + 1.06rem, 1.67rem)',
    lg: 'clamp(1.56rem, 1.2vw + 1.26rem, 2.22rem)',
    xl: 'clamp(1.95rem, 1.83vw + 1.5rem, 2.96rem)',
    xxl: 'clamp(2.44rem, 2.74vw + 1.76rem, 3.95rem)',
    xxxl: 'clamp(3.05rem, 4.02vw + 2.05rem, 5.26rem)',
  },

  /**
   * Read more: https://github.com/bjerkio/brand/issues/7
   */
  textStyles: {
    caption: {
      color: 'dark100',
      fontWeight: 'semibold',
      fontSize: 'xl',
    },
    titlenobold: {
      color: 'dark100',
      fontWeight: 'normal',
      fontSize: 'xl',
      lineHeight: "3.5rem"
    },
    heading: {
      color: 'dark100',
      fontWeight: 400,
      fontSize: 1,
    },
    subtitle: {
      color: 'blue100',
      fontWeight: 'semibold',
      fontSize: 'base',
    },
    subtitleblack: {
      color: 'dark100',
      fontSize: 'base',
      fontWeight: 'semibold',
    },
    standard: {
      color: 'dark100',
      fontSize: 'md',
      fontWeight: 'normal',
    },
    excerpt: {
      color: 'dark100',
      fontWeight: 'normal',
      fontSize: [2, 5],
    },
    readmore: {
      color: 'dark100',
      fontWeight: 'normal',
      fontSize: [0, 3],
    },
    contact: {
      color: 'dark100',
      fontSize: 'sm',
    },
  },

  styles: {
    root: {
      backgroundColor: 'green20',
      fontFamily: 'body',

      /**
       * 👇 Should be added to webTheme
       */
      WebkitFontSmoothing: 'antialiased',
      MozOsxFontSmoothing: 'grayscale',
    },
    a: {},
  },
  //['68.75em', '104em'],
  breakpoints: {
    sm: '30em',
    md: '66em',
    lg: '80em',
    xl: '104em',
    '2xl': '128em',
  },
  semanticTokens: {
    colors: {
      greentodark: {
        default: 'green100',
        _dark: 'dark100',
      },
    },
  },
  components: {
    Container,
    Link,
    Button: {
      variants: {
        primary: {
          fontFamily: 'body',
          fontSize: { md: 'base' },
          color: 'dark100',
          p: 5,
          backgroundColor: 'transparent',
          boxShadow:
            '2px 4px 11px rgba(0, 0, 0, 0.1), inset 3px 4px 9px rgba(255, 255, 255, 0.15)',
          borderRadius: '30px',
        },
        secondary: {
          fontFamily: 'body',
          variant: 'heading',
          color: 'dark100',
          p: 3,
          backgroundColor: 'green20',
          borderRadius: '30px',
          width: 'fit-content',
        },
      },
    },
  },
});

export default theme;
