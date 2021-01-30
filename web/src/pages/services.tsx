import Link from 'gatsby-link';
import React from 'react';
import { Container } from '../components/container';
import { Layout } from '../components/layouts';

const ServicesPage = () => (
  <Layout>
    <Container>
      <h1>Services</h1>
      <p>Welcome to services</p>
      <Link to="/">Go back to the homepage</Link>
    </Container>
  </Layout>
);

export default ServicesPage;
