import { Box, Container } from 'theme-ui';

export interface ContainerWithBackgroundProps {
  color?: 'green' | 'beige';
}

export const ContainerWithBackground: React.FC<
  ContainerWithBackgroundProps
> = ({ color, children }) => {
  const backgroundColor = color === 'green' ? 'green100' : 'green20';

  return (
    <Box
      sx={{
        backgroundColor,
        pt: '190px',
        pb: '207px',
        overflow: 'hidden',
      }}
    >
      <Container variant="readable">{children}</Container>
    </Box>
  );
};
