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
    dark100: '#0F2040',
    green20: '#EDF9F1',
  },
  fonts: {
    body: 'Sora',
    heading: 'inherit',
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
      backgroundSize: 'cover',
    },
    readable: {
      variant: 'centered',
      maxWidth: 1200,
      backgroundSize: 'cover',
    },
    full: {
      variant: 'centered',
      maxWidth: 1500,
      p: 4,
      //backgroundSize: 'cover',
      //width: '100%',
    },
    header: {
      maxWidth: 1500,
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
      fontFamily: 'body',
      variant: 'heading',
      color: 'dark100',
      p: 3,
      backgroundColor: 'transparent',
      boxShadow:
        '2px 4px 11px rgba(0, 0, 0, 0.1), inset 3px 4px 9px rgba(255, 255, 255, 0.15)',
      borderRadius: '30px',
    },
  },
  links: {
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
      ":hover": {
        color: 'blue100',
        textDecoration: 'underline'
      }
    },
    socials: {
      fontSize: 0,
    },
    hover: {
      textDecoration: 'underline'
    }

  },
  fontSizes: [16, 18, 20, 24, 28, 32, 48],
  /**
   * Read more: https://github.com/bjerkio/brand/issues/7
   */
  text: {
    title: {
      fontWeight: 600,
      fontSize: [5,6],
    },
    titlenobold: {
      fontWeight: 400,
      fontSize: [5,6],
    },
    heading: {
      fontWeight: 400,
      fontSize: 1,
    },
    subtitle: {
      color: 'blue100',
      fontWeight: 600,
      fontSize: [0,2],
    },
    subtitleblack: {
      fontSize: 2,
      fontWeight: 600,
    },
    standard: {
      fontSize: [2,4],
      fontWeight: 400,
    },
    excerpt: {
      fontWeight: 400,
      fontSize: [2,5],
    },
    readmore: {
      fontWeight: 400,
      fontSize: [0,3],
    },
    contact: {
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
    a: {
      color: 'blue100',
      textDecoration: 'none',
    },
  },
});
