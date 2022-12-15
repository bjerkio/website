import { defineStyleConfig } from '@chakra-ui/react';

export const Link = defineStyleConfig({
    variants: {
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
          color: 'blue100',
          fontSize: 'base',
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
});
