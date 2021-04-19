import React from 'react';
import { Container, Heading, Text } from 'theme-ui';
import FeatureBox from '../components/feature-box';
import * as illu from '../components/illustrations';
import Layout from '../components/layouts';
import SEO from '../components/seo';

const About = () => {
  return (
    <Layout>
      <Container variant="centered">
        <SEO
          title="About us"
          description="This is how we turn your ideas into real experiences"
        />
        <Heading variant="hero">
          This is how we turn your ideas into real experiences
        </Heading>
        <FeatureBox
          textAlign="left"
          illustration={<illu.OpenSource sx={{ width: '100%' }} />}
        >
          <Heading as="h2">Open Source</Heading>
          <Text>
            We at Bjerk believe that open source code is one of the most
            important things in programming because it is a two-way transaction
            where we are both a consumer and a contributor. Such an approach
            also ensures that we deliver a product of the highest quality. Bjerk
            strongly believes that it is not only important to work together to
            achieve the goals, but also to solve problems in technology.
          </Text>
          <Text>
            Open source code also gives our customers great freedom of choice
            and movement if they choose to collaborate with someone else along
            the way.
          </Text>
        </FeatureBox>

        <FeatureBox
          textAlign="right"
          illustration={<illu.Processes sx={{ width: '100%' }} />}
        >
          <Heading as="h2">Processes</Heading>
          <Text>
            Do you need help with a little or a lot? Bjerk undertakes both small
            and large tasks, so you can be sure that we help you through the
            entire process regardless of the size of the project.
          </Text>
          <Text>
            At the beginning of a development project, we can assist in planning
            and carrying out planning. Then our architects will ensure a safe
            implementation and prepare specifications before the project can be
            taken further.
          </Text>
          <Text>
            Bjerk places great emphasis on understanding customers wishes. It
            is an important part of our processes where we build human
            understanding between us and the customer.
          </Text>
        </FeatureBox>

        <FeatureBox
          textAlign="left"
          illustration={<illu.People sx={{ width: '100%' }} />}
        >
          <Heading as="h2">People</Heading>
          <Text>
            In order to succeed in a digitization process, it is important to
            take care of the people who are going through the changes. At Bjerk,
            we have extensive experience of helping companies through
            digitization processes. We know that close dialogue and good project
            management are important factors for making the change a good
            experience for everyone in the company.
          </Text>
          <Text>
            At Bjerk, we can help with a strategy that takes care of the human
            aspect and the employees in the company. We can help you from an
            idea to a finished product and take responsibility for all or part
            of the process.
          </Text>
        </FeatureBox>
      </Container>
    </Layout>
  );
};

export default About;
