import { Box, Container } from 'theme-ui';

export interface ContainerWithBackgroundProps {
  color?: 'green' | 'beige';
  element?: 'element1' | 'element2' | 'element3' | 'element4' |'element5' | 'element6';
  positionx?: 'right' | 'left';
  positiony?: '0' | '10' | '20' | '25' | '30' | '32' | '40' |'50' | '60' |'70' | '80' |'90';
  paddingtop?: '40px' | '190px' | '210px';
  paddingbottom?: '210px';
  size?: '453' | '298';

}

export const ContainerWithBackground: React.FC<
  ContainerWithBackgroundProps
> = ({ children, color, element, paddingbottom, paddingtop, positionx, positiony, size }) => {
  const backgroundColor = color === 'green' ? 'green100' : 'green20';
  const graphicalAddition = `url(/${element}.svg)`;
  return (
    <Box
      sx={{
        backgroundColor,
        pt: `${paddingtop}`,
        pb: `${paddingbottom}`,
        overflow: 'hidden',
        backgroundImage: graphicalAddition,
        backgroundRepeat: 'no-repeat',
        backgroundSize: [`${size}px`],
        backgroundPosition: `${positionx} bottom`,
        backgroundPositionY: `${positiony}%`
      }}
    >
      <Container variant="readable">{children}</Container>
    </Box>
  );
};
