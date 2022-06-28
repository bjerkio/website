import { Box, Container } from 'theme-ui';

export interface ContainerWithBackgroundProps {
  color?: 'green' | 'beige';
  element?: 'element1' | 'element2' | 'element3' | 'element4' |'element5' | 'element6';
}

export const ContainerWithBackground: React.FC<
  ContainerWithBackgroundProps
> = ({ color, children }) => {
  const backgroundColor = color === 'green' ? 'green100' : 'green20';
  const graphicalAddition = 'url(/element1.svg)';
  return (
    <Box
      sx={{
        backgroundColor,
        pt: '190px',
        pb: '207px',
        overflow: 'hidden',
        backgroundImage: graphicalAddition,
        backgroundRepeat: 'no-repeat',
        backgroundSize: ['255px', '453px'],
        backgroundPosition: 'right bottom',
      }}
    >
      <Container variant="readable">{children}</Container>
    </Box>
  );
};
