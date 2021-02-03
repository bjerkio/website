import { Heading } from '@theme-ui/components';
import React from 'react';
import { AboutList } from '../components/about-page/about-list';
import { Container } from '../components/container';
import { Layout } from '../components/layouts';

// TODO: fix image showing when Sanity will be done

const AboutPage: React.FC = () => (
  <Layout>
    <Container>
      <Heading
        as="h1"
        sx={{
          fontWeight: 'normal',
          width: '60%',
        }}
      >
        Slik forvandler vi i Bjerk dine gode ideer om til unike opplevelser.
      </Heading>
      <AboutList
        data={[
          {
            title: 'Åpen kildekode',
            description:
              'Vi i Bjerk mener at åpen kildekode er noe av det viktigste i programmering fordi det er en toveis-transaksjon der vi både er forbruker og bidragsyter. En slik tilnærming sikrer også at vi leverer et produkt av høyeste kvalitet. Bjerk har stor tro på at det ikke bare er viktig å samarbeide om å nå målene, men også for å løse problemer innen teknologi. Åpen kildekode gir dessuten kundene våre stor valg- og bevegelsesfrihet om vedkommende velger å samarbeide med noen andre underveis.',
            textAlign: 'left',
          },
          {
            title: 'Prosesser',
            description:
              'Trenger du hjelp til litt eller mye? Bjerk påtar seg både små og store oppgaver, så du kan være trygg på at vi hjelper deg gjennom hele prosessen uavhengig av prosjektets størrelse. I begynnelsen av et utviklingsprosjekt kan vi bistå med å planlegge og gjennomføre prosjektering. Deretter vil våre arkitekter sørge for en trygg gjennomføring og utarbeide spesifikasjoner før prosjektet kan tas videre. Bjerk legger stor vekt på å forstå kundenes ønsker. Det er en viktig del av våre prosesser der vi bygger menneskelig forståelse mellom oss og kunden.',
            textAlign: 'right',
          },
          {
            title: 'Mennesker',
            description:
              'For å lykkes med en digitaliseringsprosess er det viktig å ivareta menneskene som skal gjennom endringene. I Bjerk har vi lang erfaring med å hjelpe bedrifter gjennom digitaliseringsprosesser. Vi vet at tett dialog og god prosjektledelse er viktige faktorer for at man skal gjøre endringen til en god opplevelse for alle i bedriften. I Bjerk kan vi hjelpe til med en strategi som ivaretar det menneskelige aspektet og de ansatte i bedriften. Vi kan hjelpe deg fra en ide til et ferdig produkt og ta ansvaret for hele eller deler av prosessen.',
            textAlign: 'left',
          },
        ]}
      />
    </Container>
  </Layout>
);

export default AboutPage;
