const theme = {
  fonts: {
    body: 'TTCommons, "Lucida Grande", Tahoma, system-ui, sans-serif',
    heading: 'TTCommons, "Lucida Grande", Tahoma, system-ui, sans-serif',
    monospace: 'Menlo, monospace',
  },
  colors: {
    primary: '#4ecca3',
    secondary: '#1D4C3D',
    dark: '#232931',
    iron: '#393E46',
    dry: '#EEEEEE',
    lighter: '#53D9AD',
    background: '#fff',
    text: '#232931',
    lightGreen: '#4ECCA3',
    modes: {
      dark: {
        background: '#232931',
        text: '#EEEEEE',
      },
    },
  },
  breakpoints: ['40em', '52em', '64em'],
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 96],
  fontWeights: {
    body: 400,
    heading: 600,
    bold: 700,
  },
  lineHeights: {
    body: 1.3,
    heading: 1.125,
  },
  text: {
    heading: {
      fontFamily: 'heading',
      lineHeight: 'heading',
      fontWeight: 'heading',
      pb: 3,
    },
    hero: {
      fontWeight: '600',
      maxWidth: '700px',
      fontSize: 'clamp(36px, 3.5vw, 50px)',
      my: [5, 5, 6],
    },
  },
  nav: {
    justifySelf: 'flex-end',
    alignItems: 'flex-end',
    '>a': {
      fontSize: 4,
      mx: 3,
      textDecoration: 'underline',
    },
  },
  buttons: {
    primary: {
      fontFamily: 'body',
      borderRadius: '8px',
    },
    empty: {
      color: 'text',
      backgroundColor: 'background',
      border: '1px solid',
      borderColor: 'primary',
      borderRadius: '10px',
      display: 'flex',
      alignItems: 'center',
      maxWidth: '250px',
      maxHeight: '60px',
      cursor: 'pointer',
      py: 3,
    },
  },
  layout: {
    centered: { margin: '0 auto', px: 4, maxWidth: '1520px' },
  },
  styles: {
    root: {
      fontFamily: 'body',
      lineHeight: 'body',
      fontWeight: 'body',
    },

    h1: {
      variant: 'text.heading',
      fontSize: 6,
    },
    h2: {
      variant: 'text.heading',
      fontSize: 5,
    },
    h3: {
      variant: 'text.heading',
      fontSize: 3,
    },
    h4: {
      variant: 'text.heading',
      fontSize: 2,
    },
    h5: {
      variant: 'text.heading',
      fontSize: 1,
    },
    h6: {
      variant: 'text.heading',
      fontSize: 0,
    },
    pre: {
      fontFamily: 'monospace',
      overflowX: 'auto',
      code: {
        color: 'inherit',
      },
    },
    code: {
      fontFamily: 'monospace',
      fontSize: 'inherit',
    },
    table: {
      width: '100%',
      borderCollapse: 'separate',
      borderSpacing: 0,
    },
    th: {
      textAlign: 'left',
      borderBottomStyle: 'solid',
    },
    td: {
      textAlign: 'left',
      borderBottomStyle: 'solid',
    },
    a: {
      color: 'text',
      textDecoration: 'underline',
    },
    container: {
      background: 'black',
    },
  },
};

export type Theme = typeof theme;

export default theme;
