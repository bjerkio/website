import { Box } from 'theme-ui';

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
          backgroundImage: graphicalAddition,
          backgroundRepeat: 'no-repeat',
          backgroundPositionX: `${positionx}`,
          backgroundPositionY: positiony,
          visibility: ['hidden', 'hidden', 'visible'],
          width: '100%',
          height: '100%',
          pointerEvents: 'none',
          overflow:'hidden'
        }}
      />
  );
};
