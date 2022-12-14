import React from 'react';
import { openPopupWidget } from 'react-calendly';
import { Box, Button } from '@chakra-ui/react';

export interface BookingProps {
  label?: string;
  variant?: string;
}

export const Booking: React.FC<BookingProps> = ({ label, variant }) => {
  const onClick = () =>
    openPopupWidget({ url: 'https://calendly.com/simen-a-w-olsen' });
  return (
    <Box
      sx={{
        overflow: 'visible',
        pb: [0, 3],
      }}
    >
      <Button
        sx={{
          cursor: 'pointer',
          fontFamily: 'body',
          variant: 'heading',
          color: 'dark100',
          p: 4,
          backgroundColor: 'green20',
          boxShadow:
            '2px 4px 11px rgba(0, 0, 0, 0.1), inset 3px 4px 9px rgba(255, 255, 255, 0.15)',
          borderRadius: '30px',
          width: 'fit-content',
        }}
        onClick={onClick}
      >
        {label ? label : 'Book et møte'}
      </Button>
    </Box>
  );
};
