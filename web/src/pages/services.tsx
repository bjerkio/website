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
          width: '60%',
        }}
      >
        Bjerk hjelper bedriften din med å ta det neste steget inn i fremtiden.
      </Heading>
      <ServiceList data={[]} />
    </Container>
  </Layout>
);

export default ServicesPage;
