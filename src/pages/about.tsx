import { Grid, Heading, Link, Paragraph } from 'theme-ui';
import { Layout } from '../components/layout/layout';

const About: React.FC = () => {
  return (
    <Layout>
      <Grid sx={{ gap: 3 }}>
        <Heading variant="title">Våre prinsipper</Heading>
        <Paragraph variant="headline">
          Kompetanse og teknologi, kombinert med et brukervennlig design, er
          viktig for å lykkes
        </Paragraph>
        <Paragraph>
          Helt siden vi startet i 2009 har vi lært av hvordan man lykkes med
          produkter og tjenester. Vi er, som mange andre i bransjen, opptatt av{' '}
          <Link href={'https://agilemanifesto.org/iso/no/manifesto.html'}>
            det smidige manifestet
          </Link>
          , og det er nok prinsippene rundt samarbeid som står oss nærest.
        </Paragraph>
        <Paragraph>
          Vi jobber best under forutsetninger hvor det lages minst og flest
          mulig prosjekter, som skaper verdi. Det handler om å bevise vår verdi,
          og ha insentiver som skaper et godt samarbeid og driver frem det beste
          i oss.
        </Paragraph>

        <Link href={'https://agilemanifesto.org/iso/no/manifesto.html'}>
          Les det smidige manifestetet →
        </Link>
      </Grid>
      <Grid sx={{ gap: 3 }}>
        <Heading>Lære og justere kontinuerlig</Heading>
        <Paragraph>
          En viktig del av reisen er å gjøre feil, lære, reflektere og justere.
          For å kunne forbedre og forenkle hvordan mennesker tenker, jobber,
          lærer og kommuniserer, må vi akseptere at veien er ikke gått opp før
          vi begynner. Den blir til mens vi går.
        </Paragraph>
        <Paragraph sx={{ fontWeight: 'bold' }}>
          Fokuset ligger i å lære, tilpasse, navigere bedre og prøve igjen.{' '}
        </Paragraph>
      </Grid>

      <Grid sx={{ gap: 3 }}>
        <Heading>Åpen og gjennomsiktig prosess</Heading>
        <Paragraph>
          Vi mener det er helt essensielt at vi samarbeider, og at ting skjer i
          det åpne. I praksis betyr det at vi inviterer gjerne våre kunder inn
          der vi jobber; (eksempelvis, Slack og Github).
        </Paragraph>
        <Paragraph>
          Det skal være synlig når noe skjer, bedre blir beslutningene når de
          taes løpende og med mest mulig kontekst.
        </Paragraph>
        <Paragraph>
          La oss unngå barriærer, og all den frustrasjonen som kommer med de.{' '}
        </Paragraph>
      </Grid>
    </Layout>
  );
};

// eslint-disable-next-line import/no-default-export
export default About;
