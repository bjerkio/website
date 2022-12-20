import { ReactNode } from 'react';
import { Box } from '@chakra-ui/react';

export interface PageSectionProps {
  backgroundColor?: 'green';
  children?: ReactNode;
}

export const PageSection: React.FC<PageSectionProps> = ({
  children,
  backgroundColor: backgroundColorProp,
}) => {
  const backgroundColor =
    backgroundColorProp === 'green' ? 'green100' : 'green20';
  return (
    <Box
      sx={{
        backgroundColor,
        py: { base: '98px', md: '194px' },
        width: '100%',
      }}
    >
      {children}
    </Box>
  );
};
