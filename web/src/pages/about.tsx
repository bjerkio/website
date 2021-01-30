import Link from 'gatsby-link';
import React from 'react';
import { Container } from '../components/block-content/container';
import { Layout } from '../layouts';

const AboutPage: React.FC = () => (
  <Layout>
    <Container>
      <h1>About</h1>
      <p>Welcome to about</p>
      <Link to="/">Go back to the homepage</Link>
    </Container>
  </Layout>
);

export default AboutPage;
