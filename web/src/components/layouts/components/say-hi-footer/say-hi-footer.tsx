import { Container } from '@theme-ui/components';
import React from 'react';
import { Box, Grid, Heading, Input, Label } from 'theme-ui';
import Button from '../../../../components/button';

export default function SayHiFooter() {
  return (
    <Box sx={{ mb: 0 }}>
      <Container sx={{ mt: 5, backgroundColor: '#393E46', px: 6, py: 7 }}>
        <Grid gap={0} columns={[1, 1, '1fr 1fr']}>
          <Box px={5}>
            <Heading sx={{ color: 'white', fontSize: 50, fontWeight: '500' }}>
              Si hei!
            </Heading>
            <Label mb={4} mt={3} sx={{ color: 'white', fontSize: 20 }}>
              Snakk med oss om ditt prosjekt, så hjelper vi deg fra start til
              mål.
            </Label>
            <Input
              sx={{
                mb: 3,
                mt: 5,
                background: '#232931',
                color: 'white',
                border: 'none',
                px: 4,
                py: 3,
              }}
              defaultValue={'Fullt navn'}
            />
            <Input
              sx={{
                mb: 3,
                background: '#232931',
                color: 'white',
                border: 'none',
                px: 4,
                py: 3,
              }}
              defaultValue={'E-postadresse'}
            />
            <Input
              sx={{
                mb: 3,
                background: '#232931',
                color: 'white',
                border: 'none',
                px: 4,
                py: 3,
              }}
              defaultValue={'Prosjektbeskrivelse'}
            />
            <Input
              sx={{
                mb: 3,
                background: '#232931',
                color: 'white',
                border: 'none',
                px: 4,
                py: 3,
              }}
              defaultValue={'Budsjett'}
            />
            <Button href={'/contact'} sx={{ mt: 4, px: 4, py: 3 }}>
              {'Start ditt prosjekt'}
            </Button>
          </Box>
          <Box></Box>
        </Grid>
      </Container>
    </Box>
  );
}
