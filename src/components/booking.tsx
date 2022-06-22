import React from 'react';
import { openPopupWidget } from 'react-calendly';
import { Button } from 'theme-ui';

export interface BookingProps {
  label?: string;
}

export const Booking: React.FC<BookingProps> = ({ label }) => {
  const onClick = () =>
    openPopupWidget({ url: 'https://calendly.com/simen-a-w-olsen' });
  return (
    <Button
      sx={{ color: '#0F2040', width: 'fit-content', cursor: 'pointer' }}
      onClick={onClick}
    >
      {label ? label : 'Book et møte →'}
    </Button>
  );
};
