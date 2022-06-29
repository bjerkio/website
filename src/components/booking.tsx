import React from 'react';
import { openPopupWidget } from 'react-calendly';
import { Button } from 'theme-ui';

export interface BookingProps {
  label?: string;
  variant?: string;
}

export const Booking: React.FC<BookingProps> = ({ label, variant }) => {
  const onClick = () =>
    openPopupWidget({ url: 'https://calendly.com/simen-a-w-olsen' });
  return (
    <Button
      variant={variant ?? 'primary' }
      sx={{
        cursor: 'pointer',
      }}
      onClick={onClick}
    >
      {label ? label : 'Book et møte'}
    </Button>
  );
};
