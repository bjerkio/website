import React from 'react'
import Layout from '../layouts'
import Container from '../components/Container'
import { Heading, Box, Button } from 'rebass/styled-components'
import { Label, Input, Textarea, Switch } from '@rebass/forms/styled-components'

const contact = () => {
  return (
    <Layout>
      <Container pt={5} width={2 / 4}>
        <Heading>Kontaktskjema</Heading>
        <form name="contact" method="POST" data-netlify="true">
          <Box mt={3}>
            <Label mb={1}>Ditt navn</Label>
            <Input
              id="name"
              name="name"
              type="text"
              placeholder="Ola Nordmann"
            />
          </Box>
          <Box mt={3}>
            <Label mb={1}>Din e-postadresse</Label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="ola@nordmann.no"
            />
          </Box>
          <Box mt={3}>
            <Label mb={1}>Melding</Label>
            <Textarea
              id="message"
              name="message"
              height="400px"
              placeholder="Jeg lurer på …"
            />
          </Box>
          {/* <Box mt={3}>
            <Label>Ta kontakt med meg per telefon:</Label>
            <Switch style={{ backgroundColor: 'secondary'}} checked={true} />
          </Box> */}
          <Button variant="primary" mt={4}>
            Send melding
          </Button>
        </form>
      </Container>
    </Layout>
  )
}

export default contact
