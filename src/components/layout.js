import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'
import Header from './header'
import './layout.css'
import Footer from './footer';

const Container = styled.div`
margin: 0 auto;
max-width: 70vw;
padding: 0px 1.0875rem 1.45rem;
paddingTop: 0;
@media (max-width: 420px){
  max-width: 80vw;
} 
@media (max-width: 320px){
  max-width: 90vw;
} 
`


const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Header siteTitle={data.site.siteMetadata.title} />
        <Container>
          {children}
          <Footer />
          {/* <footer>
            © {new Date().getFullYear()}, Built with
            {` `}
            <a href="https://www.gatsbyjs.org">Gatsby</a>
          </footer> */}
        </Container>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
