import { Box, Flex } from '@theme-ui/components';
import React from 'react';

export interface FeatureBoxSpec {
  illustration: any;
  textAlign?: 'right' | 'left';
  ml?: number;
}

export const FeatureBox: React.FC<FeatureBoxSpec> = ({
  children,
  illustration,
  textAlign = 'left',
  ml = 4,
}) => {
  const leftAlign = ['1fr', '1fr', '4fr 2fr'];
  const rightAlign = ['1fr', '1fr', '2fr 4fr'];

  const firstElement = textAlign === 'left' ? [2, 2, 1] : [2, 1, 2];
  const secondElement = textAlign === 'left' ? [1, 1, 2] : [1, 2, 1];

  return (
    <Flex sx={{ gap: 2 }}>
      <Box
        sx={{
          order: firstElement,
          flex: 1,
        }}
      >
        {children}
      </Box>
      {illustration && (
        <Box
          sx={{
            flex: 1,
            order: secondElement,
            mb: [3, 0],
          }}
        >
          {illustration}
        </Box>
      )}
    </Flex>
  );
};
