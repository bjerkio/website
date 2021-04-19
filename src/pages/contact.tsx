import { Container } from '@theme-ui/components';
import { graphql } from 'gatsby';
import React from 'react';
import { EmployeeHeading } from '../components/contact/employee-heading';
import { EmployeeList } from '../components/contact/exployee-list';
import { Layout } from '../components/layouts';
import SEO from '../components/seo';
import { ContactPageQuery } from '../generated/graphql-types';

export const query = graphql`
  query ContactPage {
    allEmployee(sort: { fields: id }) {
      nodes {
        ...EmployeeList
      }
    }
  }
`;

const ContactPage: React.FC<{ data: ContactPageQuery }> = ({ data }) => {
  const employeeList = data.allEmployee.nodes;
  return (
    <Layout>
      <SEO title="Kontakt oss" />
      <Container variant="centered" sx={{ pr: [0, 0, 6] }}>
        <EmployeeHeading />
        <EmployeeList data={employeeList} />
      </Container>
    </Layout>
  );
};

export default ContactPage;
