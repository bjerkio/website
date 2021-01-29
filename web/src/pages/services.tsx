import * as React from 'react'
import Layout from '../layouts'
import Container from '../components/Container'
import { Heading } from 'theme-ui'
import ServiceList from '../components/ServicesPage/ServiceList'

const ServicesPage = () => (
  <Layout>
    <Container>
      <Heading as='h1' sx={{
        fontWeight: 'normal',
        width: '60%'
      }}>Bjerk hjelper bedriften din med å ta det neste steget inn i fremtiden.</Heading>
      <ServiceList data={[]}/>
    </Container>
  </Layout>
)

export default ServicesPage
