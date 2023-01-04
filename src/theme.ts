import {
    extendTheme,
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
    fonts:{
      heading: 'Sora',
      body: 'Sora',
      mono: 'Sora'
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
    fontSizes: {
      sm: 'clamp(0.8rem, 0.25vw + 0.74rem, 0.94rem)',
      base: 'clamp(1rem, 0.45vw + 0.89rem, 1.25rem)',
      md: 'clamp(1.25rem, 0.76vw + 1.06rem, 1.67rem)',
      lg: 'clamp(1.56rem, 1.2vw + 1.26rem, 2.22rem)',
      xl: 'clamp(1.95rem, 1.83vw + 1.5rem, 2.96rem)',
      xxl: 'clamp(2.44rem, 2.74vw + 1.76rem, 3.95rem)',
      xxxl: 'clamp(3.05rem, 4.02vw + 2.05rem, 5.26rem)',
    },
    textStyles: {
      caption: {
        color: 'dark100',
        fontWeight: 'semibold',
        fontSize: 'xl',
      },
      contact: {
        color: 'dark100',
        fontSize: 'sm',
      },
      footerText: {
        color: "green20",
        fontSize: "base"
      },
      standard: {
        color: 'dark100',
        fontSize: 'md',
        fontWeight: 'normal',
      },
      subtitle: {
        color: 'blue100',
        fontWeight: 'semibold',
        fontSize: 'base',
      },
      subtitleBlack: {
        color: 'dark100',
        fontSize: 'base',
        fontWeight: 'semibold',
      },
      titleNoBold: {
        color: 'dark100',
        fontWeight: 'normal',
        fontSize: 'xl',
        lineHeight: '3.5rem',
      },
    },
    breakpoints: {
      sm: '35rem',
      md: '66rem',
      lg: '80rem',
      xl: '104rem',
      '2xl': '128rem',
    },
    radii: {
      sm: '0.4rem',
      md: '1rem',
      lg: '2rem',
      xl: '4rem'
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
        baseStyle: {
          fontWeight: 'normal',
          color: 'dark100',
          borderRadius: 'lg',
          backgroundColor: 'transparent',
          fontFamily: 'body',
        },
        variants: {
          primary: {
          },
          with_box: {
            fontSize: 'base',
            p: 4,
            boxShadow:
            '0.2rem 0.2rem 0.7rem rgba(0, 0, 0, 0.1)',
          },
          secondary: {
            backgroundColor: 'green20',
            p: 4
          },
        },
      },
    },
  });

  export default theme;