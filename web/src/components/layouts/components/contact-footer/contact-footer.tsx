import { Container, Flex } from '@theme-ui/components';
import React from 'react';
import { Box, Heading, Input, Label, ThemeUIStyleObject } from 'theme-ui';
import Button from '../../../button';

const styles: ThemeUIStyleObject = {
  mb: 0,
  mx: 'auto',
  px: [4, 4, 6],
  backgroundColor: '#393E46',
  '.container': {
    height: '100%',
    margin: '0 auto',
    mt: 5,
    px: [5, 5, 6],
    py: [5, 5, 6],
    maxWidth: '1920px',
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
      borderRadius: '10px',
    },
    '.button': {
      mt: 4,
      py: '15px',
    },
  },
};

const ContactFooter: React.FC = () => {
  return (
    <Box sx={styles}>
      <Container className="container">
        <Flex>
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
          {/* <Box className="video"></Box> */}
        </Flex>
      </Container>
    </Box>
  );
};

export default ContactFooter;
