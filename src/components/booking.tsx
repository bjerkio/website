import React from 'react';
import { openPopupWidget } from 'react-calendly';
import { Button } from 'theme-ui';

export const Booking: React.FC = () => {
  const onClick = () =>
    openPopupWidget({ url: 'https://calendly.com/simen-a-w-olsen' });
  return (
    <Button
      sx={{ color: 'iron', width: 'fit-content', cursor: 'pointer', fontSize: [2,4] }}
      onClick={onClick}
    >
      Book et møte →
    </Button>
  );
};
