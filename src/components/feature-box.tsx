import { Box, Grid } from '@theme-ui/components';
import React from 'react';

export interface FeatureBoxSpec {
  illustration: any;
  textAlign?: 'right' | 'left';
  ml?: number;
}

const FeatureBox: React.FC<FeatureBoxSpec> = ({
  children,
  illustration,
  textAlign = 'left',
  ml = 6,
}) => {
  const leftAlign = ['1fr', '1fr', '4fr 2fr'];
  const rightAlign = ['1fr', '1fr', '2fr 4fr'];

  const firstElement = textAlign === 'left' ? [2, 2, 1] : [2, 1, 2];
  const secondElement = textAlign === 'left' ? [1, 1, 2] : [1, 2, 1];

  return (
    <Grid
      sx={{
        ml: [0, 0, ml],
        py: 3,
        my: 6,
        fontSize: 4,
      }}
      gap="2"
      columns={textAlign === 'left' ? leftAlign : rightAlign}
    >
      <Box
        sx={{
          order: firstElement,
          flex: 3,
        }}
      >
        {children}
      </Box>
      {illustration && (
        <Box
          sx={{
            flex: 2,
            order: secondElement,
          }}
        >
          {illustration}
        </Box>
      )}
    </Grid>
  );
};

export default FeatureBox;
