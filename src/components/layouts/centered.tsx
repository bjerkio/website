import { Container } from '@theme-ui/components';
import React from 'react';
import Layout from '.';

const Centered: React.FC = ({ children }) => (
  <Layout>
    <Container variant="centered">{children}</Container>
  </Layout>
);

export default Centered;
