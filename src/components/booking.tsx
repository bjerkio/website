import { Box, Button, Container } from '@theme-ui/components';
import React from 'react';
import { openPopupWidget } from 'react-calendly';

export const Booking: React.FC = () => {
  const onClick = () =>
    openPopupWidget({ url: 'https://calendly.com/simen-a-w-olsen' });
  return (
    <Box sx={{ bg: 'iron', color: 'background' }}>
      <Container
        variant="centered"
        sx={{ textAlign: 'center', py: 6, maxWidth: '660px' }}
      >
        <Box sx={{ fontSize: 8, fontWeight: 600, lineHeight: '5rem', mb: 4 }}>
          Let’s find some time and meet!
        </Box>
        <Button sx={{ color: 'iron' }} onClick={onClick}>
          Schedule a meeting →
        </Button>
      </Container>
    </Box>
  );
      }