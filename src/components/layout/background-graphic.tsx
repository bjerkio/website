import { Box } from '@chakra-ui/react';
import React from 'react';

export interface ReadableWithGraphicsProps {
  element?: string;
  positionx?: 'right' | 'left';
  positiony?: string | number;
}

export const BackgroundGraphic: React.FC<ReadableWithGraphicsProps> = ({
  element,
  positionx,
  positiony,
}) => {
  const graphicalAddition = `url(/${element}.svg)`;

  return (
    <Box
      sx={{
        position: 'absolute',
        right: positionx === 'right' ? 0 : 'unset',
        top: positiony,
      }}
    >
      <Box
        sx={{
          backgroundImage: graphicalAddition,
          backgroundRepeat: 'no-repeat',
          backgroundPosition: positionx === 'right' ? 'top right' : 'top left',
          display: {
            base: 'none',
            sm: 'none',
            md: 'none',
            lg: 'none',
            xl: 'block',
          },
          pointerEvents: 'none',
          width: '31.25rem',
          height: '18.75rem',
        }}
      />
    </Box>
  );
};
