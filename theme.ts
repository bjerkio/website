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
  });

  export default theme;