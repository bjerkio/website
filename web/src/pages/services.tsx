import * as React from 'react'
import Link from 'gatsby-link'
import Layout from '../layouts'
import Container from '../components/Container'

const ServicesPage = () => (
  <Layout>
    <Container>
      <h1>Services</h1>
      <p>Welcome to services</p>
      <Link to="/">Go back to the homepage</Link>
    </Container>
  </Layout>
)

export default ServicesPage
