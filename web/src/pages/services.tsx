import * as React from 'react';
import { Heading } from 'theme-ui';
import { Container } from '../components/container';
import { Layout } from '../components/layouts';
import { ServiceList } from '../components/services-page/service-list';

const ServicesPage = () => (
  <Layout>
    <Container>
      <Heading
        as="h1"
        sx={{
          fontWeight: 'normal',
          width: ['100%', '60%'],
          my: 5,
        }}
      >
        Bjerk hjelper bedriften din med å ta det neste steget inn i fremtiden.
      </Heading>
      <ServiceList
        data={[
          {
            name: 'programming',
            title: 'Applikasjons- og programvareutvikling',
            description:
              'Har du ideer for en applikasjon eller trenger kanskje bedriften din et program for en smidigere hverdag? Vi i Bjerk kan hjelpe deg med alt fra utvikling og integrering av programvare til applikasjoner slik at arbeidshverdagen din blir automatisert og dermed mer effektiv. Vår meget dyktige løsningsarkitekt og Head of Developing Team - Simen - kan hjelpe deg med å finne den beste løsningen for din ide.',
            url: {
              navigationLink: '',
              linkText: 'Book et møte med Simen',
            },
            textAlign: 'left',
          },
          {
            name: 'starategy',
            title: 'Strategisk rådgivning',
            description:
              'Våre strategiske rådgivere vil hjelpe deg med å fokusere på produktet bedriften din har. Vi diskuterer gjerne dine behov med tanke på kartlegging av både prisstrategi og lanseringsstrategi. Bjerk bistår deg også med å bygge et sterkt og konkurransedyktig team som vil bidra til at bedriften din når potensialet sitt. Snakk med Niklas om hvordan du og din bedrift kommer seg over den digitale dørstokken.',
            url: {
              navigationLink: '',
              linkText: 'Book et møte med Niklas',
            },
            textAlign: 'right',
          },
          {
            name: 'projectManagement',
            title: 'Prosjektledelse',
            description:
              'Bjerk kan bistå deg og bedriften din med å lede prosjekter fra A til Å. Våre prosjektledere sørger både for at teamet holder seg innenfor tids- og budsjettrammer og for at utviklingsprosjektet ditt når sine mål. Vil du løfte bedriften din til nye høyder eller trenger du kanskje hjelp til å tilpasse bedriften din den digitale hverdagen? Prosjektlederen vår Anna kan hjelpe deg og din bedrift med det.',
            url: {
              navigationLink: '',
              linkText: 'Book et møte med Anna',
            },
            textAlign: 'left',
          },
        ]}
      />
    </Container>
  </Layout>
);

export default ServicesPage;
