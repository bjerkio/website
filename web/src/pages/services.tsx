import Link from 'gatsby-link';
import React from 'react';
import { Container } from '../components/block-content/container';
import { Layout } from '../layouts';

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
