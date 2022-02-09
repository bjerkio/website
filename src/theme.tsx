import { merge } from 'theme-ui';
import { webTheme } from '@bjerk/brand';

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
    readable: 770,
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
      maxWidth: 770,
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
      backgroundColor: 'black100',
      p: 3,
      fontSize: 2,
    },
  },
  /**
   * Read more: https://github.com/bjerkio/brand/issues/7
   */
  text: {
    title: {
      lineHeight: 0.9,
      fontWeight: 800,
    },
    subtitle: {
      color: 'green120',
      fontWeight: 'medium',
    },
  },

  styles: {
    root: {
      backgroundColor: 'background',

      /**
       * 👇 Should be added to webTheme
       */
      WebkitFontSmoothing: 'antialiased',
      MozOsxFontSmoothing: 'grayscale',
    },
    a: {
      textDecoration: 'underline',
    },
  },
});
