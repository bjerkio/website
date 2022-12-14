import { Container, Grid, Heading, Link, Text } from '@chakra-ui/react';
import { BackgroundGraphic } from '../components/background-graphic';
import { Layout } from '../components/layout/layout';
import { PageSection } from '../components/page-section';

const Principles: React.FC = () => {
  return (
    <Layout>
      <PageSection>
        <BackgroundGraphic
          element="element5"
          positionx="right"
          positiony="580px"
        />
        <BackgroundGraphic
          element="element4"
          positionx="left"
          positiony="1725px"
        />
        <Container variant="readable">
          <Grid gap={9}>
            <Grid gap={5}>
              <Text variant="titlenobold">
                Kompetanse og teknologi, kombinert med et brukervennlig design,
                er viktig for å lykkes
              </Text>
              <Text variant="standard">
                Helt siden vi startet i 2009 har vi lært av hvordan man lykkes
                med produkter og tjenester. Vi er, som mange andre i bransjen,
                opptatt av{' '}
                <Link
                  href={'https://agilemanifesto.org/iso/no/manifesto.html'}
                  target={'_blank'}
                  color="black"
                  sx={{ textDecoration: 'underline' }}
                >
                  det smidige manifestet
                </Link>
                , og det er nok prinsippene rundt samarbeid som står oss nærest.
              </Text>

              <Text variant="standard">
                Vi jobber best under forutsetninger hvor det lages minst og
                flest mulig prosjekter, som skaper verdi. Det handler om å
                bevise vår verdi, og ha insentiver som skaper et godt samarbeid
                og driver frem det beste i oss.
              </Text>

              <Link
                href={'https://agilemanifesto.org/iso/no/manifesto.html'}
                target={'_blank'}
                variant="primary"
                sx={{textDecoration:"underline"}}
              >
                Les det smidige manifestetet
              </Link>
            </Grid>

            <Grid>
              <Text variant="subtitleblack">Åpen kildekode</Text>
              <Text variant="standard">
                Ved å dele erfaringer, diskutere og arbeide åpent mener vi at
                teknologi blir bedre. Derfor ligger Bjerk på listen over verdens
                største selskaper på åpen kildekode. For deg som kunde betyr det
                at du indirekte bidrar til å skape et bedre samfunn, men også
                betydelig bedre programvare.
              </Text>
              <Link
                href={'https://github.com/bjerkio'}
                target={'_blank'}
                variant="primary"
              >
                Sjekk vår Github-profil
              </Link>
            </Grid>

            <Grid>
              <Heading variant="subtitleblack">
                Lære og justere kontinuerlig
              </Heading>
              <Text variant="standard">
                En viktig del av reisen er å gjøre feil, lære, reflektere og
                justere. For å kunne forbedre og forenkle hvordan mennesker
                tenker, jobber, lærer og kommuniserer, må vi akseptere at veien
                er ikke gått opp før vi begynner. Den blir til mens vi går.
              </Text>
            </Grid>

            <Text variant="titlenobold">
              Fokuset ligger i å lære, tilpasse, navigere bedre og prøve igjen.
            </Text>

            <Grid>
              <Heading variant="subtitleblack">
                Åpen og gjennomsiktig prosess
              </Heading>
              <Text variant="standard">
                Vi mener det er helt essensielt at vi samarbeider, og at ting
                skjer i det åpne. I praksis betyr det at vi inviterer gjerne
                våre kunder inn der vi jobber; (eksempelvis, Slack og Github).
              </Text>
              <Text variant="standard">
                Det skal være synlig når noe skjer, bedre blir beslutningene når
                de taes løpende og med mest mulig kontekst.
              </Text>
              <Text variant="standard">
                La oss unngå barriærer, og all den frustrasjonen som kommer med
                de.
              </Text>
            </Grid>
          </Grid>
        </Container>
      </PageSection>
    </Layout>
  );
};

export default Principles;
