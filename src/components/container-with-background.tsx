import { Box, Container } from 'theme-ui';

export interface ContainerWithBackgroundProps {
  color?: 'green' | 'beige';
  element?: 'element1' | 'element2' | 'element3' | 'element4' |'element5' | 'element6';
  marginbottom?: '-170px';
  positionx?: 'right' | 'left';
  positiony?: '0' | '10' | '20' | '25' | '30' | '32' | '40' | '44' | '46' | '50' | '60' |'70' | '80' |'90';
  paddingtop?: '40px' | '50px' | '70px';
  paddingbottom?: '90px';
  size?: '453' | '298';

}

export const ContainerWithBackground: React.FC<
  ContainerWithBackgroundProps
> = ({ children, color, element, marginbottom, paddingbottom, paddingtop, positionx, positiony, size }) => {
  const backgroundColor = color === 'green' ? 'green100' : 'green20';
  const graphicalAddition = `url(/${element}.svg)`;
  return (
    <Box sx={{
        visibility: ['visible', 'hidden'],
        backgroundColor,
    }}>   
    <Box
      sx={{
        backgroundColor,
        pt: `${paddingtop}`,
        pb: `${paddingbottom}`,
        mb: `${marginbottom}`,
        overflow: 'hidden',
        backgroundImage: graphicalAddition,
        backgroundRepeat: 'no-repeat',
        backgroundSize: [`${size}px`],
        backgroundPosition: `${positionx} bottom`,
        backgroundPositionY: `${positiony}%`,
        visibility: ['hidden', 'visible'],
      }}
    >
     
      <Container variant="readable" sx={{
        visibility: ['visible'],
        p: 7
      }}>{children}</Container>
      </Box>
    </Box>
  );
};
