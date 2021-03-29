import { Container } from '@theme-ui/components';
import React from 'react';
import ReactPlayer from 'react-player/lazy';
import { Box, Grid, Heading, Input, Label, ThemeUIStyleObject } from 'theme-ui';
import Button from '../../../button';
import Video from '../../../../../static/Bjerk.mp4';
import { PlayButton } from './play-button';

const styles: ThemeUIStyleObject = {
  mb: 0,
  px: [5, 5, 6],
  maxWidth: '1920px',
  backgroundColor: '#393E46',
  '.container': {
    mt: 5,
    py: '12%',
    px: 0,
    height: '100%',
    '.form': {
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
    '.video': {
      position: 'relative',
      height: '100%',
      display: [ 'none', 'none', 'block' ]
    },
    '.mobile-video': {
      position: 'relative',
      width: '100%',
      height: '100%',
      display: [ 'block', 'block', 'none' ]
    }
  },
};

const ContactFooter: React.FC = () => {
  return (
    <Box sx={styles}>
      <Container className="container">
        <Box 
          sx={{
            display: 'grid',
            gridGap: 6,
            gridTemplateColumns: [ 'none', 'none', '4fr 5fr' ],
            gridTemplateRows: [ '1fr 2fr', '1fr 2fr', 'none' ],
            alignItems: 'start',
            pt: 0,
          }}
        >
          <Box className="mobile-video">
            <ReactPlayer
              url={Video}
              playing={true}
              controls={true}
              playIcon={<PlayButton/>}
              light='../SimenPhoto.png'
              volume={0}
              width="100%"
              height="100%"
              style={{
                width: '100%',
                height: '100%',
              }}
            />
          </Box>
          <Box className="form">
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
          <Box className="video">
            <ReactPlayer
              url={Video}
              playing={true}
              controls={true}
              playIcon={<PlayButton/>}
              light='../SimenPhoto.png'
              volume={0}
              width="100%"
              height="100%"
              style={{
                width: '100%',
                height: '100%',
              }}
            />
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default ContactFooter;
