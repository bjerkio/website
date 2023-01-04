import { defineStyleConfig } from '@chakra-ui/react';

export const Link = defineStyleConfig({
  variants: {
    emphasis: {
      color: 'blue100',
      fontSize: 'base',
    },
    footerLink: {
      color: 'blue40',
      textDecoration: 'none',
      ':hover': {
        textDecoration: 'underline',
      },
    },
    hamburgerLink: {
      color: 'green20',
      textDecoration: 'none'
    },
    nav: {
      color: 'dark100',
      fontSize: 'base',
      ':hover': {
        color: 'blue100',
        textDecoration: 'underline',
      },
    },
    primary: {
      color: 'blue100',
      ':hover': {
        textDecoration: 'underline',
      },
    },
    socials: {
      textDecoration: 'none',
      color: 'blue100',
      fontSize: 'base',
      ':hover': {
        textDecoration: 'underline',
      },
    },
    socialsBlack: {
      textDecoration: 'none',
      color: 'dark100',
      fontSize: 'base',
      ':hover': {
        textDecoration: 'underline',
      },
    },
  },
});
