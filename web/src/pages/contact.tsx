import { Link } from 'gatsby';
import React from 'react';
import { Container } from '../components/container';
import { Layout } from '../components/layouts';

const Contact: React.FC = () => {
  return (
    <Layout>
      <Container>
        <h1>Contacts</h1>
        <p>Welcome to contacts</p>
        <Link to="/">Go back to the homepage</Link>
      </Container>
    </Layout>
  );
};

export default Contact;
