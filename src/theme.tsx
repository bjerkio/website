import { webTheme } from '@bjerk/brand';
import { merge } from 'theme-ui';

/**
 * Once values stabilize, they should be
 * considered to be moved to @bjerk/brand
 * to be consumeable by other projects.
 *
 * When possible, add some description why,
 * maybe even a reference to a issue / pr
 * in @bjerk/brand project.
 */
export const theme = merge(webTheme, {
  /**
   * Colors
   *
   * These are added, but not yet synchronized.
   */
  colors: {
    muted: '#95E0C8',
    green120: '#2E896C',
    foreground: '#ffffff',
    green100: '#90F494',
    blue100: '#2A3BCC',
    dark100:  '#0F2040',
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
    readable: 940,
    full: 1540,
  },
  /**
   * `radii` should key should be available
   * from Figma.
   *
   * Read more: https://github.com/bjerkio/brand/issues/9
   */
  radii: [0, 4, 8, 100],
  /**
   * These layouts are still being tested/played with
   * in the current design.
   *
   * Read more: https://github.com/bjerkio/brand/issues/8
   */
  layout: {
    centered: {
      margin: '0 auto',
      m: 0,
      p: 0,
    },
    readable: {
      variant: 'centered',
      maxWidth: 1000,
      p: 4,
    },
    full: {
      variant: 'centered',
      maxWidth: 1540,
      p: 4,
    },
  },
  cards: {
    primary: {
      backgroundColor: 'green60',
      borderRadius: 2,
    },
  },
  /**
   * Default button stylings doesn't fit the current
   * design setup.
   *
   * Read more: https://github.com/bjerkio/brand/issues/10
   */
  buttons: {
    primary: {
      variant: 'heading',
      backgroundColor: '#90F494',
      p: 3,
      fontSize: 2,
    },
  },
  links: {
    buttonLink: {
      variant: 'heading',
      borderRadius: 1,
      color: 'dark100',
      width: 'fit-content',
    },
  },
  /**
   * Read more: https://github.com/bjerkio/brand/issues/7
   */
  text: {
    title: {
      fontFamily: 'Sora',
      fontStyle: 'normal',
      fontWeight: 600,
      fontSize: '48px',
      lineHeight: '60px',
      letterSpacing: -0.02,
    },
    heading: { 
      fontFamily: 'Sora',
      fontStyle: 'normal',
      fontWeight: 400,
      fontSize: '18px',
      lineHeight: '23px',
      letterSpacing: -0.02,
     },
    subtitle: {
      color: 'blue100',
      fontWeight: 600,
      fontFamily: 'Sora',
      fontSize: '20px',
      letterSpacing: -0.02,
      lineHeight: '27px',
    },
    standard: {
      fontFamily: 'Sora',
      fontSize: '28px',
      lineHeight: '37.8px',
      fontWeight: 400,
      letterSpacing: -0.02,
     },
    excerpt: {
      fontWeight: 400,
      fontSize: '32px',
      fontFamily: 'Sora',
      letterSpacing: -0.02,
      lineHeight: '43px'
    },
  },

  styles: {
    root: {
      backgroundColor: 'green100',

      /**
       * 👇 Should be added to webTheme
       */
      WebkitFontSmoothing: 'antialiased',
      MozOsxFontSmoothing: 'grayscale',
    },
    a: {
      textDecoration: 'underline',
      color: 'text',
    },
  },
});
