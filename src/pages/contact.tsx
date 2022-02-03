import { Flex, Grid, Heading, Text } from 'theme-ui';
import { ContactPerson } from '../components/contact/contact-person';
import { Layout } from '../components/layout/layout';

const Contact: React.FC = () => {
  return (
    <Layout>
      <Flex sx={{ flexDirection: 'column', gap: 3 }}>
        <Heading>La oss ta en prat!</Heading>
        <Text>kontoret@bjerk.io</Text>
        <Text>+47 22 12 05 12</Text>
      </Flex>
      <Grid columns={['1fr', 'repeat(3, 1fr)']}>
        <ContactPerson
          name={'Brage Sekse Aarset'}
          photoPath={'/persons/brage-sekse-aarset.png'}
          title={'Utvikler'}
          email={'brage@bjerk.io'}
          github={'https://github.com/braaar'}
          linkedIn={'https://www.linkedin.com/in/braaar/'}
        />
        <ContactPerson
          name={'Simen A. W. Olsen'}
          title={'Daglig leder / Løsningsarkitekt'}
          photoPath={'/persons/simen-olsen.png'}
          email={'so@bjerk.io'}
          github={'https://github.com/cobraz'}
          linkedIn={'https://www.linkedin.com/in/cobraz/'}
        />
        <ContactPerson
          name={'Bjørn Niklas Sjøstrøm'}
          photoPath={'/persons/bjorn-niklas-sjostrom.jpg'}
          title={'Strategirådgiver'}
          email={'bns@bjerk.io'}
          linkedIn={
            'https://www.linkedin.com/in/bj%C3%B8rn-niklas-sj%C3%B8str%C3%B8m-8043277/'
          }
        />
      </Grid>
    </Layout>
  );
};

// eslint-disable-next-line import/no-default-export
export default Contact;
