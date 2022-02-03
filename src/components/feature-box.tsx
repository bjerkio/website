import React from 'react';
import { Box, Flex } from 'theme-ui';

export interface FeatureBoxSpec {
  illustration: any;
  textAlign?: 'right' | 'left';
}

export const FeatureBox: React.FC<FeatureBoxSpec> = ({
  children,
  illustration,
  textAlign = 'left',
}) => {
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
