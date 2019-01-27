import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import HomeBanner from '../components/HomeBanner/home-banner';
import Button from '../components/Button/button';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <HomeBanner />
    <div style={{
      textAlign: `center`,
      paddingBottom: `2rem`
    }}><Button link="#" title="Sjekk ut våre ledige stillinger" /></div>
  </Layout>
)

export default IndexPage
