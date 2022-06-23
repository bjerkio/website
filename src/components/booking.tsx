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
      sx={{ 
        color: 'dark100',
        backgroundColor: 'transparent',
        width: 'fit-content',
        cursor: 'pointer',
        fontFamily: 'Sora',
        fontStyle: 'normal',
        fontWeight: 400,
        fontSize: '18px',
        lineHeight: '23px',
        letterSpacing: -0.02,
      }}
      onClick={onClick}
    >
      {label ? label : 'Book et møte'}
    </Button>
  );
};
