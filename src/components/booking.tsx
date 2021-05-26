import { Box, Button, Container } from '@theme-ui/components';
import React from 'react';
import { openPopupWidget } from 'react-calendly';
import { Text } from './text';

export const Booking: React.FC = () => {
  const onClick = () =>
    openPopupWidget({ url: 'https://calendly.com/simen-a-w-olsen' });
  return (
    <Box sx={{ bg: 'iron', color: 'background' }}>
      <Container
        variant="centered"
        sx={{ textAlign: 'center', py: [5, 6], maxWidth: '660px' }}
      >
        <Box
          sx={{
            fontSize: [5, 8],
            fontWeight: 600,
            lineHeight: ['', '5rem'],
            mb: 4,
          }}
        >
          <Text
            id="time-to-connect"
            defaultMessage="Let’s find some time to connect!"
          />
        </Box>
        <Button sx={{ color: 'iron' }} onClick={onClick}>
          <Text id="schedule-a-meeting" defaultMessage="Schedule a meeting →" />
        </Button>
      </Container>
    </Box>
  );
};
