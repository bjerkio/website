import React from 'react'
import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import './navigation.css'
import { StaticQuery, graphql } from 'gatsby'

class Navigation extends React.Component {
  constructor(props) {
    super(props)
    this.navigationContainer = React.createRef()
    this.handleClick = this.handleClick.bind(this)
  }
  handleClick() {
    const display = window
      .getComputedStyle(this.navigationContainer.current)
      .getPropertyValue('display');

    if (display !== 'none') {
      console.log(this.navigationContainer.current.style);
      this.navigationContainer.current.style.display = ''
    } else {
      this.navigationContainer.current.style.display = 'block'
    }
    
    // console.log();
  }
  render() {
    return <StaticQuery query={graphql`
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
        `} render={data => <nav className="navigation">
            <div className="navigation__container" ref={this.navigationContainer}>
              <div className="close-button" onClick={this.handleClick} />
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
            <div className="hamburger-icon" onClick={this.handleClick} />
          </nav>} />
  }
}

export default Navigation
