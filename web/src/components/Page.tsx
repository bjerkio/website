import React from 'react'
import Container from './Container'
import { Heading } from 'rebass/styled-components'
import BlockContent from './BlockContent'
import Layout from '../layouts'

interface PageProps {
  pageContext: {
    title: string
    _rawContent: any
  }
}

const Page: React.FC<PageProps> = ({
  pageContext: { title, _rawContent },
  ...rest
}) => (
  <Layout>
    <Container pt={5} width={2/3}>
      <Heading fontSize={6} pb={5}>{title}</Heading>
      <BlockContent blocks={_rawContent} />
    </Container>
  </Layout>
)

export default Page
