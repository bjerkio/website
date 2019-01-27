import React from 'react'
import hamburger from './hamburger.svg'
import { Link } from 'gatsby'
import './navigation.css'
import { StaticQuery, graphql } from 'gatsby'

const Navigation = () => (
  <StaticQuery
    query={graphql`
      query Links {
        allPrismicLink {
          edges {
            node {
              data {
                title
                link {
                  uid
                }
              }
            }
          }
        }
      }
    `}
    render={data => (
      <nav className="navigation">
        <div className="navigation__container">
          <div className="close-button" />
          <ul>
            {data.allPrismicLink.edges.map(link => {
              return <li key={link.node.data.link.uid}>
                  <Link to={link.node.data.link.uid}>
                    {link.node.data.title}
                  </Link>
                </li>
            })}
          </ul>
        </div>
        <img className="hamburger-icon" alt="menu" src={hamburger} />
      </nav>
    )}
  />
)

export default Navigation
