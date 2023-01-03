import { Container, Grid, Heading, Link, Text } from '@chakra-ui/react';
import { BackgroundGraphic } from '../components/layout/background-graphic';
import { Layout } from '../components/layout/layout';
import { PageSection } from '../components/layout/page-section';
import NextLink from 'next/link';
import React from 'react';

const Principles: React.FC = () => {
  return (
    <Layout>
      <PageSection>
        <BackgroundGraphic
          element="element5"
          positionx="right"
          positiony="35rem"
        />
        <BackgroundGraphic
          element="element4"
          positionx="left"
          positiony="106rem"
        />
        <Container variant="readable">
          <Grid gap={9}>
            <Grid gap={5}>
              <Text textStyle={{ base: 'titleNoBold' }}>
                Kompetanse og teknologi, kombinert med et brukervennlig design,
                er viktig for å lykkes
              </Text>
              <Text textStyle={{ base: 'standard' }}>
                Helt siden vi startet i 2009 har vi lært av hvordan man lykkes
                med produkter og tjenester. Vi er, som mange andre i bransjen,
                opptatt av{' '}
                <Link
                  as={NextLink}
                  href={'https://agilemanifesto.org/iso/no/manifesto.html'}
                  target={'_blank'}
                  color="dark100"
                  textDecorationLine="underline"
                >
                  det smidige manifestet
                </Link>
                , og det er nok prinsippene rundt samarbeid som står oss nærest.
              </Text>

              <Text textStyle={{ base: 'standard' }}>
                Vi jobber best under forutsetninger hvor det lages minst og
                flest mulig prosjekter, som skaper verdi. Det handler om å
                bevise vår verdi, og ha insentiver som skaper et godt samarbeid
                og driver frem det beste i oss.
              </Text>

              <Link
                as={NextLink}
                href={'https://agilemanifesto.org/iso/no/manifesto.html'}
                target={'_blank'}
                variant={{base: "primary"}}
                textDecorationLine="underline"
                fontSize={{base: 'base'}}
              >
                Les det smidige manifestetet
              </Link>
            </Grid>

            <Grid>
              <Text textStyle={{ base: 'subtitleBlack' }}>Åpen kildekode</Text>
              <Text textStyle={{ base: 'standard' }}>
                Ved å dele erfaringer, diskutere og arbeide åpent mener vi at
                teknologi blir bedre. Derfor ligger Bjerk på listen over verdens
                største selskaper på åpen kildekode. For deg som kunde betyr det
                at du indirekte bidrar til å skape et bedre samfunn, men også
                betydelig bedre programvare.
              </Text>
              <Link
                as={NextLink}
                href={'https://github.com/bjerkio'}
                target={'_blank'}
                variant="primary"
                textDecorationLine="underline"
                mt={2}
                fontSize={{base: 'base'}}
              >
                Sjekk vår Github-profil
              </Link>
            </Grid>

            <Grid>
              <Text textStyle={{ base: 'subtitleBlack' }}>
                Lære og justere kontinuerlig
              </Text>
              <Text textStyle={{ base: 'standard' }}>
                En viktig del av reisen er å gjøre feil, lære, reflektere og
                justere. For å kunne forbedre og forenkle hvordan mennesker
                tenker, jobber, lærer og kommuniserer, må vi akseptere at veien
                er ikke gått opp før vi begynner. Den blir til mens vi går.
              </Text>
            </Grid>

            <Text textStyle={{ base: 'titleNoBold' }}>
              Fokuset ligger i å lære, tilpasse, navigere bedre og prøve igjen.
            </Text>

            <Grid>
              <Text textStyle={{ base: 'subtitleBlack' }}>
                Åpen og gjennomsiktig prosess
              </Text>
              <Text textStyle={{ base: 'standard' }}>
                Vi mener det er helt essensielt at vi samarbeider, og at ting
                skjer i det åpne. I praksis betyr det at vi inviterer gjerne
                våre kunder inn der vi jobber; (eksempelvis, Slack og Github).
              </Text>
              <Text textStyle={{ base: 'standard' }}>
                Det skal være synlig når noe skjer, bedre blir beslutningene når
                de taes løpende og med mest mulig kontekst.
              </Text>
              <Text textStyle={{ base: 'standard' }}>
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
