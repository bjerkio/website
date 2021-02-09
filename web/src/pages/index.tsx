/** @jsx */
import { Box, Grid, Heading, Label } from '@theme-ui/components';
import React from 'react';
import Button from '../components/button';
import { Container } from '../components/container';
import CallToActionBox, {
  CallToActionBoxProps,
} from '../components/home-page/call-to-action-box';
import IntroVideo from '../components/home-page/intro-video';
import { ProjectList } from '../components/home-page/project-list';
import { Layout } from '../components/layouts';

const actionBoxMockup: CallToActionBoxProps[] = [
  {
    title: 'Programvareutvikling',
    description:
      'Bjerk driver med utvikling av desktop- og mobilapplikasjoner. Vi leverer digitale løsninger basert på moderne teknologi og metoder.',
    linkText: 'Les mer',
    linkTo: '/services',
  },
  {
    title: 'Strategisk rådgivning',
    description:
      'Skal bedriften din gjennom en digitaliserings-prosess? Bjerk bistår deg og dine ansatte med alt fra digitale løsninger til endringsledelse.',
    linkText: 'Les mer',
    linkTo: '/services',
  },
  {
    title: 'Prosjektledelse',
    description:
      'Våre ansatte har mange års erfaring med både utvikling og leveranse av programvare, og ledelse. Vi bruker Lean-metodikk i våre prosjekter.',
    linkText: 'Les mer',
    linkTo: '/services',
  },
];

const Homepage: React.FC = () => (
  <Layout>
    <Box>
      <IntroVideo
        data={{
          videoUrl: 'https://www.youtube.com/embed/J1FJaWuPvbQ',
          videoTitle: null,
        }}
      >
        <Box sx={{ fontSize: 'clamp(16px, 8vw, 38px)' }}>
          <Label sx={{ fontWeight: 'normal' }}>
            Vi er produktutviklere, skapere, strateger og samfunnsaktivister.
          </Label>
          <Button href="/contact">Start ditt prosjekt</Button>
        </Box>
      </IntroVideo>
      <Container sx={{ pt: 6 }}>
        <Heading as="h1" sx={{ mb: 3, fontWeight: 'normal' }}>
          Hvordan kan vi hjelpe deg?
        </Heading>
        <Box sx={{ width: '60%' }}>
          Vårt mål er å skape en arbeidsplass hvor folk drives av å skape
          opplevelser og forbedre hverdagen til folk – av folk, for folk. Vårt
          medium er teknologi, og lidenskapen er å skape.
        </Box>
        <Grid
          pt={5}
          sx={{
            gap: 3,
            gridTemplateColumns: ['1fr', '1fr', '1fr', '1fr 1fr 1fr'],
          }}
        >
          {actionBoxMockup.map((ctabox, index) => (
            <CallToActionBox data={ctabox} key={index}>
              {ctabox.description}
            </CallToActionBox>
          ))}
        </Grid>
        <ProjectList data={[]} />
      </Container>
    </Box>
  </Layout>
);

export default Homepage;
