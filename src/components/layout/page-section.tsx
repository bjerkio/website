import { PropsWithChildren, ReactNode } from 'react';
import { Box } from '@chakra-ui/react';
import React from 'react';

export interface PageSectionProps {
  backgroundColor?: 'green';
}

export const PageSection: React.FC<PropsWithChildren<PageSectionProps>> = ({
  children,
  backgroundColor: backgroundColorProp,
}) => {
  const backgroundColor =
    backgroundColorProp === 'green' ? 'green100' : 'green20';
  return (
    <Box
      sx={{
        backgroundColor,
        py: { base: 7, md: 9 },
        width: '100%',
      }}
    >
      {children}
    </Box>
  );
};
