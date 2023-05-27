import { extendTheme, type ThemeConfig } from '@chakra-ui/react';
import { Container } from './components/theme-extensions/container';
import { Link } from './components/theme-extensions/links';

const config: ThemeConfig = {
  initialColorMode: 'system',
  useSystemColorMode: true,
};

const theme = extendTheme({
  breakpoints: {
    sm: '35rem',
    md: '66rem',
    lg: '80rem',
    xl: '104rem',
    '2xl': '128rem',
  },
  colors: {
    blue40: '#8FA1FF',
    blue100: '#2A3BCC',
    dark100: '#0F2040',
    foreground: '#ffffff',
    green20: '#EDF9F1',
    green100: '#90F494',
    green120: '#2E896C',
    muted: '#95E0C8',
  },
  components: {
    Button: {
      baseStyle: {
        fontWeight: 'normal',
        color: 'dark100',
        borderRadius: 'lg',
        backgroundColor: 'transparent',
        fontFamily: 'body',
      },
      variants: {
        primary: {},
        secondary: {
          backgroundColor: 'green20',
          p: 4,
        },
        with_box: {
          fontSize: 'base',
          p: 4,
          boxShadow: '0.2rem 0.2rem 0.7rem rgba(0, 0, 0, 0.1)',
        },
      },
    },
    Container,
    Link,
  },
  config,
  fonts: {
    body: 'Sora',
    heading: 'Sora',
    mono: 'Sora',
  },
  fontSizes: {
    sm: 'clamp(0.8rem, 0.17vw + 0.76rem, 0.89rem)', // 13px
    base: 'clamp(1rem, 0.34vw + 0.91rem, 1.19rem)', // 16px
    md: 'clamp(1.25rem, 0.61vw + 1.1rem, 1.58rem)', // 20px
    lg: 'clamp(1.56rem, 1vw + 1.31rem, 2.11rem)', // 25px
    xl: 'clamp(1.95rem, 1.56vw + 1.56rem, 2.81rem)', // 31px
    xxl: 'clamp(2.44rem, 2.38vw + 1.85rem, 3.75rem)', // 39px
    xxxl: 'clamp(3.05rem, 3.54vw + 2.17rem, 5rem)', // 49px
  },
  radii: {
    sm: '0.4rem',
    md: '1rem',
    lg: '2rem',
    xl: '4rem',
  },
  // semanticTokens is where we can change darkmode colors.
  semanticTokens: {
    colors: {
      greentodark: {
        default: 'green100',
        _dark: 'dark100',
      },
    },
  },
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
    10: '11rem',
  },
  textStyles: {
    caption: {
      color: 'dark100',
      fontSize: 'lg',
      fontWeight: 'semibold',
    },
    contact: {
      color: 'dark100',
      fontSize: 'sm',
    },
    footerText: {
      color: 'green20',
      fontSize: 'base',
    },
    standard: {
      color: 'dark100',
      fontSize: 'md',
      fontWeight: 'normal',
    },
    subtitle: {
      color: 'blue100',
      fontSize: 'base',
      fontWeight: 'semibold',
    },
    subtitleBlack: {
      color: 'dark100',
      fontSize: 'base',
      fontWeight: 'semibold',
    },
    titleNoBold: {
      color: 'dark100',
      fontSize: 'xl',
      fontWeight: 'normal',
      lineHeight: '3.5rem',
    },
  },
});

export default theme;
