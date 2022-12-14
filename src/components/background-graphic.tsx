import { Box } from '@chakra-ui/react';

export interface ReadableWithGraphicsProps {
  element?:
    | 'element1'
    | 'element2'
    | 'element3'
    | 'element4'
    | 'element5'
    | 'element6';
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
          display: ['none', 'none', 'none', 'block'],
          pointerEvents: 'none',
          width: '500px',
          height: '300px',
        }}
      />
    </Box>
  );
};
