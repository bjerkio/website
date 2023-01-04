import { defineStyleConfig } from '@chakra-ui/react';

export const Container = defineStyleConfig({
  variants: {
    centered: {
      margin: '0 auto',
      m: 0,
      p: 0,
      backgroundSize: 'cover',
    },
    readable: {
      backgroundSize: 'cover',
      maxWidth: 950,
      px: { base: 6, md: 0 },
    },
    full: {
      maxWidth: 1500,
      //backgroundSize: 'cover',
      //width: '100%',
    },
  },
});
