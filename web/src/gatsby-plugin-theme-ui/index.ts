const theme = {
  fonts: {
    body: 'TTCommons, "Lucida Grande", Tahoma, system-ui, sans-serif',
    heading: 'TTCommons, "Lucida Grande", Tahoma, system-ui, sans-serif',
    monospace: 'Menlo, monospace',
  },
  colors: {
    primary: '#0FCFA2',
    secondary: '#1D4C3D',
    dark: '#232931',
    iron: '#393E46',
    dry: '#EEEEEE',
    lighter: '#53D9AD',
    background: '#fff',
    text: '#232931',
    lightGreen: '#4ECCA3',
  },
  breakpoints: ['40em', '52em', '64em'],
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 96],
  fontWeights: {
    body: 400,
    heading: 700,
    bold: 700,
  },
  lineHeights: {
    body: 1.5,
    heading: 1.125,
  },
  text: {
    heading: {
      fontFamily: 'heading',
      lineHeight: 'heading',
      fontWeight: 'heading',
    },
  },
  buttons: {
    primary: {
      fontFamily: 'body',
      borderRadius: '8px',
    },
    empty: {
      color: 'black',
      backgroundColor: 'background',
      border: '1px solid',
      borderColor: 'primary',
      borderRadius: '15px',
      display: 'flex',
      alignItems: 'center',
      maxWidth: '250px',
      maxHeight: '50px',
      cursor: 'pointer',
    },
  },
  styles: {
    root: {
      fontFamily: 'body',
      lineHeight: 'body',
      fontWeight: 'body',
    },
    h1: {
      variant: 'text.heading',
      fontSize: 5,
    },
    h2: {
      variant: 'text.heading',
      fontSize: 4,
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
      color: 'background',
      textDecoration: 'underline',
    },
  },
};

export type Theme = typeof theme;

export default theme;
