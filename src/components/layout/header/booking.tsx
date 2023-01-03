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
        onClick={onClick}
      >
        {label ? label : 'Book et møte'}
      </Button>
    </Box>
  );
};
