import {
  extendTheme,
  StyleFunctionProps,
  type ThemeConfig,
} from '@chakra-ui/react';
import { Container } from './container';

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
  buttons: {
    primary: {
      fontFamily: 'body',
      variant: 'heading',
      color: 'dark100',
      p: 3,
      backgroundColor: 'transparent',
      boxShadow:
        '2px 4px 11px rgba(0, 0, 0, 0.1), inset 3px 4px 9px rgba(255, 255, 255, 0.15)',
      borderRadius: '30px',
      width: 'fit-content',
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
  links: {
    primary: {
      fontSize: [0, 4],
      color: 'blue100',
      textDecoration: 'none',
      ':hover': {
        textDecoration: 'underline',
      },
      wordWrap: 'break-word',
    },
    buttonLink: {
      variant: 'subtitle',
      borderRadius: 1,
      color: 'dark100',
      width: 'fit-content',
      textDecoration: 'none',
    },
    nav: {
      fontWeight: 'normal',
      textDecoration: 'none',
      color: 'dark100',
      ':hover': {
        color: 'blue100',
        textDecoration: 'underline',
      },
    },
    emphasis: {
      variant: 'links.primary',
      fontSize: [0, 3],
    },
    socials: {
      textDecoration: 'none',
    },
    mobileNav: {
      color: 'white',
      textDecoration: 'none',
      fontSize: 5,
    },
    footerLink: {
      color: 'blue40',
      fontSize: [0, 2],
      textDecoration: 'none',
      ':hover': {
        textDecoration: 'underline',
      },
    },
  },
  //[16, 18, 20, 24, 28, 32, 48],
  fontSizes: {
    sm: 'clamp(0.8rem, 0.17vw + 0.76rem, 0.89rem)',
    base: 'clamp(1rem, 0.34vw + 0.91rem, 1.19rem)',
    md: 'clamp(1.25rem, 0.61vw + 1.1rem, 1.58rem)',
    lg: 'clamp(1.56rem, 1vw + 1.31rem, 2.11rem)',
    xl: 'clamp(1.95rem, 1.56vw + 1.56rem, 2.81rem)',
    xxl: 'clamp(2.44rem, 2.38vw + 1.85rem, 3.75rem)',
    xxxl: 'clamp(3.05rem, 3.54vw + 2.17rem, 5rem)',
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
      fontWeight: 400,
      fontSize: [5, 6],
    },
    heading: {
      color: 'dark100',
      fontWeight: 400,
      fontSize: 1,
    },
    subtitle: {
      color: 'blue100',
      fontWeight: 600,
      fontSize: [0, 2],
    },
    subtitleblack: {
      color: 'dark100',
      fontSize: 2,
      fontWeight: 600,
    },
    standard: {
      color: 'dark100',
      fontSize: [2, 4],
      fontWeight: 400,
    },
    excerpt: {
      color: 'dark100',
      fontWeight: 400,
      fontSize: [2, 5],
    },
    readmore: {
      color: 'dark100',
      fontWeight: 400,
      fontSize: [0, 3],
    },
    contact: {
      color: 'dark100',
      fontSize: 0,
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
  },
});

export default theme;
