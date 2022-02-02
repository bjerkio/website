import { Grid, Text } from '@theme-ui/components';
import { Person } from '../components/contact/Person';
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
        <Text>Simen</Text>
        <Text>Brage</Text>
        <Text>BNS</Text>
      </Grid>
    </Layout>
  );
};

export default Contact;
