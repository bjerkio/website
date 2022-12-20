import {
    extendTheme,
    type ThemeConfig,
  } from '@chakra-ui/react';
  
  const config: ThemeConfig = {
    initialColorMode: 'system',
    useSystemColorMode: true,
  };
  
  const theme = extendTheme({
    config,
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
      titlenobold: {
        color: 'dark100',
        fontWeight: 'normal',
        fontSize: 'xl',
        lineHeight: '3.5rem',
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
      contact: {
        color: 'dark100',
        fontSize: 'sm',
      },
    },
    breakpoints: {
      sm: '30em',
      md: '66em',
      lg: '80em',
      xl: '104em',
      '2xl': '128em',
    },
    radii: {
      0: '0em',
      1: '0.25em',
      2: '0.5em',
      3: '6em',
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
    }
  });

  export default theme;