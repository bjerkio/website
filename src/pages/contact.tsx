import { Grid, Text } from 'theme-ui';
import { Person } from '../components/contact/person';
import { Layout } from '../components/layout/layout';

const Contact: React.FC = () => {
  return (
    <Layout>
      <Grid columns={['1fr', 'repeat(3, 1fr)']}>
        <Person
          name={'Brage Sekse Aarset'}
          photoPath={'/persons/brage-sekse-aarset.png'}
          email={'brage@bjerk.io'}
          github={'https://github.com/braaar'}
          linkedIn={'https://www.linkedin.com/in/braaar/'}
        />
        <Person
          name={'Simen A. W. Olsen'}
          photoPath={'/persons/simen-olsen.png'}
          email={'so@bjerk.io'}
          github={'https://github.com/cobraz'}
          linkedIn={'https://www.linkedin.com/in/cobraz/'}
        />
        <Person
          name={'Bjørn Niklas Sjøstrøm'}
          photoPath={'/persons/bjorn-niklas-sjostrom.jpg'}
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
