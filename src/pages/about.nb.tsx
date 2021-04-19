import React from 'react';
import { Container, Heading, Text } from 'theme-ui';
import FeatureBox from '../components/feature-box';
import * as illu from '../components/illustrations';
import Layout from '../components/layouts';
import SEO from '../components/seo';

const About = () => {
  return (
    <Layout>
      <Container variant="centered">
        <SEO
          title="Om oss"
          description="Slik forvandler vi dine idéer til unike opplevelser"
        />
        <Heading variant="hero">
          Slik forvandler vi dine idéer til unike opplevelser
        </Heading>
        <FeatureBox
          textAlign="left"
          illustration={<illu.OpenSource sx={{ width: '100%' }} />}
        >
          <Heading as="h2">Åpen kildekode</Heading>
          <Text>
            Vi i Bjerk mener at åpen kildekode er noe av det viktigste i
            programmering fordi det er en toveis-transaksjon der vi både er
            forbruker og bidragsyter. En slik tilnærming sikrer også at vi
            leverer et produkt av høyeste kvalitet. Bjerk har stor tro på at det
            ikke bare er viktig å samarbeide om å nå målene, men også for å løse
            problemer innen teknologi.
          </Text>
          <Text>
            Åpen kildekode gir dessuten kundene våre stor valg- og
            bevegelsesfrihet om vedkommende velger å samarbeide med noen andre
            underveis.
          </Text>
        </FeatureBox>

        <FeatureBox
          textAlign="right"
          illustration={<illu.Processes sx={{ width: '100%' }} />}
        >
          <Heading as="h2">Prosesser</Heading>
          <Text>
            Trenger du hjelp til litt eller mye? Bjerk påtar seg både små og
            store oppgaver, så du kan være trygg på at vi hjelper deg gjennom
            hele prosessen uavhengig av prosjektets størrelse.
          </Text>
          <Text>
            I begynnelsen av et utviklingsprosjekt kan vi bistå med å planlegge
            og gjennomføre prosjektering. Deretter vil våre arkitekter sørge for
            en trygg gjennomføring og utarbeide spesifikasjoner før prosjektet
            kan tas videre.
          </Text>
          <Text>
            Bjerk legger stor vekt på å forstå kundenes ønsker. Det er en viktig
            del av våre prosesser der vi bygger menneskelig forståelse mellom
            oss og kunden.
          </Text>
        </FeatureBox>

        <FeatureBox
          textAlign="left"
          illustration={<illu.People sx={{ width: '100%' }} />}
        >
          <Heading as="h2">Mennesker</Heading>
          <Text>
            For å lykkes med en digitaliseringsprosess er det viktig å ivareta
            menneskene som skal gjennom endringene. I Bjerk har vi lang erfaring
            med å hjelpe bedrifter gjennom digitaliseringsprosesser. Vi vet at
            tett dialog og god prosjektledelse er viktige faktorer for at man
            skal gjøre endringen til en god opplevelse for alle i bedriften.
          </Text>
          <Text>
            I Bjerk kan vi hjelpe til med en strategi som ivaretar det
            menneskelige aspektet og de ansatte i bedriften. Vi kan hjelpe deg
            fra en ide til et ferdig produkt og ta ansvaret for hele eller deler
            av prosessen.
          </Text>
        </FeatureBox>
      </Container>
    </Layout>
  );
};

export default About;
