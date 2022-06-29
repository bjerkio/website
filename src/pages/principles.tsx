import { Grid, Heading, Link, Paragraph } from 'theme-ui';
import { Layout } from '../components/layout/layout';
import { BackgroundGraphic } from '../components/background-graphic';
import { PageSection } from '../components/page-section';

const Principles: React.FC = () => {
  return (
    <Layout>
      <Grid sx={{ width: '100%' }}>
        <PageSection>
          <BackgroundGraphic element='element5' positionx='right' positiony='72%' />
          <Grid sx={{ width: '100%', gap: 4 }} >
            <Paragraph variant="titlenobold">
              Kompetanse og teknologi, kombinert med et brukervennlig design, er
              viktig for å lykkes
            </Paragraph>
            <Paragraph variant="standard">
              Helt siden vi startet i 2009 har vi lært av hvordan man lykkes med
              produkter og tjenester. Vi er, som mange andre i bransjen, opptatt
              av{' '}
              <Link
                href={'https://agilemanifesto.org/iso/no/manifesto.html'}
                target={'_blank'}
                color="black"
                sx={{ textDecoration: 'underline' }}
              >
                det smidige manifestet
              </Link>
              , og det er nok prinsippene rundt samarbeid som står oss nærest.
            </Paragraph>

            <Paragraph variant="standard">
              Vi jobber best under forutsetninger hvor det lages minst og flest
              mulig prosjekter, som skaper verdi. Det handler om å bevise vår
              verdi, og ha insentiver som skaper et godt samarbeid og driver
              frem det beste i oss.
            </Paragraph>

            <Link
              href={'https://agilemanifesto.org/iso/no/manifesto.html'}
              target={'_blank'}
              sx={{ fontSize: [2,4] }}
            >
              Les det smidige manifestetet
            </Link>

            <Paragraph variant="subtitleblack" mt="100px">
              Åpen kildekode
            </Paragraph>
            <Paragraph variant="standard">
              Ved å dele erfaringer, diskutere og arbeide åpent mener vi at
              teknologi blir bedre. Derfor ligger Bjerk på listen over verdens
              største selskaper på åpen kildekode. For deg som kunde betyr det
              at du indirekte bidrar til å skape et bedre samfunn, men også
              betydelig bedre programvare.
            </Paragraph>
            <Link
              href={'https://github.com/bjerkio'}
              target={'_blank'}
              sx={{ fontSize: [2,4] }}
            >
              Sjekk vår Github-profil
            </Link>
          </Grid>
      
          <BackgroundGraphic element='element4' positionx='left' positiony='82%'/>
          <Grid sx={{ gap: 3 }}>
            <Heading variant="subtitleblack">
              Lære og justere kontinuerlig
            </Heading>
            <Paragraph variant="standard">
              En viktig del av reisen er å gjøre feil, lære, reflektere og
              justere. For å kunne forbedre og forenkle hvordan mennesker
              tenker, jobber, lærer og kommuniserer, må vi akseptere at veien er
              ikke gått opp før vi begynner. Den blir til mens vi går.
            </Paragraph>

            <Paragraph variant="titlenobold" mt="100px">
              Fokuset ligger i å lære, tilpasse, navigere bedre og prøve igjen.{' '}
            </Paragraph>
              

          </Grid>

          <Grid sx={{ gap: 3, mt: '100px' }}>
            <Heading variant="subtitleblack">
              Åpen og gjennomsiktig prosess
            </Heading>
            <Paragraph variant="standard">
              Vi mener det er helt essensielt at vi samarbeider, og at ting
              skjer i det åpne. I praksis betyr det at vi inviterer gjerne våre
              kunder inn der vi jobber; (eksempelvis, Slack og Github).
            </Paragraph>
            <Paragraph variant="standard">
              Det skal være synlig når noe skjer, bedre blir beslutningene når
              de taes løpende og med mest mulig kontekst.
            </Paragraph>
            <Paragraph variant="standard">
              La oss unngå barriærer, og all den frustrasjonen som kommer med
              de.{' '}
            </Paragraph>
          </Grid>
      
          </PageSection>
      </Grid>
    </Layout>
  );
};

export default Principles;
