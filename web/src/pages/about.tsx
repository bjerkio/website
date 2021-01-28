import * as React from 'react'
import Link from 'gatsby-link'
import Layout from '../layouts'
import Container from '../components/Container'

const AboutPage = () => (
  <Layout>
    <Container>
      <h1>About</h1>
      <p>Welcome to about</p>
      <Link to="/">Go back to the homepage</Link>
    </Container>
  </Layout>
)

export default AboutPage
