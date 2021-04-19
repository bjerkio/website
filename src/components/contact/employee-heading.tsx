/** @jsx jsx */
import { Box, Flex, Label } from '@theme-ui/components';
import React from 'react';
import { jsx } from 'theme-ui';
import { Map } from '../illustrations';
import { Text as FormattedText } from '../text';

export const EmployeeHeading: React.FC = () => (
  <Flex sx={{ flexDirection: 'row', my: [0, 0, 6] }}>
    <Box sx={{ flex: 3 }}>
      <FormattedText
        as="h1"
        sx={{
          fontWeight: '600',
          width: ['100%', '100%', '60%'],
          mb: 5,
          mt: [0, 0, 5],
          pr: [4, 4, 0],
          fontSize: 'clamp(36px, 3.5vw, 50px)',
        }}
        id="contact.title"
        defaultMessage="Get in touch with us for a chat!"
      />

      <Box
        sx={{
          fontSize: 'clamp(20px, 2.3vw, 35px)',
          mb: [-6, -6, 0],
        }}
      >
        <a sx={{ variant: 'link' }} href="mailto:kontoret@bjerk.io">
          kontoret@bjerk.io
        </a>
        <Label>+47 22 12 05 12</Label>
        <Label mt={1}>Frognerveien 1B,</Label>
        <Label>0257</Label>
      </Box>
    </Box>
    <Box sx={{ flex: [0, 0, 1] }}>
      <Map
        sx={{
          width: [0, 0, '100%'],
          display: ['none', 'none', 'block'],
        }}
      />
    </Box>
  </Flex>
);
