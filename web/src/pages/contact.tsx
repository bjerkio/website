import React from 'react'
import Layout from '../layouts'
import Container from '../components/Container'
import { Link } from 'gatsby'

const contact = () => {
  return (
    <Layout>
      <Container>
        <h1>Contacts</h1>
        <p>Welcome to contacts</p>
        <Link to="/">Go back to the homepage</Link>
      </Container>
    </Layout>
  )
}

export default contact
