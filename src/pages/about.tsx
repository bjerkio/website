import { Heading, Text } from 'theme-ui';
import { FeatureBox } from '../components/feature-box';
import { OpenSource } from '../components/illustrations/open-source';
import { People } from '../components/illustrations/people';
import { Processes } from '../components/illustrations/processes';
import { Layout } from '../components/layout/layout';

const About: React.FC = () => {
  return (
    <Layout>
      <Heading variant="hero">
        Slik forvandler vi dine idéer til unike opplevelser
      </Heading>
      <FeatureBox textAlign="left" illustration={<OpenSource />}>
        <Heading as="h2">Åpen kildekode</Heading>
        <Text>
          Vi i Bjerk mener at åpen kildekode er noe av det viktigste i
          programmering fordi det er en toveis-transaksjon der vi både er
          forbruker og bidragsyter. En slik tilnærming sikrer også at vi leverer
          et produkt av høyeste kvalitet. Bjerk har stor tro på at det ikke bare
          er viktig å samarbeide om å nå målene, men også for å løse problemer
          innen teknologi.
        </Text>
        <Text>
          Åpen kildekode gir dessuten kundene våre stor valg- og
          bevegelsesfrihet om vedkommende velger å samarbeide med noen andre
          underveis.
        </Text>
      </FeatureBox>

      <FeatureBox textAlign="right" illustration={<Processes />}>
        <Heading as="h2">Prosesser</Heading>
        <Text>
          Trenger du hjelp til litt eller mye? Bjerk påtar seg både små og store
          oppgaver, så du kan være trygg på at vi hjelper deg gjennom hele
          prosessen uavhengig av prosjektets størrelse.
        </Text>
        <Text>
          I begynnelsen av et utviklingsprosjekt kan vi bistå med å planlegge og
          gjennomføre prosjektering. Deretter vil våre arkitekter sørge for en
          trygg gjennomføring og utarbeide spesifikasjoner før prosjektet kan
          tas videre.
        </Text>
        <Text>
          Bjerk legger stor vekt på å forstå kundenes ønsker. Det er en viktig
          del av våre prosesser der vi bygger menneskelig forståelse mellom oss
          og kunden.
        </Text>
      </FeatureBox>

      <FeatureBox textAlign="left" illustration={<People />}>
        <Heading as="h2">Mennesker</Heading>
        <Text>
          For å lykkes med en digitaliseringsprosess er det viktig å ivareta
          menneskene som skal gjennom endringene. I Bjerk har vi lang erfaring
          med å hjelpe bedrifter gjennom digitaliseringsprosesser. Vi vet at
          tett dialog og god prosjektledelse er viktige faktorer for at man skal
          gjøre endringen til en god opplevelse for alle i bedriften.
        </Text>
        <Text>
          I Bjerk kan vi hjelpe til med en strategi som ivaretar det
          menneskelige aspektet og de ansatte i bedriften. Vi kan hjelpe deg fra
          en ide til et ferdig produkt og ta ansvaret for hele eller deler av
          prosessen.
        </Text>
      </FeatureBox>
    </Layout>
  );
};

// eslint-disable-next-line import/no-default-export
export default About;
