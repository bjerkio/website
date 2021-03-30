import { Container } from '@theme-ui/components';
import React from 'react';
import { Box, Grid, Heading, Input, Label, ThemeUIStyleObject } from 'theme-ui';
import Button from '../../../button';

const styles: ThemeUIStyleObject = {
  mb: 0,
  mx: 'auto',
  px: [5, 5, 6],
  mx: 'auto',
  backgroundColor: '#393E46',
  '.container': {
    mt: 5,
    py: '12%',
    px: 0,
    height: '100%',
    '.header': {
      color: 'white',
      fontSize: 60,
      fontWeight: '500',
    },
    '.label': {
      mb: 4,
      mt: 1,
      color: 'white',
      fontSize: 24,
    },
    '.input': {
      mb: 3,
      background: '#232931',
      color: 'white',
      border: 'none',
      px: 4,
      py: 3,
    },
    '.button': {
      mt: 4,
    },
  },
};

const ContactFooter: React.FC = () => {
  return (
    <Box sx={styles}>
      <Container className="container">
        <Grid gap={0} columns={[1, 1, '4fr 5fr']}>
          <Box>
            <Heading className="header">Si hei!</Heading>
            <Label className="label">
              Snakk med oss om ditt prosjekt, så hjelper vi deg fra start til
              mål.
            </Label>
            <Input className="input" placeholder="Fullt navn" />
            <Input className="input" placeholder="E-postadresse" />
            <Input className="input" placeholder="Prosjektbeskrivelse" />
            <Input className="input" placeholder="Budsjett" />
            <Button className="button" href="/contact">
              Start ditt prosjekt
            </Button>
          </Box>
          <Box className="video">{/* TODO: Contact footer video */}</Box>
        </Grid>
      </Container>
    </Box>
  );
};

export default ContactFooter;
