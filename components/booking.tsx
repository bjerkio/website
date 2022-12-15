import React from 'react';
import { openPopupWidget } from 'react-calendly';
import { Box, Button, ResponsiveValue } from '@chakra-ui/react';

export interface BookingProps {
  label?: string;
  variant?: ResponsiveValue<string & {}>;
}

export const Booking: React.FC<BookingProps> = ({ label, variant }) => {
  const onClick = () =>
    openPopupWidget({ url: 'https://calendly.com/simen-a-w-olsen' });
  return (
    <Box
      sx={{
        overflow: 'visible',
      }}
    >
      <Button
        variant={variant}
        sx={{
          cursor: 'pointer',
          color: 'dark100',
          p: 5,
          fontWeight: 'normal',
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
