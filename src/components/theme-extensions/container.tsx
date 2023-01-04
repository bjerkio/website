import { defineStyleConfig } from '@chakra-ui/react';

export const Container = defineStyleConfig({
  variants: {
    full: {
      maxWidth: 1500,
    },
    readable: {
      backgroundSize: 'cover',
      maxWidth: 950,
      px: { base: 6, md: 0 },
    },
  },
});
