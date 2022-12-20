import { defineStyleConfig } from '@chakra-ui/react';

export const Link = defineStyleConfig({
  variants: {
    primary: {
      color: 'blue100',
      ':hover': {
        textDecoration: 'underline',
      },
    },
    nav: {
      color: 'dark100',
      ':hover': {
        color: 'blue100',
        textDecoration: 'underline',
      },
    },
    emphasis: {
      color: 'blue100',
      fontSize: 'base',
    },
    socials: {
      textDecoration: 'none',
    },
    footerLink: {
      color: 'blue40',
      textDecoration: 'none',
      ':hover': {
        textDecoration: 'underline',
      },
    },
  },
});
